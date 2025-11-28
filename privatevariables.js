function createBankAccount() {
  let balance = 0; // private
  const transactionHistory = []; // private transaction log

  return {
    deposit: function(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },
    checkBalance: function() {
      console.log(`Current Balance: ${balance}`);
    },
    getTransactionHistory: function() {
      console.log("Transaction History:");
      transactionHistory.forEach(t => console.log(t));
    }
  };
}

// Example usage
const account1 = createBankAccount();
account1.deposit(500);        // Deposited: 500
account1.withdraw(200);       // Withdrawn: 200
account1.withdraw(400);       // Insufficient balance
account1.checkBalance();      // Current Balance: 300
console.log(account1.balance); // undefined (private)
account1.getTransactionHistory(); 
// Transaction History:
// Deposited: 500
// Withdrawn: 200
