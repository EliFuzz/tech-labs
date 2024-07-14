const V: usize = 6;

fn is_safe(v: usize, graph: &[[i32; V]; V], path: &[i32], pos: usize) -> bool {
    if graph[path[pos - 1] as usize][v] == 0 {
        return false;
    }

    for i in 0..pos {
        if path[i] == v as i32 {
            return false;
        }
    }

    true
}

fn ham_cycle_util(graph: &[[i32; V]; V], path: &mut [i32], pos: usize) -> bool {
    if pos == V {
        return graph[path[pos - 1] as usize][path[0] as usize] == 1;
    }

    for v in 1..V {
        if is_safe(v, graph, path, pos) {
            path[pos] = v as i32;
            if ham_cycle_util(graph, path, pos + 1) {
                return true;
            }
            path[pos] = -1;
        }
    }

    false
}

fn ham_cycle(graph: &[[i32; V]; V]) {
    let mut path = vec![-1; V];
    path[0] = 0;
    if !ham_cycle_util(graph, &mut path, 1) {
        println!("No Hamiltonian Cycle exists");
        return;
    }

    println!("Hamiltonian Cycle exists:");
    for vertex in path {
        print!("{} ", vertex);
    }
    println!("{}", path[0]);
}
