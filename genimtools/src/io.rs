use std::error::Error;
use std::fs::File;
use std::io::{BufRead, BufReader};
use std::path::Path;

use crate::models::region::Region;

pub fn extract_regions_from_bed_file(path: &Path) -> Result<Vec<Region>, Box<dyn Error>> {
    let file = File::open(path)?;
    let reader = BufReader::new(file);

    let mut regions = Vec::new();

    for line in reader.lines() {
        let line = line?;
        let fields: Vec<&str> = line.split('\t').collect();

        let chr = fields[0];
        let start = fields[1].parse::<u32>()?;
        let end = fields[2].parse::<u32>()?;

        let region = Region {
            chr: chr.to_string(),
            start,
            end,
        };

        regions.push(region);
    }
    Ok(regions)
}

pub fn bed_string_to_regions(bed_string: &str) -> Result<Vec<Region>, Box<dyn Error>> {

    let mut regions = Vec::new();

    for line in bed_string.split('\n') {
        let line = line.trim();

        let fields: Vec<&str> = line.split('\t').collect();

        // skip empty lines
        if fields.is_empty() {
            continue;
        }

        // panic if there are not 3 fields
        if fields.len() < 3 {
            let msg = format!("Expected 3 fields in line, found {} fields: {}", fields.len(), line);
            panic!("{}", msg);
        }

        let chr = fields[0];

        if let Ok(start) = fields[1].parse::<u32>() {
            if let Ok(end) = fields[2].parse::<u32>() {
                let region = Region {
                    chr: chr.to_string(),
                    start,
                    end,
                };
                regions.push(region);
            } else {
                let msg = format!("Could not parse end coordinate for region: {}", line);
                return Err(msg.into());
            }
        } else {
            let msg = format!("Could not parse start coordinate for region: {}", line);
            return Err(msg.into());
        }
    }
    Ok(regions)
}