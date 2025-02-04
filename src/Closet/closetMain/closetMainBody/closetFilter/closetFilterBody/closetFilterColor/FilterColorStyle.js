import React from 'react'
import styled, { css } from 'styled-components'

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;

`
const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.black || props.green || props.blue || props.purple || props.brown || props.gray ? 'white' : 'black'};;
  stroke-width: 3px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 5px;
  border-radius: 3px;
  transition: all 150ms;
  background-color: ${props => props.background || 'white'};
  box-shadow: 0 0 0 1px black;


  ${(props) =>
    props.black &&
    css`
      background-color: black;
    `
  }

  ${(props) =>
    props.red &&
    css`
      background-color: #f2596b;
    `
  }

  ${(props) =>
    props.orange &&
    css`
      background-color: #fdae61;
    `
  }

${(props) =>
    props.yellow &&
    css`
      background-color: #fff783;
    `
  }

${(props) =>
    props.green &&
    css`
      background-color: #74c493;
    `
  }

${(props) =>
    props.blue &&
    css`
      background-color: #85c2ff;
    `
  }

${(props) =>
    props.purple &&
    css`
      background-color: #9a6cf8;
    `
  }

${(props) =>
    props.pink &&
    css`
      background-color: #f2e0f5;
    `
  }

${(props) =>
    props.beige &&
    css`
      background-color: beige;
    `
  }

${(props) =>
    props.brown &&
    css`
      background-color: #DE844F;
    `
  }

${(props) =>
    props.gray &&
    css`
      background-color: gray;
    `
  }

  ${HiddenCheckbox}: focus + & {
  box- shadow: 0 0 0 2px red;
  }

  ${Icon} {
  visibility: ${props => (props.checked ? 'visible' : 'hidden')}
}
`;

const CSSColorCheck = ({ className, checked, text, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox {...props} />
    <StyledCheckbox checked={checked} {...props}>
      <Icon viewBox="0 0 24 24" {...props}>
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default CSSColorCheck;

