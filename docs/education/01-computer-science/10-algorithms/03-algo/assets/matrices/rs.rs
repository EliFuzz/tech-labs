use std::error::Error;

fn shape(m: &Vec<Vec<i32>>) -> Vec<usize> {
    let mut shapes = Vec::new();
    let mut dimension = m;
    while let Some(inner) = dimension.first() {
        shapes.push(inner.len());
        if let Some(inner_dim) = inner.get(0) {
            dimension = inner;
        } else {
            dimension = &vec![];
        }
    }
    shapes
}

fn validate_type<T>(m: &Vec<Vec<T>>) {
    if m.is_empty() || m[0].is_empty() {
        panic!("Invalid matrix format");
    }
}

fn validate_2d<T>(m: &Vec<Vec<T>>) {
    validate_type(m);
    let a_shape = shape(m);
    if a_shape.len() != 2 {
        panic!("Matrix is not of 2D shape");
    }
}

fn validate_same_shape(a: &Vec<Vec<i32>>, b: &Vec<Vec<i32>>) -> Result<(), Box<dyn Error>> {
    validate_type(a)?;
    validate_type(b)?;

    let a_shape = shape(a);
    let b_shape = shape(b);

    if a_shape.len() != b_shape.len() {
        return Err("Matrices have different dimensions".into());
    }

    for (a_dim, b_dim) in a_shape.iter().zip(b_shape.iter()) {
        if a_dim != b_dim {
            return Err("Matrices have different shapes".into());
        }
    }

    Ok(())
}

fn generate<F>(m_shape: &[usize], fill: F) -> Vec<Vec<i32>>
where
    F: Fn(Vec<usize>) -> i32,
{
    fn generate_recursively<F>(
        rec_shape: &[usize],
        rec_indices: Vec<usize>,
        fill: F,
    ) -> Vec<Vec<i32>>
    where
        F: Fn(Vec<usize>) -> i32,
    {
        if rec_shape.len() == 1 {
            return (0..rec_shape[0])
                .map(|cell_index| fill([&rec_indices[..], &[cell_index]].concat()))
                .collect();
        }
        let mut m = Vec::new();
        for i in 0..rec_shape[0] {
            m.push(generate_recursively(
                &rec_shape[1..],
                [&rec_indices[..], &[i]].concat(),
                &fill,
            ));
        }
        m
    }

    generate_recursively(m_shape, Vec::new(), fill)
}

fn zeros(m_shape: &[usize]) -> Vec<Vec<i32>> {
    generate(m_shape, |_| 0)
}

fn dot(a: &Vec<Vec<i32>>, b: &Vec<Vec<i32>>) -> Result<Vec<Vec<i32>>, Box<dyn Error>> {
    validate_2d(a)?;
    validate_2d(b)?;

    let a_shape = shape(a);
    let b_shape = shape(b);

    if a_shape[1] != b_shape[0] {
        return Err("Matrices have incompatible shape for multiplication".into());
    }

    let output_shape = vec![a_shape[0], b_shape[1]];
    let c = zeros(&output_shape);

    for b_col in 0..b[0].len() {
        for a_row in 0..a.len() {
            let mut cell_sum = 0;
            for a_col in 0..a[a_row].len() {
                cell_sum += a[a_row][a_col] * b[a_col][b_col];
            }
            c[a_row][b_col] = cell_sum;
        }
    }

    Ok(c)
}

fn walk<F>(m: &Vec<Vec<i32>>, visit: F)
where
    F: Fn(Vec<usize>, i32),
{
    fn rec_walk<F>(rec_m: &Vec<Vec<i32>>, cell_indices: Vec<usize>, visit: F)
    where
        F: Fn(Vec<usize>, i32),
    {
        let rec_m_shape = shape(rec_m);

        if rec_m_shape.len() == 1 {
            for i in 0..rec_m.len() {
                visit([cell_indices.clone(), vec![i]].concat(), rec_m[i][0]);
            }
        }
        for i in 0..rec_m.len() {
            rec_walk(&rec_m[i], [cell_indices.clone(), vec![i]].concat(), &visit);
        }
    }

    rec_walk(m, Vec::new(), visit);
}

fn get_cell_at_index(m: &Vec<Vec<i32>>, cell_indices: &[usize]) -> i32 {
    let mut cell = &m[cell_indices[0]];
    for dim_idx in 1..cell_indices.len() - 1 {
        cell = &cell[cell_indices[dim_idx]];
    }
    cell[cell_indices[cell_indices.len() - 1]]
}

fn update_cell_at_index(m: &mut Vec<Vec<i32>>, cell_indices: &[usize], cell_value: i32) {
    let mut cell = &mut m[cell_indices[0]];
    for dim_idx in 1..cell_indices.len() - 1 {
        cell = &mut cell[cell_indices[dim_idx]];
    }
    cell[cell_indices[cell_indices.len() - 1]] = cell_value;
}

fn add(a: &Vec<Vec<i32>>, b: &Vec<Vec<i32>>) -> Result<Vec<Vec<i32>>, Box<dyn Error>> {
    validate_same_shape(a, b)?;

    let mut result = zeros(&shape(a));

    walk(a, |cell_indices, cell_value| {
        update_cell_at_index(&mut result, &cell_indices, cell_value);
    });

    walk(b, |cell_indices, cell_value| {
        let current_cell_value = get_cell_at_index(&result, &cell_indices);
        update_cell_at_index(&mut result, &cell_indices, current_cell_value + cell_value);
    });

    Ok(result)
}

fn mul(a: &Vec<Vec<i32>>, b: &Vec<Vec<i32>>) -> Result<Vec<Vec<i32>>, Box<dyn Error>> {
    validate_same_shape(a, b)?;

    let mut result = zeros(&shape(a));

    walk(a, |cell_indices, cell_value| {
        update_cell_at_index(&mut result, &cell_indices, cell_value);
    });

    walk(b, |cell_indices, cell_value| {
        let current_cell_value = get_cell_at_index(&result, &cell_indices);
        update_cell_at_index(&mut result, &cell_indices, current_cell_value * cell_value);
    });

    Ok(result)
}

fn sub(a: &Vec<Vec<i32>>, b: &Vec<Vec<i32>>) -> Result<Vec<Vec<i32>>, Box<dyn Error>> {
    validate_same_shape(a, b)?;

    let mut result = zeros(&shape(a));

    walk(a, |cell_indices, cell_value| {
        update_cell_at_index(&mut result, &cell_indices, cell_value);
    });

    walk(b, |cell_indices, cell_value| {
        let current_cell_value = get_cell_at_index(&result, &cell_indices);
        update_cell_at_index(&mut result, &cell_indices, current_cell_value - cell_value);
    });

    Ok(result)
}

fn validate_type(a: &Vec<Vec<i32>>) -> Result<(), Box<dyn Error>> {
    if !a.iter().all(|inner| inner.iter().all(|&x| x == 0 || x == 1)) {
        return Err("Matrix contains invalid elements".into());
    }
    Ok(())
}

fn validate_2d(a: &Vec<Vec<i32>>) -> Result<(), Box<dyn Error>> {
    if a.iter().any(|inner| inner.len() != a[0].len()) {
        return Err("Matrix rows have different lengths".into());
    }
    Ok(())
}
