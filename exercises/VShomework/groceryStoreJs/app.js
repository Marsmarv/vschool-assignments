let shopper = {
    name: "Jacob",
    age: 23,
    canCook: false,
    groceryCart: ["ramen noodles", "Pb&J", "Ham and Cheese", "eggo Waffles", "chicken nuggets", "Bagel with cream cheese", "cereal", "frozen burger"],
    willEatTonight: function(){
        return "Tonight " + this.name + " will eat " + this.groceryCart[Math.floor(Math.random() * this.groceryCart.length)];
    },
}

console.log(shopper.willEatTonight())