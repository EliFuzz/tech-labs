fn trial_division(number: u32) -> bool {
    if number <= 1 || (number % 2 == 0 && number != 2) {
        return false;
    }

    let divider_limit = (number as f64).sqrt() as u32;
    for divider in (3..=divider_limit).step_by(2) {
        if number % divider == 0 {
            return false;
        }
    }

    true
}
