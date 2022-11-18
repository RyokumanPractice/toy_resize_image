import { useRef, useEffect } from "react";
import Container from "./Container";

function CustomImage(props) {
  const ref = useRef();
  const imageURL = props.imageURL;
  const width = props.width;
  const height = props.height;

  useEffect(() => {
    const canvas = ref.current;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = imageURL;
    image.onload = () => {
      context.drawImage(image, 0, 0, width, height);
    };
  }, [imageURL, width, height]);

  return (
    <Container width={width + "px"} height={height + "px"} margin="10px" border="2px solid silver">
      <canvas ref={ref} />
    </Container>
  );
}

export default CustomImage;
