// class Account {
//     private accountNumber: string;
//     private accountHolder: string;
//     protected balance: number;

//     constructor(accountNumber: string, accountHolder: string, initialBalance: number = 0) {
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.balance = initialBalance;
//     }

//     // Method to deposit money
//     deposit(amount: number): void {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`Deposited $${amount}. New balance is $${this.balance}.`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }

//     // Method to withdraw money
//     withdraw(amount: number): void {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             console.log(`Withdrew $${amount}. New balance is $${this.balance}.`);
//         } else {
//             console.log("Insufficient balance or invalid amount.");
//         }
//     }

//     // Method to check balance
//     checkBalance(): void {
//         console.log(`Account Balance: $${this.balance}`);
//     }

//     // Method to get account details
//     getAccountDetails(): void {
//         console.log(`Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: $${this.balance}`);
//     }
// }
