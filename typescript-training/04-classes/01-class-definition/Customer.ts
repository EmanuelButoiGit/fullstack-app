class Customer{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let customer = new Customer("Emy", "Butoi");

console.log(customer.firstName + " " + customer.lastName);