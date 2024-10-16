mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn hello() -> String;
}

#[wasm_bindgen]
pub fn greet() -> String {
    return hello() + &" Rust!".to_owned();
}
