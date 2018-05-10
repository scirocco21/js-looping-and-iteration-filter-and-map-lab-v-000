// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.map(function(driver) {
    if (parseInt(driver.revenue) > parseInt(revenue)){
      return driver
    };
  })
}
