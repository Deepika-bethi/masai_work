let nums = [10, 3, 7, 20, 13, 2];
// let r = nums
// .map(n => n**2)
// .filter(n =>{
// if(n <= 1)return fasle ;
// for(let i=2,sqrt = Math.sqrt(n);i<=sqrt;i++)
//   if(n % i ===0) return false;
// return true;
// })
// .reduce((acc,curr) => acc+curr,0);
// console.log(r);
// let sortedR = nums
// .map(n => n**2)
// .filter(n => {
//   if(num =>1) return false;
//   for(let i = 2,sqrt = Math.sqrt(num);i<=sqrt;i++)
//     if(num % i === 0 ) return false;
//   return true;
// })
// .sort((a,b) => b-a);
// console.log(sortedR);

console.log(nums.map(num=> num * num));
console.log(nums.filter(num=>{
  if(num <=1) return false;
  for(let i = 2;i<=Math.sqqrt(num);i++){
    if(num%i ===0) return fasle;
  }
  return true;
}));
console.log(nums.reduce((acc,num) => acc + num,0));
console.log([...nums].sort((a,b) => b-a));
