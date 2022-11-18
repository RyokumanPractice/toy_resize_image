async function resize(image, setter) {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => setter(reader.result);
}

export { resize };
