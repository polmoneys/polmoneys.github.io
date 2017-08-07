import { css } from "glamor";

let introCtn = css({
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

let introText = css({
    fontSize:'4rem',
    color:'#444',
    fontWeight:'700',
    // display:'block',
})

const Intro = `<div class="${introCtn}">
            <p class="${introText}"> Front end adventures </p>
            </div>`;

export { Intro };
