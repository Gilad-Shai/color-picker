import { useState } from "react";
import { hexToRgb, hexToHsl } from "../utils/colorConversions";

const ColorPicker = () => {
  const [color, setColor] = useState("#3b82f6");

  const rgb = hexToRgb(color);
  const hsl = hexToHsl(color);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    });
  };

  const hexString = color.toUpperCase();
  const rgbString = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "";
  const hslString = hsl
    ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
    : "";

  return (
    <div className="color-picker-container">
      <div
        className="color-preview"
        style={{ backgroundColor: color }}
      >
        <span className="color-preview-label">{hexString}</span>
      </div>

      <div className="picker-wrapper">
        <label htmlFor="colorInput" className="picker-label">
          Choose a Color
        </label>
        <input
          id="colorInput"
          type="color"
          value={color}
          onChange={handleChange}
          className="color-input"
        />
      </div>

      <div className="color-values">
        <div className="color-value-card">
          <span className="value-label">HEX</span>
          <span className="value-text">{hexString}</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(hexString)}
            title="Copy HEX"
          >
            Copy
          </button>
        </div>

        <div className="color-value-card">
          <span className="value-label">RGB</span>
          <span className="value-text">{rgbString}</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(rgbString)}
            title="Copy RGB"
          >
            Copy
          </button>
        </div>

        <div className="color-value-card">
          <span className="value-label">HSL</span>
          <span className="value-text">{hslString}</span>
          <button
            className="copy-btn"
            onClick={() => copyToClipboard(hslString)}
            title="Copy HSL"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="color-swatches">
        <p className="swatches-title">Quick Presets</p>
        <div className="swatches-grid">
          {[
            "#ef4444",
            "#f97316",
            "#eab308",
            "#22c55e",
            "#3b82f6",
            "#8b5cf6",
            "#ec4899",
            "#14b8a6",
            "#ffffff",
            "#000000",
          ].map((swatch) => (
            <button
              key={swatch}
              className="swatch"
              style={{
                backgroundColor: swatch,
                border:
                  color.toLowerCase() === swatch
                    ? "3px solid #fff"
                    : "2px solid transparent",
                outline:
                  color.toLowerCase() === swatch
                    ? "2px solid #555"
                    : "none",
              }}
              onClick={() => setColor(swatch)}
              title={swatch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;