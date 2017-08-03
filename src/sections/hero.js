import { css } from "glamor";
import { Badge } from "../parts/logo";

let heroCtn = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
    backgroundColor: "#f5f5f5",
  "@media(min-width: 300px)": {
    justifyContent: "center",
    height: "100vh"
  }
});

const Hero = `<div class="${heroCtn}">
            ${Badge}    
            </div>`;

export { Hero };
