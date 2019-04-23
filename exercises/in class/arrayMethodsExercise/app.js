const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
// console.log(fruit.indexOf("orange"))
fruit.push(1)
// console.log(vegetables.length)
vegetables.push(3)
const food = fruit.concat(vegetables)
newFood = food.splice(4, 2)
food.reverse()
newFoodOne = food.join(", ")

console.log(newFoodOne)