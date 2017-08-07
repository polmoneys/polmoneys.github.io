

import { css } from 'glamor'

let headerCtn = css({
  width:'100%',
  display: 'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  backgroundColor:'#253951',
  padding:'1rem 2rem',
  '@media(min-width: 300px)': {
    ':hover': {
       opacity:'.98'
    }
  }
})

let headerP = css({
  color:'#fff',
  cursor:'pointer'
})


const Header = `<header class=${headerCtn} >
                  <p class="modal-trigger ${headerP}" data-message="Be honest to your craft" data-theme="col-center align-items-center"> MVJ </p>
                  <p class="modal-trigger ${headerP}" data-message="Be honest to yourself" data-theme="col-center align-items-center">@polmoneys</p>
                </header>`;


export {Header};