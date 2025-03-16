/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velKilometersPerHour = 10000;// velocity (km/h)
const accelMetersPerSecondSquared = 3;// acceleration (m/s^2)
const timeSeconds = 3600;// seconds (1 hour)
const initDistanceKilometers = 0;// distance (km)i
const initFuelKilograms = 5000; // remaining fuel (kg)
const fuelBurnRateKilogramsPerSecond = 0.5;// fuel burn rate (kg/s)

// Utility function to convert acceleration from m/s² to km/h²
 const convertAccelToKilometersPerHourSquared = (accelMetersPerSecondSquared) => { return accelMetersPerSecondSquared * 12960 }; // 1 m/s² = 12960 km/h²

/**
  * Calculates the new velocity based on acceleration, initial velocity, and time.
  * @param {number} initVelocityKilometersPerHour
  * @param {number} accelKilometersPerHourSquared
  * @param {number} timeInSeconds
  * @returns {number}
  * @throws {Error}
  */
const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






