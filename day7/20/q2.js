function createBankAccount() {
  let balance = 0;
  let history = [];

  return {
    deposit(amount) {
      balance += amount;
      history.push({ type: "deposit", amount });
      console.log("Deposited:", amount);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        history.push({ type: "withdraw", amount });
        console.log("Withdrawn:", amount);
      }
    },
    checkBalance() {
      console.log("Current Balance:", balance);
    },
    getHistory() {
      console.log(history);
    }
  };
}

// Example usage:
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.checkBalance();
account.getHistory();
console.log(account.balance); // undefined
