
import React,{Component,Children} from 'react';
import styled, { css } from "styled-components";


{/* <Sections>
<Section style={{ backgroundColor: "pink" }}>
  <Paragraph> HEY HO</Paragraph>
</Section>

<Section style={{ backgroundColor: "red" }}>
  <Paragraph> HEY HO</Paragraph>
</Section>

<Section style={{ backgroundColor: "blue" }}>
  <Paragraph> HEY HO</Paragraph>
</Section>

<Section style={{ backgroundColor: "grey" }}>
  <Paragraph> HEY HO</Paragraph>
</Section>
<Section>
  <Paragraph> HEY HO</Paragraph>
</Section>
</Sections> */}

class Sections extends Component {

state = {
    total: 0,
    current:0
};


componentDidMount(){
    const {children} = this.props;
    this.setState({
        total: Children.count(children)
      })
    
}



showNext = () => {
    const {total,current} = this.state;
    this.setState({
      current: current + 1 === total ? 0 : current + 1
    })

  }
  showSection = (num) => {
    this.setState({
      current: num
    })
  }


  renderBullets(){

    const bull = Array(this.state.total).fill("▵");
    bull[this.state.current] = "▴";
    return(
        bull.map( (bullet,idx)=> <Bullet key={idx} onClick={()=> this.showSection(idx)}>{bullet}</Bullet>)
    )
  }
  render() {
    
        const {children} = this.props;
        // const bullets = Array(this.state.total).fill("▵");
        //onClick={()=> this.showNext()}
       

        return (
        <Ctn>
                      
         <BulletsCtn >
         
         {this.renderBullets()}

         </BulletsCtn>

         {Children.toArray(children)[this.state.current]}
        
        </Ctn>
                
        )}
}



export default Sections;


const Ctn = styled.div`
width: 100%;
height:100vh;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
`;

const BulletsCtn = styled.div`
    position:absolute;
    top:40%;
    left:20%;
`;

const Bullet = styled.div`
padding:1rem;
border:1px solid pink;
`;