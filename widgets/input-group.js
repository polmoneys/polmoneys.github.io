import React from "react";
import { render } from "react-dom";
import styled, { css } from "styled-components";
const { Component } = React;


//   onChange(e) {
//     const value = e.target.value;
//     this.setState({ valor: value });
//   }
{/* <InputGroup
renderLabel={() => <p>Label </p>}
renderInput={() => (
  <input
    type="text"
    onChange={e => this.onChange(e)}
    placeholder="cool"
  />
)}
/> */}


class InputGroup extends Component {
  render() {
    const { renderLabel, renderInput } = this.props;
    return (
      <Group>
        <Label>{renderLabel && renderLabel()}</Label>
        <InputCtn>{renderInput && renderInput()}</InputCtn>
      </Group>
    );
  }
}

export default InputGroup;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4px;
  background-color:#fff;
`;
const Label = styled.div`
flex-grow: 1;
`;
const InputCtn = styled.div`
  flex-grow: 1;
  width:100%;
  & > input {
      width:100%!important;
  }
`;


