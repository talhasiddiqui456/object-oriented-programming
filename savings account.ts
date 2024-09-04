// class SavingsAccount extends Account {
//     private interestRate: number;

//     constructor(accountNumber: string, accountHolder: string, initialBalance: number, interestRate: number) {
//         super(accountNumber, accountHolder, initialBalance);
//         this.interestRate = interestRate;
//     }

//     // Method to apply interest to the account balance
//     applyInterest(): void {
//         const interest = this.balance * (this.interestRate / 100);
//         this.balance += interest;
//         console.log(`Interest of $${interest} applied. New balance is $${this.balance}.`);
//     }
// }

// class CurrentAccount extends Account {
//     private overdraftLimit: number;

//     constructor(accountNumber: string, accountHolder: string, initialBalance: number, overdraftLimit: number) {
//         super(accountNumber, accountHolder, initialBalance);
//         this.overdraftLimit = overdraftLimit;
//     }

//     // Override withdraw method to account for overdraft
//     withdraw(amount: number): void {
//         if (amount > 0 && (this.balance + this.overdraftLimit) >= amount) {
//             this.balance -= amount;
//             console.log(`Withdrew $${amount}. New balance is $${this.balance}.`);
//         } else {
//             console.log("Insufficient balance and overdraft limit exceeded.");
//         }
//     }
// }
