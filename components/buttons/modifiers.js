// utils
import { typeScale } from "utils/typo";
// colors
import { main } from "utils/colors";

// Modifiers for buttons
export const BUTTON_MODIFIERS = {
  extraSmall: () => `
  padding: 4px 0.5rem;
  font-size: ${typeScale.helperText};
  min-width: 1rem;
  `,
  small: () => `
      padding: 8px 1rem;
      font-size: ${typeScale.paragraph};
      `,
  large: () => `
      padding: 12px 20px;
      font-size: ${typeScale.smallParagraph};
  `,
  form: () => `
    padding: 10px 18px;
    font-size: ${typeScale.smallParagraph};
  `,
  autoWidth: () => `
    width: fit-content;
  `,
  delete: () => `
    background-color: #ff0000;
    color: #fff;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #ff0000;
      color: #fff;
      opacity: 0.8;
    }
  `,
  selected: () => `
    background-color: #fff;
    color: ${main[100]};
`,
  notClickable: () => `
    pointer-events: none;
    cursor: default;
    &:hover {
      cursor: default !important;
    }
  `,
};
