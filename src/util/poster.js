const poster = (fileName) => {
  return `https://image.tmdb.org/t/p/w500/${fileName}`;
};

const credit = (fileName) => {
  return `https://image.tmdb.org/t/p/w200/${fileName}`;
};


const backDrop = (filename) => {
  return `https://image.tmdb.org/t/p/original/${filename}`;
};

export { poster, credit, backDrop };
