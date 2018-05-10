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

function attributeFilter(driver, {key: value}) {
  if (driver.hasOwnProperty('key') && driver['key'] === value) {
    return driver;
  }
}

function exactMatch(drivers, {key: value}) {
  return drivers.filter(attributeFilter;
}
