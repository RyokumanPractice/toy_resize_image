import Container from "./Container";

function ImageWithoutCanvas(props) {
  const imageURL = props.imageURL;
  const width = props.width;
  const height = props.height;

  return (
    <Container width={width + "px"} height={height + "px"} margin="10px" border="2px solid silver">
      <img width={width + "px"} heigth={height + "px"} src={imageURL} alt="" />
    </Container>
  );
}

export default ImageWithoutCanvas;
