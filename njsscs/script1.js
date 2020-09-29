btn = document.querySelector("#botonimagen");
img = document.querySelector("#imgDia");

async function getData() {
  response = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=539pCWhJZZkliZZVSFeww4lUedOQteSoMar2NFTW"
  );
  console.log(response);
  img.src = response.data.url;
}
// getData()
btn.onclick = getData;