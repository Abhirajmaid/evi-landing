// Shared helper to wrap symbol characters in a different font for better legibility
import React from "react";

export const SYMBOLS_FONT_CLASS = "font-mono";

export function stylizeSymbols(text = "") {
  return String(text)
    .split("")
    .map((char, idx) => {
      // characters we want styled differently
      if ("&%+-—©@".includes(char)) {
        return (
          <span key={idx} className={SYMBOLS_FONT_CLASS}>
            {char}
          </span>
        );
      }
      return char;
    });
}

