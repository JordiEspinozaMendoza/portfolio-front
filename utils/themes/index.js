import { light, main, neutral, text } from "utils/colors";
export const mainTheme = {
  primaryColor: main[100],
  secondaryColor: main[300],
  tertiaryColor: main[200],
  quaternaryColor: main[400],
  quinaryColor: main[500],
  primary: main[100],
  secondary: main[300],
  tertiary: main[200],
  background: main[400],
  textColor: "#333",
  textColorInverted: "#fff",
  borderText: main[200],
  light: {
    background: main[400],
    textColor: "#333",
  },
  links: {
    color: main[500],
    hover: {
      color: main[600],
    },
  },
  // * Navbar
  navbar: {
    background: main[400],
    backgroundAlt: neutral[600],
    color: neutral[100],
    hover: {
      background: main[500],
      color: main[500],
    },
    unselected: text.textInverted,
    selected: main[200],
    mobile: {
      hover: {
        background: main[100],
        color: main[500],
      },
    },
  },
  // *  Buttons
  buttons: {
    primary: {
      background: main[100],
      color: text.text,
      hover: {
        background: neutral[600],
        color: text.textInverted,
      },
    },
    secondary: {
      background: main[200],
      color: text.textInverted,
      hover: {
        background: main[400],
        color: text.textInverted,
      },
    },
    tertiary: {
      background: main[400],
      color: text.textInverted,
      hover: {
        background: main[700],
        color: text.textInverted,
      },
    },
    social: {
      background: main[200],
      color: text.textInverted,
      hover: {
        background: main[300],
        color: text.textInverted,
      },
    },
  },
  header: {
    color: neutral[100],
    background: main[500],
  },
  // * Cards
  card: {
    background: main[400],
    color: text.text,
    hover: {
      background: main[200],
      color: text.textInverted,
      borderBottom: main[100],
    },
  },
  // * Loader
  loader: {
    background: main[100],
  },
  // * Footer
  footer: {
    background: neutral[600],
    color: text.textInverted,
    border: main[600],
    bottom: {
      background: main[200],
      color: text.textInverted,
    },
  },
  // * Forms
  form: {
    background: neutral[100],
    color: text.text,
    borderColor: neutral[300],
    accentColor: main[300],
    input: {
      background: neutral[100],
      color: text.textInverted,
      borderColor: "#ccc",
    },
  },
  modal: {
    background: neutral[100],
  },
};
export const lightTheme = {
  primaryColor: light[100],
  secondaryColor: light[300],
  tertiaryColor: light[200],
  primary: light[100],
  secondary: light[300],
  tertiary: light[200],
  background: light[400],
  textColor: "#333",
  textColorInverted: "#fff",
  borderText: light[200],
  light: {
    background: light[400],
    textColor: "#333",
  },
  links: {
    color: light[500],
    hover: {
      color: light[600],
    },
  },
  // * Navbar
  navbar: {
    background: light[500],
    backgroundAlt: neutral[600],
    color: neutral[100],
    hover: {
      background: light[500],
      color: light[500],
    },
    unselected: text.textInverted,
    selected: light[200],
    mobile: {
      hover: {
        background: light[100],
        color: light[500],
      },
    },
  },
  // *  Buttons
  buttons: {
    primary: {
      background: light[100],
      color: text.text,
      hover: {
        background: neutral[600],
        color: text.textInverted,
      },
    },
    secondary: {
      background: light[200],
      color: text.textInverted,
      hover: {
        background: light[400],
        color: text.textInverted,
      },
    },
    tertiary: {
      background: light[400],
      color: text.textInverted,
      hover: {
        background: light[700],
        color: text.textInverted,
      },
    },
    social: {
      background: light[200],
      color: text.textInverted,
      hover: {
        background: light[300],
        color: text.textInverted,
      },
    },
  },
  header: {
    color: neutral[600],
    background: light[100],
  },
  // * Cards
  card: {
    background: neutral[100],
    color: text.text,
    hover: {
      background: light[200],
      color: text.textInverted,
      borderBottom: light[100],
    },
  },
  // * Loader
  loader: {
    background: light[100],
  },
  // * Footer
  footer: {
    background: neutral[600],
    color: text.textInverted,
    border: light[600],
    bottom: {
      background: light[200],
      color: text.textInverted,
    },
  },
  // * Forms
  form: {
    background: neutral[100],
    color: text.text,
    borderColor: neutral[300],
    accentColor: light[300],
    input: {
      background: neutral[100],
      color: text.textInverted,
      borderColor: "#ccc",
    },
  },
  modal: {
    background: neutral[100],
  },
};
