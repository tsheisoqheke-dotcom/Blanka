const getRandomimage = async () => {
  const randomPage = Math.floor(Math.random() * 10) + 1; // Random page between 1 and 10
  const url = `https://picsum.photos/v2/list?page=${randomPage}&limit=5`;
  const results = await fetch(url);
  const data = await results.json();
  if (data.length === 0) {
    throw new Error("No images found");
  }
  const randomIndex = Math.floor(Math.random() * data.length);
  console.log("Random index:", randomIndex);

  return data[randomIndex];
};

export { getRandomimage };
