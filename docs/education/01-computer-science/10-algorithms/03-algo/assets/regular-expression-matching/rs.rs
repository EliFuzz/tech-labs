fn regular_expression_matching(string: &str, pattern: &str) -> bool {
    let mut prev_row = vec![false; pattern.len() + 1];
    let mut current_row = vec![false; pattern.len() + 1];

    prev_row[0] = true;

    for j in 1..=pattern.len() {
        if pattern.chars().nth(j - 1) == Some('*') {
            current_row[j] = prev_row[j - 2];
        }
    }

    for (i, ch) in string.chars().enumerate() {
        let mut next_row = vec![false; 1];
        for j in 1..=pattern.len() {
            if pattern.chars().nth(j - 1) == Some('*') {
                if prev_row[j] || (j > 1 && current_row[j - 2] && (pattern.chars().nth(j - 2) == Some(ch) || pattern.chars().nth(j - 2) == Some('.'))) {
                    current_row[j] = true;
                } else {
                    current_row[j] = false;
                }
            } else if pattern.chars().nth(j - 1) == Some(ch) || pattern.chars().nth(j - 1) == Some('.') {
                current_row[j] = prev_row[j - 1];
            } else {
                current_row[j] = false;
            }
            next_row.push(current_row[j]);
        }
        prev_row = current_row.clone();
        current_row = next_row;
    }

    prev_row[pattern.len()]
}
