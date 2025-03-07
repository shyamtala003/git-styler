/**
 * Property-based utility for text formatting using ANSI escape sequences.
 */

class StyledText {
  constructor(text = "") {
    this.text = text;
    this.styles = [];
  }

  // ANSI escape codes for text formatting
  static RESET = "\x1b[0m"; // Reset all styles
  static BOLD = "\x1b[1m"; // Bold text
  static ITALIC = "\x1b[3m"; // Italic text (not widely supported)
  static UNDERLINE = "\x1b[4m"; // Underline text

  /**
   * Applies bold formatting.
   * @returns {StyledText} The instance for chaining.
   */
  get bold() {
    this.styles.push(StyledText.BOLD);
    return this;
  }

  /**
   * Applies italic formatting.
   * @returns {StyledText} The instance for chaining.
   */
  get italic() {
    this.styles.push(StyledText.ITALIC);
    return this;
  }

  /**
   * Applies underline formatting.
   * @returns {StyledText} The instance for chaining.
   */
  get underline() {
    this.styles.push(StyledText.UNDERLINE);
    return this;
  }

  /**
   * Applies RGB color to text.
   * @param {number} r - Red value (0-255).
   * @param {number} g - Green value (0-255).
   * @param {number} b - Blue value (0-255).
   * @returns {StyledText} The instance for chaining.
   */
  rgb(r, g, b) {
    this.styles.push(`\x1b[38;2;${r};${g};${b}m`);
    return this;
  }

  /**
   * Applies RGB background color to text.
   * @param {number} r - Red value (0-255).
   * @param {number} g - Green value (0-255).
   * @param {number} b - Blue value (0-255).
   * @returns {StyledText} The instance for chaining.
   */
  bgRgb(r, g, b) {
    this.styles.push(`\x1b[48;2;${r};${g};${b}m`);
    return this;
  }

  /**
   * Finalizes the styled text.
   * @param {string} text - The text to format.
   * @returns {string} The formatted text.
   */
  apply(text) {
    const styles = this.styles.join("");
    return console.log(`${styles}${text}${StyledText.RESET}`);
  }
}

export const style = () => new StyledText();
