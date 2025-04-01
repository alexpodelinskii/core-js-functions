function getPolynom(...args) {
  if (args.length === 0) return null;

  return (x) => {
    return args.reverse().reduce((acc, el, ind) => {
      const res = acc + x ** ind * el;
      return res;
    }, 0);
  };
}

const tt = getPolynom(2, 3, 5);
console.log(tt(3));
