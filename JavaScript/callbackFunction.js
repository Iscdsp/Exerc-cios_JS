function random(min = 1000, max = 4000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(() => console.log("f1"), random());
  if (callback) callback();
}

function f2(callback) {
  setTimeout(() => console.log("f2"), random());
  if (callback) callback();
}

function f3(callback) {
  setTimeout(() => console.log("f3"), random());
  if (callback) callback();
}

f1(() => {
  f2(() => {
    f3(() => console.log("olá mundo"));
  });
});
