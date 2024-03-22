fn build_table(pattern: &str) -> Vec<usize> {
    let mut table = vec![0; pattern.len()];
    let mut prefix = 0;

    for (i, c) in pattern.chars().enumerate().skip(1) {
        while prefix > 0 && c != pattern.chars().nth(prefix).unwrap() {
            prefix = table[prefix - 1];
        }
        if c == pattern.chars().nth(prefix).unwrap() {
            prefix += 1;
        }
        table[i] = prefix;
    }

    table
}

fn kmp_search(text: &str, pattern: &str) -> Vec<usize> {
    let table = build_table(pattern);
    let mut matches = vec![];
    let mut j = 0;

    for (i, c) in text.chars().enumerate() {
        while j > 0 && c != pattern.chars().nth(j).unwrap() {
            j = table[j - 1];
        }
        if c == pattern.chars().nth(j).unwrap() {
            j += 1;
        }
        if j == pattern.len() {
            matches.push(i - pattern.len() + 1);
            j = table[j - 1];
        }
    }

    matches
}
