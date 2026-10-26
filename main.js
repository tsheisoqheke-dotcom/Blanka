import { getRandomimage } from "./moon.js";

getRandomimage()
  .then((image) => {
    // console.log(image);
    const figure = document.querySelector("figure");
    const img = document.querySelector("img");
    const caption = document.querySelector("figcaption");
    console.log({ figure, img, caption });

    img.src = image.download_url;
    caption.textContent = image.author;
    figure.classList.add("loaded");

    // document.getElementById("root").innerHTML = image.author;
  })
  .catch((error) => {
    console.error("Oh-oh, something went wrong:", error);
  })
  .finally(() => {
    console.info("This is the finally block we will run");
  });
