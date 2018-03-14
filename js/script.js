var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungGalaxy6S = new Phone("Samsung", 2122, "black");
var OnePlusOne = new Phone("Apple", 1234, "Pink");

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

iPhone6S.printInfo();
SamsungGalaxy6S.printInfo();
OnePlusOne.printInfo();