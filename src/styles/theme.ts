const variables = {
  colors: {
    base: "#e8eaf6",
    background: "#f7f7f7",
    black: "#17170e",
    blackLight: "#444",
    gray: "#727d86",
    silver: "#969fa7",
    white: "#e8eaf6",
    whitesmoke: "#f1f4f7",
    highlight: "#20a8ea",
    red: "#f7615f",
    orange: "#f99d09",
    yellow: "#ffee58",
    lightYellow: "#CDCFA1",
    gradient:
      "linear-gradient(225deg, rgba(48,79,254,1) 0%, rgba(197,202,233,1) 100%)",
    blue1: "#c5cae9",
    blue2: "#9fa8da",
    blue3: "#7986cb",
    blue4: "#5c6bc0",
    blue5: "#3f51b5",
    blue6: "#3949ab",
    blue7: "#303f9f",
    blue8: "#283593",
    blue9: "#1a237e",
    blueA1: "#8c9eff",
    blueA2: "#536dfe",
    blueA3: "#3d5afe",
    blueA4: "#304ffe"
  },
  sizes: {
    bioWidth: "290px",
    maxWidth: "1100px"
  },
  sideSpace: {
    small: "20px",
    large: "1.5em",
    contentSmall: "20px",
    contentLarge: "2.5em"
  },
  responsive: {
    small: "500px",
    medium: "768px",
    large: "950px"
  }
};
export type ThemeType = typeof variables;
export default variables;
