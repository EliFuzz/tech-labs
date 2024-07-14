fn is_palindrome(s: &str) -> bool {
    let s = s.to_lowercase();
    let mut i = 0;
    let mut j = s.len() - 1;
    while i < j {
        if s.chars().nth(i).unwrap() != s.chars().nth(j).unwrap() {
            return false;
        }
        i += 1;
        j -= 1;
    }
    true
}
