// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.map(function(driver) {
    driver.revenue.toInt() > revenue.toInt();
  })
}
