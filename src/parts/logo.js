import { css } from 'glamor'
import Logo from "../media/logo.png";


let sx = css({
 display:'block',
})

let px = css({
  maxHeight:'20vh',
   "@media(min-width: 1200px)": {
  maxHeight:'8vh',
  }
})

const Badge = `<a href="http://polmoneys.com" target="_blank" url="noopener" class=${sx}>
<img src="${Logo}" class=${px}></a>`;

export {Badge};