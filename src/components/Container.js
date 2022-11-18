import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};

  border: ${(props) => props.border};
  background-color: ${(props) => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => props.image};
`;

export default Container;
