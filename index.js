// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const selectedDrivers = [];
  drivers.map(function(driver){
    if (parseInt(driver.revenue) > parseInt(revenue)){
      selectedDrivers.push(driver);
    }
  });
  return selectedDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const selectedDrivers = [];
  drivers.map(function(driver){
    if (parseInt(driver.revenue) > parseInt(revenue)){
      selectedDrivers.push(driver.name);
    }
  });
  return selectedDrivers;
}
