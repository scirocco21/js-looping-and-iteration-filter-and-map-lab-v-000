// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.map(function(driver) {
    return parseInt(driver.revenue) > parseInt(revenue);
  })
}
