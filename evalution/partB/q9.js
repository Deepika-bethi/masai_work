function displayCar()
{
  console.log("Displaying Car");
}
function displayTruck()
{
  console.log("Displaying Truck");
}
function displayBike()
{
  console.log("Displaying Bike");
}
function vehicleInfo(vehicleCategory, callbackFn)
{
  
  console.log(`Vehicle Category :${vehicleCategory}`);
  callbackFn();
  
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)

