let form = document.travelForm

form.addEventListener('submit', function(e){
    e.preventDefault()
let firstName = form.firstName.value
let lastName = form.lastName.value
let age = form.age.value
let gender = form.gender.value
let flyTo = form.locations.value
let diet = form.diet.value


const place = form.locations
const travelLocations = []
for(let i = 0; i < place.length; i++){
    if(place[i].checked){
        travelLocations.push(place[i].value)
    }
}

const foodChoice = form.diet
const mealChoice = []
for(let i = 0; i < foodChoice.length; i++){
    if(foodChoice[i].checked){
        mealChoice.push(foodChoice[i].value)
    }
}

alert('First name: ' + firstName  +
    '\n Last name: ' + lastName  +
    '\nAge: ' + age  +
    '\nGender: ' + gender  +
    '\nLocations: ' + travelLocations  +
    '\nMeal choice: ' + mealChoice)
})