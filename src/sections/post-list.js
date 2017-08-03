import { css } from "glamor";

let itemCtn = css({
  width: "100%",
 
  overflow: "hidden",
    display: 'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#e8f2fc',
    "@media(min-width: 1024px)": {
    height: "100vh"
  }
});

let itemCtn1 = css({
  width: "100%",
 
  overflow: "hidden",
    display: 'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'red',
    "@media(min-width: 1024px)": {
    height: "100vh"
  }
});
let itemCtn2 = css({
  width: "100%",
 
  overflow: "hidden",
    display: 'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'green',
    "@media(min-width: 1024px)": {
    height: "100vh"
  }
});

let itemItem = css({
  padding:'1rem',
    color:'#253951'

});


let subtitle = css({
  fontSize: "1.2rem"
});

const Item = data =>
  `<div class="${itemItem}">
      <h1 class="row-between align-items-start">
         ${data.title} 
      </h1>
      <p class="${subtitle}">By ${data.author} on ${data.moment}</p>
      <p>${data.body}</p>
  </div>`;

const ItemList = items => {
  if (items.length < 1 || items == null) return `<p>No posts yet</p>`;
  else
    return `<div class="${itemCtn}">
    ${items.map(Item).join("")}
  </div>`;
};


const ItemList = (items,idx) => {
  if (items.length < 1 || items == null) return `<p>No posts yet</p>`;
  else
    items[idx === 1] && `<div class="${itemCtn1}">
    ${items.map(Item).join("")}
    </div>`;

     items[idx === 2] `<div class="${itemCtn2}">
    ${items.map(Item).join("")}
  </div>`;
};

export { ItemList };
