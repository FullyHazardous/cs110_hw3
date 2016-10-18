const raw = function (spaces, stars){
  let space = "";
  let star = "";
  for (let n = 1; n <= spaces; n++){
    space += " ";
  }
  for (let n = 1; n <= stars; n++){
    star += "*";
  }
  return space + star;
}
const diamond = function (a){
  if (a % 2 === 0){
    a++;
  }
  for (let n = (a - 1) / 2, m = 1; n >= 0; n--, m += 2){
    console.log(raw (n, m));
  }
  for (let n = 1, m = a - 2; m > 0; n++, m -= 2){
    console.log(raw (n, m));
  }
}
diamond(10);