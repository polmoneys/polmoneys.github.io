import React from 'react';
import { render } from 'react-dom';
import styled, { css } from "styled-components";
const { Component } = React;

// <NavBar
// renderBrand={() => <p>Tvrbo </p>
// }
// renderLeftMenu={() => [
//   <a key="nav-item-1"></a>,
//   <a key="nav-item-2">About</a>,
//   <a key="nav-item-3">Careers</a>
// ]}
// renderRightMenu={() => [
//   <a key="nav-item-4">Username</a>,
//   <a key="nav-item-5">Level</a>
// ]}
// />


class NavBar extends Component {

  render() {
    const { renderBrand, renderLeftMenu, renderRightMenu } = this.props;

    return (
      <Row>

        <LeftMenu>
          <Brand>{renderBrand()}</Brand>
          <Navigation>{renderLeftMenu && renderLeftMenu()}</Navigation>
        </LeftMenu>

        <RightMenu>{renderRightMenu && renderRightMenu()}</RightMenu>
    
      </Row>
    );
  }
}

export default NavBar;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color:silver;
  padding: 1rem;
  ${props => props.edit && css`background-color: #777;`};
`;

const LeftMenu = styled.div`
flex-grow:1;
display:flex;
flex-direction:row;
justify-content: flex-start;
align-items: center;
`;

const Brand = styled.div`
flex-grow:1;
display:flex;
flex-direction:row;
justify-content: flex-start;
align-items: center;

& > a:first-of-type {
  margin-right:1rem;
}
`;
const Navigation = styled.div`
flex-grow:1;
`;

const RightMenu = styled.div`
flex-shrink:0;
position:relative;
`;
