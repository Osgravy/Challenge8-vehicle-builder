// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        // Call the constructor of the parent class, Vehicle
        super();
        // Initialize properties of the Motorbike class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
        if (wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()]; // Create 2 new default Wheel objects
        }
        else {
            this.wheels = wheels; // Use the provided wheels array
        }
    }
    // Implement the wheelie method
    wheelie() {
        // Log the message "Motorbike [make] [model] is doing a wheelie!"
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        // Call the printDetails method of the parent class
        super.printDetails();
        // Print details of the Motorbike class
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Wheels: ${this.wheels.length} wheels`); // Log the number of wheels   
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
