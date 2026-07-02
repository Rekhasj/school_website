/**
 * Hawkings International School — Brand Color Palette
 *
 * All 5 primary colors come directly from the school logo:
 *
 *   navy   — the "H" letter, frame borders and outer ring
 *   teal   — left "TRIUMPH" arc
 *   green  — right "DISCIPLINE" arc
 *   orange — bottom "KNOWLEDGE" arc
 *   gold   — the sun and rays at the top
 *
 * Use these constants everywhere instead of hardcoding hex values
 * so a future rebrand only needs changes in this one file.
 */

export const colors = {

  // ── 5 LOGO COLORS ────────────────────────────────────────────────────────

  /** Navy Blue — "H" letter and frame; navbar bg, headings, footer bg, primary buttons */
  navy:     'rgb(24, 55, 105)',     // #183769

  /** Teal — "TRIUMPH" left arc; Dream section banner, school-hours card */
  teal:     '#4daeae',

  /** Sage Green — "DISCIPLINE" right arc; success states, WhatsApp button */
  green:    '#78c078',

  /** Orange — "KNOWLEDGE" bottom arc; address icon, orange accent highlights */
  orange:   'rgb(242, 103, 36)',    // #f26724

  /** Gold / Yellow — sun & rays; navbar hover, footer underlines & icons, active tab */
  gold:     'rgb(254, 201, 3)',     // #fec903

  // ── SUPPORTING TONES ─────────────────────────────────────────────────────

  /** Deep Teal — darker shade of teal; school-hours info card (#257a8f) */
  deepTeal:   'rgb(37, 122, 143)', // #257a8f

  /** Dark Navy — footer background gradient secondary stop */
  darkNavy:   '#14305c',

  /** Emerald — CTA buttons, Mission section accents, success feedback */
  emerald:    '#1d9e75',

  /** Dark Green — FooterBanner overlay gradient */
  darkGreen:  '#00594c',

  /** Sky Blue — decorative blobs and background accents */
  skyblue:    'rgb(130, 210, 223)',

  /** Light Green — highlighted brand text accents */
  lightGreen: 'rgb(149, 199, 114)',

  // ── LEGACY ALIASES (kept for backward compatibility) ─────────────────────
  // Existing components still reference these key names.
  // Prefer the named keys above for any new code.

  blue:       'rgb(24, 55, 105)',   // → navy
  yellow:     'rgb(254, 201, 3)',   // → gold
  red:        'rgb(242, 103, 36)',  // → orange  (was mislabeled "red")
  lightblue:  'rgb(37, 122, 143)', // → deepTeal

};
