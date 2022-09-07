function outer(a) {
  function inner(b) {
    return a + b;
  }
  return inner;
}

// on hold
var balance = 100;
function withdrow(amount) {
  if (amount <= balance) {
    balance = balance - amount;
    return "successfull and your new balance is " + balance;
  } else {
    return "you don't have that money you are poor :)";
  }
}

function makeAccount(init) {
  var balance = init;
  function withdrow(amount) {
    if (amount <= balance) {
      balance = balance - amount;
      return "successfull and your new balance is " + balance;
    } else {
      return "you don't have that money you are poor :)";
    }
  }
  function depose(amount) {
    balance = balance + amount;
    return "your new balance is " + balance;
  }
  return { w: withdrow, d: depose };
}

function makeAccount(init) {
  var balance = init;
  return {
    withdrow: function (amount) {
      if (amount <= balance) {
        balance = balance - amount;
        return "successfull and your new balance is " + balance;
      } else {
        return "you don't have that money you are poor :)";
      }
    },
    depose: function (amount) {
      balance = balance + amount;
      return "your new balance is " + balance;
    },
  };
}

function makeAccount(init) {
  var obj = {
    balance: init,
    withdrow: function (amount) {
      if (amount <= obj.balance) {
        obj.balance = obj.balance - amount;
        return "successfull and your new balance is " + obj.balance;
      } else {
        return "you don't have that money you are poor :)";
      }
    },
    depose: function (amount) {
      obj.balance = obj.balance + amount;
      return "your new balance is " + obj.balance;
    },
    checkbalance: function () {
      return "you balence is " + obj.balance;
    },
  };
  return obj;
}

var person = {
  age: 77,
  incrAge: function () {
    person.age = person.age + 1;
    return person.age;
  },
};

function Person() {
  return {
    age: 77,
    incrAge: function () {
      this.age = this.age + 1;
      return this.age;
    },
  };
}

function MakeAccount(init, initPassword) {
  var password = initPassword;
  return {
    balance: init,
    withdrow: function (p, amount) {
      if (password === p) {
        if (amount <= this.balance) {
          this.balance = this.balance - amount;
          return "successfull and your new balance is " + this.balance;
        } else {
          return "you don't have that money you are poor :)";
        }
      } else {
        return "wrong password";
      }
    },
    depose: function (amount) {
      this.balance = this.balance + amount;
      return "your new balance is " + this.balance;
    },
    checkbalance: function () {
      return "you balence is " + this.balance;
    },
  };
}
