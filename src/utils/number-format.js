const getNumberInFormat = (num) => {
  if (num < 1000) {
    return num;
  } else if (num < 1000000) {
    return `${num / 1000}K`;
  } else if (num < 1000000000) {
    return `${num / 1000000}M`;
  }
  return `${num / 1000000000}B`;
};

export { getNumberInFormat };
