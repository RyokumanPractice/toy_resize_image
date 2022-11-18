import { useState } from "react";
import { Input, Container, ImageWithCanvas, ImageWithoutCanvas } from "./components";
import { resize } from "./utils/fileReader";

function App() {
  const [imageURL, setImageURL] = useState();
  const onChange = (e) => resize(e.target.files[0], setImageURL);
  const width = 600;
  const height = 400;

  return (
    <Container>
      <Container direction="row">
        <Container margin="10px">
          {/* image size has reduced */}
          <h1>ImageWithCanvas</h1>
          <ImageWithCanvas width={width} height={height} imageURL={imageURL} />
        </Container>
        <Container margin="10px">
          <h1>ImageWithoutCanvas</h1>
          {/* image size is same as original */}
          <ImageWithoutCanvas width={width} height={height} imageURL={imageURL} />
        </Container>
      </Container>
      <Input marginLeft="10px" type="file" onChange={onChange}></Input>
    </Container>
  );
}

export default App;
