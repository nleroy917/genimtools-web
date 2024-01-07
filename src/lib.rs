pub mod errors;
pub mod io;
pub mod models;
pub mod tokenizers;
mod utils;


use std::{convert::TryFrom, path::Path};

use io::extract_regions_from_bed_file;
use models::region_set::RegionSet;
use tokenizers::traits::Tokenizer;
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

#[wasm_bindgen]
pub fn tokenize_bed_file(universe: &str, bed_file: &str) -> String {
    let universe = Path::new(universe);
    let tokenizer = tokenizers::TreeTokenizer::try_from(universe).unwrap();

    let bed_file = Path::new(bed_file);
    let regions_to_tokenize = RegionSet::from(
        extract_regions_from_bed_file(bed_file).unwrap()
    );
    
    let tokens = tokenizer.tokenize_region_set(&regions_to_tokenize).unwrap();

    let mut tokens_string = String::new();
    for token in tokens.into_iter() {
        tokens_string.push_str(
            format!("{}\t{}\t{}\n", token.chr, token.start, token.end).as_str()
        );
        tokens_string.push('\n');
    }

    tokens_string
}

