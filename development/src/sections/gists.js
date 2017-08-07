import { css } from "glamor";
// alpha beta chi delta

let gridCtn = css({
  display: "grid",
  gridGap: "10px",
  width: "100%",
  gridTemplateColumns: " 1fr ",
  "@media(min-width: 1024px)": {
    height: "60vh",
    gridTemplateColumns: " 33.33% 33.33% 33.33%",
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
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  // "@media(min-width: 1024px)": {
  //   backgroundColor: "#444",
  //   color: "#fff"
  // }
});
let alphas = css({
  gridColumn: "1 / span 1 ",
 
});
let betas = css({
  gridColumn: " 1 / span 1 ",
  gridRow: " 2",
  "@media(min-width: 1024px)": {
   gridColumn: " 2 / span 1 ",
    gridRow: " 1"
  }
});

let chis = css({
  gridColumn: "1 / span 1 ",
    gridRow: "3",
  "@media(min-width: 1024px)": {
    gridRow: "1",
  gridColumn: "3 / span 1 ",
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

const Alpha = `<a href='https://gist.github.com/polmoneys/b51ffa056c110bbbe3e7b35c8389b4f8' class=" ${alphas} ${item}" target='_blank' rel="noopener">
      <p>JS Cheat Sheet </p>
      </a>`;

      //      <p class="${quick}"> Quick Start </p>
      // <p>git clone && npm i && make dev </p>
    //  <p class="${label}">  React </p>
      
const Beta = `<a href='https://gist.github.com/polmoneys/05353d9f595444b6ee8ded0f1816452e' class=" ${betas} ${item}" target='_blank' rel="noopener">
        <p>Snippets </p>
</a>`;

    // <p class="${quick}">  Quick Start </p>
    //   <p>git clone && npm i && npm run ios </p>
      // <p class="${label}">  React Native </p>
    
const Chi = `<a href='https://gist.github.com/polmoneys/ceb1d075b1d5e1df3f2666748f00bcdf' class=" ${chis} ${item}" target='_blank' rel="noopener">
        <p>Quick icons </p>
</a>`;

const Gists = () =>
  `<div class="grid ${gridCtn}">
    ${Alpha}
    ${Beta}
    ${Chi}
    </div>`;

export { Gists };





