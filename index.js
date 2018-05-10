// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return parseInt(driver.revenue) > parseInt(revenue)
  });
}
// longer solution with 'map' array method:

// function driversWithRevenueOver(drivers, revenue) {
//   const selectedDrivers = [];
//   drivers.map(function(driver){
//     if (parseInt(driver.revenue) > parseInt(revenue)){
//       selectedDrivers.push(driver);
//     }
//   });
//   return selectedDrivers;
// }

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > parseInt(revenue)}).map(function(driver) {return driver.name});
}

function exactMatch(drivers, {object}) {
  let matches = [];
  return drivers.filter(function(driver) {
    for (key in driver) {
      if (driver[key] === object[key]) {
        matches.push(driver);
      }
    } 
  })
}

let match = [];
+    drivers.filter(driver => {
+		for (let key in obj ) {
+			if (obj[key] === driver[key]) {
+				match.push(driver);
+			}
