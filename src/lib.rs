mod utils;

use std::{path::Path, convert::TryFrom};

use wasm_bindgen::prelude::*;

use genimtools::tokenizers::{TreeTokenizer, Tokenizer};
use genimtools::common::utils::extract_regions_from_bed_file;
use genimtools::common::models::Region;

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

#[wasm_bindgen]
pub fn tokenize_regions(universe: &str, regions: &str) -> String {
    let universe_path = Path::new(universe);
    let tokenizer = TreeTokenizer::try_from(universe_path).unwrap();

    let regions_path = Path::new(regions);
    let regions_to_tokenize = extract_regions_from_bed_file(regions_path).unwrap();

    let mut tokens: Vec<Region> = Vec::new();
    for region in regions_to_tokenize.iter() {
        let tokenized_regions = tokenizer.tokenize_region(region).unwrap();
        tokens.extend(tokenized_regions.regions);
    }

    // join tokens by chr, start, and end into one string with newlines
    let mut tokens_string = String::new();
    for token in tokens.iter() {
        tokens_string.push_str(&format!("{}\t{}\t{}\n", token.chr, token.start, token.end));
    }

    tokens_string
}
