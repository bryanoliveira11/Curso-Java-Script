// Superclass
function Account(agency, acc, balance) {
    this.agency = agency;
    this.acc = acc;
    this.balance = balance;
}

Account.prototype.withdraw = function (value) {
    if (this.balance < value) {
        console.log('Invalid Value !')
        this.view_balance();
        return;
    }
    this.balance -= value;
    this.view_balance();
};

Account.prototype.deposit = function (value) {
    this.balance += value;
    this.view_balance();
};

Account.prototype.view_balance = function () {
    console.log(`Ag/c: ${this.agency} / ${this.acc} | Balance: R$ ${this.balance.toFixed(2)}`)
};

// const acc1 = new Account(11, 22, 10);
// acc1.deposit(11);
// acc1.withdraw(21);

function CheckingAccount(agency, acc, balance, limit) {
    Account.call(this, agency, acc, balance);
    this.limit = limit;
}
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

// overwriting withdraw method
CheckingAccount.prototype.withdraw = function (value) {
    if (value > (this.balance + this.limit)) {
        console.log('Invalid Value !')
        this.view_balance();
        return;
    }
    this.balance -= value;
    this.view_balance();
};

const ca = new CheckingAccount(11, 22, 0, 100);
ca.deposit(10);
ca.withdraw(110);
ca.withdraw(1);