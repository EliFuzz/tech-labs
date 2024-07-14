fn rabin_karp(text: &str, pattern: &str) -> Vec<usize> {
    const PRIME: usize = 101;
    let mut result = Vec::new();
    let n = text.len();
    let m = pattern.len();
    if n < m {
        return result;
    }

    let mut h = 1;
    for _ in 0..m - 1 {
        h = (h * 256) % PRIME;
    }

    let mut pattern_hash = 0;
    let mut window_hash = 0;
    for i in 0..m {
        pattern_hash = (256 * pattern_hash + pattern.as_bytes()[i] as usize) % PRIME;
        window_hash = (256 * window_hash + text.as_bytes()[i] as usize) % PRIME;
    }

    for i in 0..=n - m {
        if pattern_hash == window_hash {
            let mut match_found = true;
            for j in 0..m {
                if text.as_bytes()[i + j] != pattern.as_bytes()[j] {
                    match_found = false;
                    break;
                }
            }
            if match_found {
                result.push(i);
            }
        }
        if i < n - m {
            window_hash =
                (256 * (window_hash as isize - text.as_bytes()[i] as isize * h as isize) as usize
                    + text.as_bytes()[i + m] as usize)
                    % PRIME;
            if window_hash < 0 {
                window_hash += PRIME;
            }
        }
    }
    result
}
