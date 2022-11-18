import styled from "styled-components";

const Input = styled.input.attrs((props) => ({ type: props.type }))`
  width: 160px;

  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Input;
