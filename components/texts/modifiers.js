import { typeScale } from "utils/typo";

export const HEADERS_MODIFIERS = {
  h1: () => `
        font-size: ${typeScale.header1};
        `,
  h2: () => `
        font-size: ${typeScale.header2};
        `,
  h3: () => `
        font-size: ${typeScale.header3};
        `,
  h4: () => `
        font-size: ${typeScale.header4};
        `,
  h5: () => `
        font-size: ${typeScale.header5};
        `,
  heroHeader: () => `
            font-size: ${typeScale.heroHeader};
            `,
  smallHeroHeader: () => `
            font-size: ${typeScale.smallHeroHeader};
  `,
  primaryColor: (props) => `
  color: ${props.theme.primaryColor} !important;
  font-weight: bold;
  `,
  secondaryColor: (props) => `
  color: ${props.theme.secondaryColor} !important;
  font-weight: bold;
  `,
  tertiaryColor: (props) => `
  color: ${props.theme.tertiaryColor} !important;
  font-weight: bold;
  `,
  borderBottom: (props) => `
  border-bottom: 3px solid ${props.theme.borderText};
  width: fit-content;
  `,
  bold: () => `
  font-weight: bold;
  `,
  center: () => `
  text-align: center;
  `,
  link: () => `
    &:hover {
      opacity: 0.8;
      cursor: pointer;
      text-decoration: underline;
    }
  `,
  noMarginTop: () => `
    margin-top: 0;
  `,
  italic: () => `
      font-style: italic;
`,
  cursorPointer: () => `
    &:hover{
      cursor: pointer;  

    }
`,
};
