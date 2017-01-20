/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument 
(price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" 
if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

function roundFix(number) {
	//Check to see if the number contains a decimal point. If not, we just return it (as it doesn't need fixing)
	if (number % 1 === 0) {
		return number;
	}

	//Round the number to a (large) fixed number of decimal places
	number = number.toFixed(12);

	//Convert the number to a String
	var numString = String(number);

	//Parse the string from right to left, removing zeros until we hit a non-zero or the decimal point
	for (var i = numString.length; i > 0; i = i - 1) {
		if (numString.charAt(i - 1) === "0") {
			numString = numString.substring(0, i - 1);
			continue;
		}
		else if (numString.charAt(i - 1) === ".") {
			numString = numString.substring(0, i - 1);
			break;
		}
		else {
			break;
		}
	}

	return Number(numString);
}


function addDenominations(cid) {
	for (var i = 0; i < cid.length; i++) {
		switch (cid[i][0]) {
			case "PENNY":
				cid[i].push(0.01);
				break;
			case "NICKEL":
				cid[i].push(0.05);
				break;
			case "DIME":
				cid[i].push(0.1);
				break;
			case "QUARTER":
				cid[i].push(0.25);
				break;
			case "ONE":
				cid[i].push(1);
				break;
			case "FIVE":
				cid[i].push(5);
				break;
			case "TEN":
				cid[i].push(10);
				break;
			case "TWENTY":
				cid[i].push(20);
				break;
			case "ONE HUNDRED":
				cid[i].push(100);
				break;
			default:
				return "Invalid currency";
		}
	}

	return cid;
}

function getSomeChange(arr, change) {
	//getSomeChange takes ["NAME", total, denomination] and change
	var denom = arr[2];
	var totalInDenom = arr[1];
	var factor = 0;
	var someChange = 0;

	//Let's find out how many times denom goes into change
	factor = Math.floor(change / denom);
	someChange = denom*factor;

	//We can't use this drawer, so send it back
	if (totalInDenom < change && denom > change)  {
		console.log("We couldn't use this drawer");
		return {
			skipped: true,
			drawer: arr,
			change: change,
			usedChange: 0
		};
	}

	//Check to see if we can use our current value of someChange
	if (someChange < totalInDenom) {
		//We can use someChange
		change -= someChange;
		arr[1] -= someChange;

		return {
			skipped: false,
			drawer: arr,
			change: roundFix(change),
			usedChange: roundFix(someChange)
		};
	}
	else {
		//We cannot use our factor, so let's reduce it by denom until we can
		do {
			someChange -= denom;
		}
		while (someChange > totalInDenom);

		change -= someChange;
		arr[1] -= someChange;

		return {
			skipped: false,
			drawer: arr,
			change: roundFix(change),
			usedChange: roundFix(someChange)
		};
	}
}

function getDrawerTotal(drawer) {
	var total = 0;

	for (var i = 0; i < drawer.length; i++) {
		total += drawer[i][1];
	}

	return total;
}

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var changeArray = [];

  //Check that the drawer has enough cash, or if it is exactly the right amount of cash, or if the customer has
  //enough money!
  if (getDrawerTotal(cid) < change || change < 0) {
	  return "Insufficient Funds";
  }
  else if (getDrawerTotal(cid) === change) {
	  return "Closed";
  }

  //Add the denomination of each type of currency to the cid array
  cid = addDenominations(cid);

  //Find the largest denomination that change is divisible by in the drawer
  for (var i = cid.length-1; i >= 0; i--) {
	  //Eliminate any coins or notes that are too big to give as change
	  if (cid[i][2] > change) {
		  continue;
	  }

	  //Let's get some change
	  var changeObj = getSomeChange(cid[i], change);
	  if (!changeObj.skipped) {
		change = changeObj.change;
		cid[i] = changeObj.drawer;

		changeArray.push([cid[i][0], changeObj.usedChange]);
	  }

	  //If, at the end of this iteration we have given out all change, we are done.
	  if (change === 0) {
		  return changeArray;
	  }
  }

  //If we've got to this stage and haven't returned the changeArray, we must have insufficient funds
  return "Insufficient Funds";
}

console.log("We're expecting to see:");
console.log('[["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]');
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);