struct FenwickTree {
    array_size: usize,
    tree_array: Vec<i32>,
}

impl FenwickTree {
    fn new(array_size: usize) -> FenwickTree {
        FenwickTree {
            array_size,
            tree_array: vec![0; array_size + 1],
        }
    }

    fn increase(&mut self, position: usize, value: i32) -> Result<(), &'static str> {
        if position < 1 || position > self.array_size {
            return Err("Position is out of allowed range");
        }

        let mut i = position;
        while i <= self.array_size {
            self.tree_array[i] += value;
            i += i & i.wrapping_neg();
        }

        Ok(())
    }

    fn query(&self, position: usize) -> Result<i32, &'static str> {
        if position < 1 || position > self.array_size {
            return Err("Position is out of allowed range");
        }

        let mut sum = 0;
        let mut i = position;

        while i > 0 {
            sum += self.tree_array[i];
            i -= i & i.wrapping_neg();
        }

        Ok(sum)
    }

    fn query_range(&self, left_index: usize, right_index: usize) -> Result<i32, &'static str> {
        if left_index > right_index {
            return Err("Left index can not be greater than right one");
        }

        if left_index == 1 {
            return self.query(right_index);
        }

        Ok(self.query(right_index)? - self.query(left_index - 1)?)
    }
}
