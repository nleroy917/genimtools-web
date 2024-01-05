mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {name}")
}

#[wasm_bindgen]
pub fn count_regions(bed_file: &str) -> u32 {
    let lines = bed_file.split('\n');
    let mut count: u32 = 0;
    for _ in lines {
        count += 1;
    }
    count
}

