/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
	let names = firstAndLast.split(' ');
	let fullName = firstAndLast;

	this.getFullName = function getFullName() {
		return fullName;
	};

	this.setFullName = function setFullName(firstAndLast) {
		fullName = firstAndLast;
        names = fullName.split(' ');
	};

	this.getFirstName = function getFirstName() {
		return names[0];
	};

	this.setFirstName = function setFirstName(first) {
		names[0] = first;
        fullName = names.join(' ');
	};

	this.getLastName = function getLastName() {
		return names[1];
	};

	this.setLastName = function setLastName(last) {
		names[1] = last;
        fullName = names.join(' ');
	};
};

const bob = new Person('Bob Ross');

bob.getFullName();