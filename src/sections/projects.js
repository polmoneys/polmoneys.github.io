import { css } from "glamor";
// alpha beta chi delta

let gridCtn = css({
  display: "grid",
  gridGap: "10px",
  width: "100%",
  gridTemplateColumns: " 1fr ",
  "@media(min-width: 1024px)": {
    height: "90vh",
    marginBottom:'10vh',
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
    gridTemplateRows: " 1fr 1fr"
  }
});

let item = css({
  backgroundColor: "#f5f5f5",
  color: "#444",
  padding: "2rem",
  fontSize: " 150%",
  position: "relative",
  textDecoration:'none',
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  "@media(min-width: 1024px)": {
    backgroundColor: "#444",
    color: "#fff"
  }
});
let alphas = css({
  gridColumn: "1 / 1 ",
  //   backgroundImage: 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
  "@media(min-width: 1024px)": {
    gridColumn: "1 / span 4"
    //  backgroundBlendMode:'none',
    // backgroundImage:'none',
  }
});
let betas = css({
  gridColumn: "1 / 1",
  //   backgroundImage: 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
  "@media(min-width: 1024px)": {
    // backgroundImage:'none',
    gridColumn: "1 / span 2",
    gridRow: " 2"
  }
});

let chis = css({
  gridColumn: "1 / 1",
  //   backgroundImage: 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
  "@media(min-width: 1024px)": {
    // backgroundImage:'none',
    gridRow: "2",
    gridColumn: "3 / span 2"
  }
});

let label = css({
  display: "inline-block",
  padding:'1vh 2vw',
    backgroundColor: "rgba(0,0,0,.2)",
  "@media(min-width: 1024px)": {
    left: "2vw",
    bottom: "2vh",
    position: "absolute",
    // backgroundColor: "pink",
  }
});

let quick = css({
    fontWeight:'200',
    fontSize:'1rem',
})


const doSomething = () => console.log('hi') 


const Alpha = `<a href='https://github.com/polmoneys/mvj' class=" ${alphas} ${item}" target='_blank' rel="noopener">
      <p>MVJ is my minimal-viable-javascript-boiler for small projects. It explores Webpack, es6, css-in-js and whatever pattern I'm dancing with.  </p>
      <p class="${quick}"> Quick Start </p>
      <p>git clone && npm i && npm Quick start </p>
      <p class="${label}"> Javascript </p>
      </a>`;

const Beta = `<a href='https://github.com/polmoneys/TvrboReact' class=" ${betas} ${item}" target='_blank' rel="noopener">
        <p>TvrboReact is our current boiler at work. This fork includes components and make it easier to onboard new team members.  </p>
     <p class="${quick}"> Quick Start </p>
      <p>git clone && npm i && make dev </p>
     <p class="${label}">  React </p>
</a>`;

const Chi = `<a href='https://github.com/polmoneys/rn-boiler' class=" ${chis} ${item}" target='_blank' rel="noopener">
        <p>A repo for playing and testing components, interactions and patterns. </p>
    <p class="${quick}">  Quick Start </p>
      <p>git clone && npm i && npm run ios </p>
      <p class="${label}">  React Native </p>
</a>`;

const Interface = () =>
  `<div class="grid ${gridCtn}">
    ${Alpha}
    ${Beta}
    ${Chi}
    </div>`;

export { Interface };
