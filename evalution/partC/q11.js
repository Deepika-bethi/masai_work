function createWallet()
{
  let balance = 0;
  return {
    addMoney: function(amount){
      balance += amount;
    },
    checkBalance:function()
    {
      console.log(balance);
    }
  }
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700
