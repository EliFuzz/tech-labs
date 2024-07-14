struct SimplePolynomialHash {
    base: i32,
}

impl SimplePolynomialHash {
    fn new(base: i32) -> SimplePolynomialHash {
        SimplePolynomialHash { base }
    }

    fn hash(&self, word: &str) -> i32 {
        let mut hash = 0;
        for (char_index, character) in word.chars().enumerate() {
            hash += (character as i32) * self.base.pow(char_index as u32);
        }
        hash
    }

    fn roll(&self, prev_hash: i32, prev_word: &str, new_word: &str) -> i32 {
        let mut hash = prev_hash;
        let prev_value = prev_word.chars().nth(0).unwrap() as i32;
        let new_value = new_word.chars().nth(new_word.len() - 1).unwrap() as i32;

        hash -= prev_value;
        hash /= self.base;
        hash += new_value * self.base.pow((new_word.len() - 1) as u32);

        hash
    }
}

struct PolynomialHash {
    base: i32,
    modulus: i32,
}

impl PolynomialHash {
    fn new(base: i32, modulus: i32) -> PolynomialHash {
        PolynomialHash { base, modulus }
    }

    fn hash(&self, word: &str) -> i32 {
        let char_codes: Vec<i32> = word.chars().map(|char| self.char_to_number(char)).collect();
        let mut hash = 0;
        for char_index in 0..char_codes.len() {
            hash *= self.base;
            hash += char_codes[char_index];
            hash %= self.modulus;
        }
        hash
    }

    fn roll(&self, prev_hash: i32, prev_word: &str, new_word: &str) -> i32 {
        let mut hash = prev_hash;
        let prev_value = self.char_to_number(prev_word.chars().nth(0).unwrap());
        let new_value = self.char_to_number(new_word.chars().nth(new_word.len() - 1).unwrap());

        let mut prev_value_multiplier = 1;
        for i in 1..prev_word.len() {
            prev_value_multiplier *= self.base;
            prev_value_multiplier %= self.modulus;
        }

        hash += self.modulus;
        hash -= (prev_value * prev_value_multiplier) % self.modulus;

        hash *= self.base;
        hash += new_value;
        hash %= self.modulus;

        hash
    }

    fn char_to_number(&self, character: char) -> i32 {
        let mut char_code = character as i32;
        if let Some(surrogate) = character.encode_utf16().nth(1) {
            let surrogate_shift = 2_i32.pow(16);
            char_code += surrogate as i32 * surrogate_shift;
        }
        char_code
    }
}
