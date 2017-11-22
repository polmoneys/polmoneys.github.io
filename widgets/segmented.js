import React from "react";
import { render } from "react-dom";
import styled, { css } from "styled-components";
const { Component } = React;

class SegmentedControl extends Component {
  render() {
    const { renderLabel, renderButtons } = this.props;
    return (
      <Row>
        <Label>{renderLabel && renderLabel()}</Label>
        <Segmented>{renderButtons && renderButtons()}</Segmented>
      </Row>
    );
  }
}

export default SegmentedControl;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid pink;
`;

const Segmented = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  flex-grow: 0;
  border: 1px solid red;

  & > p {
    min-width: 120px;
  }
  & > p:not(:last-of-type) {
    border-right: 1px solid red;
  }
`;

const Label = styled.div`
  flex-grow: 0;
`;
