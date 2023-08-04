let arr = [10, 20, 30, 40, 50];

arr.forEach((item, index) => {
  if (item == 30) {
    arr.splice(index, 1);
  }
});

console.log(arr);
