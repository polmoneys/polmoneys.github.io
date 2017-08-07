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
  backgroundColor: "#f8e4ec",
  color: "#d94465",
  padding: "2rem",
  position: "relative",
  textDecoration:'none',
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
   fontWeight:'700',
    fontSize:'4vw',
  // "@media(min-width: 1024px)": {
  //   backgroundColor: "#444",
  //   color: "#fff"
  // }
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
    // backgroundColor: "rgba(0,0,0,.2)",
    backgroundColor:'#f8e4ec',
    // fontWeight:'200',
    fontSize:'1rem',
    color:"#d94465",
    textTransform:'uppercase',
  "@media(min-width: 1024px)": {
    left: "2vw",
    bottom: "2vh",
    position: "absolute",
  }
});

let quick = css({
    fontWeight:'200',
    fontSize:'1rem',
})



const doSomething = () => console.log('hi') 

      // <p class="${quick}"> Quick Start </p>
      // <p>git clone && npm i && npm Quick start </p>
      // <p class="${label}"> Javascript </p>

const Alpha = `<a href='https://github.com/polmoneys/mvj' class=" ${alphas} ${item}" target='_blank' rel="noopener">
      <p>Slow dance with Webpack, es6, css grid layout, css-in-js ...  </p>
      </a>`;

      //      <p class="${quick}"> Quick Start </p>
      // <p>git clone && npm i && make dev </p>
    //  <p class="${label}">  React </p>
      
const Beta = `<a href='https://github.com/polmoneys/TvrboReact' class=" ${betas} ${item}" target='_blank' rel="noopener">
        <p>Onboard new team members at work. </p>
</a>`;

    // <p class="${quick}">  Quick Start </p>
    //   <p>git clone && npm i && npm run ios </p>
      // <p class="${label}">  React Native </p>
    
const Chi = `<a href='https://github.com/polmoneys/rn-boiler' class=" ${chis} ${item}" target='_blank' rel="noopener">
        <p>React Native tips </p>
</a>`;

const Interface = () =>
  `<div class="grid ${gridCtn}">
    ${Alpha}
    ${Beta}
    ${Chi}
    </div>`;

export { Interface };
