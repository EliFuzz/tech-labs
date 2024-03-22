fn factorial_recursive(n: u64) -> u64 {
    if n == 0 || n == 1 {
        1
    } else {
        n * factorial_recursive(n - 1)
    }
}

fn factorial_iterative(n: u64) -> u64 {
    (1..=n).product()
}

use std::collections::HashMap;
fn factorial_memoization(n: u64, memo: &mut HashMap<u64, u64>) -> u64 {
    if n == 0 || n == 1 {
        1
    } else {
        if let Some(&result) = memo.get(&n) {
            result
        } else {
            let result = n * factorial_memoization(n - 1, memo);
            memo.insert(n, result);
            result
        }
    }
}

fn factorial_tabulation(n: u64) -> u64 {
    let mut table = vec![1; (n + 1) as usize];
    for i in 2..=n as usize {
        table[i] = i as u64 * table[i - 1];
    }
    table[n as usize]
}

fn fibonacci_recursive(n: u64) -> u64 {
    if n <= 1 {
        n
    } else {
        fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
    }
}

fn fibonacci_iterative(n: u64) -> u64 {
    let (mut a, mut b) = (0, 1);
    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }
    b
}

fn fibonacci_memoization(n: u64, memo: &mut HashMap<u64, u64>) -> u64 {
    if n <= 1 {
        n
    } else {
        if let Some(&result) = memo.get(&n) {
            result
        } else {
            let result = fibonacci_memoization(n - 1, memo) + fibonacci_memoization(n - 2, memo);
            memo.insert(n, result);
            result
        }
    }
}

fn fibonacci_tabulation(n: u64) -> u64 {
    if n <= 1 {
        n
    } else {
        let mut table = vec![0; (n + 1) as usize];
        table[1] = 1;
        for i in 2..=n as usize {
            table[i] = table[i - 1] + table[i - 2];
        }
        table[n as usize]
    }
}
