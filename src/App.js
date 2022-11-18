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
        {/* 용량이 줄어든다. */}
        <ImageWithCanvas width={width} height={height} imageURL={imageURL} />
        {/* 용량이 줄지 않는다. */}
        <ImageWithoutCanvas width={width} height={height} imageURL={imageURL} />
      </Container>
      <Input marginLeft="10px" type="file" onChange={onChange}></Input>
    </Container>
  );
}

export default App;
