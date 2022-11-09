// Code your solution in this file!

  const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

 function logDriverNames(drivers) {
   drivers.forEach(driver => console.log(driver.name)
   )
}

 function logDriversByHometown(drivers, hometown) {
    drivers.forEach( function(driver){
        if(driver.hometown === hometown) {
            console.log(driver.name)
        }
    })
 }

 function driversByRevenue(drivers){
    return drivers.slice().sort(function(driver1, driver2){
        return driver1.revenue-driver2.revenue
    })
 }

 function driversByName(drivers){
    return drivers.slice().sort(function(driver1, driver2){
        return driver1.name.localeCompare(driver2.name)
    })
 }

 function totalRevenue(drivers){
    return drivers.reduce(function(currentDriver, total){
        return currentDriver.revenue + total
    }, 0)
 }