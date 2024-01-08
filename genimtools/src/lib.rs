pub mod errors;
pub mod io;
pub mod models;
pub mod tokenizers;
mod utils;

use models::region_set::RegionSet;
use tokenizers::traits::Tokenizer;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {name}")
}

#[wasm_bindgen]
pub fn another_greet(name: &str) -> String {
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
pub async fn tokenize_bed_file(universe: &str, bed_file: &str) -> String {
    
    utils::set_panic_hook();

    // convert raw strings to regions
    let universe = io::bed_string_to_regions(universe).unwrap();

    let bed_file = io::bed_string_to_regions(bed_file).unwrap();

    // create tokenizer
    let tokenizer = tokenizers::TreeTokenizer::from(universe);

    // create region set
    let regions_to_tokenize = RegionSet::from(bed_file);
    
    // tokenize
    let tokens = tokenizer.tokenize_region_set(&regions_to_tokenize).unwrap();

    // convert tokens to string
    let mut tokens_string = String::new();
    for token in tokens.into_iter() {
        tokens_string.push_str(
            format!("{}\t{}\t{}\n", token.chr, token.start, token.end).as_str()
        );
    }

    tokens_string
}

