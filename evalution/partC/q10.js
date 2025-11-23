function counter()
{
  let count = 0;
  return function(){
    count +=1;
    return count;
  }
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3
