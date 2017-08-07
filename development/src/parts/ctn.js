import { css } from 'glamor'

let rb = css({
  width:'100%',
  display: 'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
})

let cc = css({
  width:'100%',
  display: 'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
})

const RowBetween = (children) => 
    `<div class=${rb} >
       ${children}
    </div>`;

const ColCenter = (children) => 
    `<div class=${cc} >
       ${children}
    </div>`;

export {RowBetween,ColCenter};