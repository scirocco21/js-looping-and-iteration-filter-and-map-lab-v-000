// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.map(function(driver) {
    return driver.revenue.toInt() > revenue.toInt();
  })
}
