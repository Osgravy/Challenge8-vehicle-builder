// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super(); // Call the constructor of the parent class, Vehicle
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        // Check if the wheels array has 4 elements
        // If not, create 4 new Wheel objects
        // Otherwise, use the provided wheels array
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // Get the make an model of the vehicle if it exists
        const vehicleMakemodel = `${vehicle.make} ${vehicle.model}`;
        // Check if the vehicle's weight is less than or equal to the truck's towing capacity
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`Truck ${this.make} ${this.model} is towing ${vehicleMakemodel}`);
        }
        else {
            console.log(`Truck ${this.make} ${this.model} cannot tow ${vehicleMakemodel} because it is too heavy`);
        }
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        super.printDetails(); // Call the printDetails method of the parent class, Vehicle
        // Print details of the Truck class
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
        console.log(`Wheels: ${this.wheels.length}`);
    }
}
// Export the Truck class as the default export
export default Truck;
