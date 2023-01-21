var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var customer = new Customer("Emy", "Butoi");
console.log(customer.firstName + " " + customer.lastName);
