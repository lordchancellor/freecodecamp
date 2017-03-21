/*
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km^3s^-2.

Note: The formula for caculating the orbital period is:
	2Pi * sqrt(a^3/mu)
	Where:	a = altitude + radius
			mu = GM (gravitational constant * mass)
*/

const first = [{name : "sputnik", avgAlt : 35873.5553}];
const second = [{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}];

const calculateOP = function calculateOP(altitude, radius, mu) {
	const tau = 2 * Math.PI;
	const axis = altitude + radius;

	return Math.round(tau * (Math.sqrt(Math.pow(axis, 3) / mu)));
};

const orbitalPeriod = function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let productArray = [];
  
  for (const celestial of arr) {
	productArray = [...productArray, {
		name: celestial.name,
		orbitalPeriod: calculateOP(celestial.avgAlt, earthRadius, GM)
	}];
  }
  
  return productArray;
};