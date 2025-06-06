//function that takes user input and uses it to calculate the amount of ingredients to use to make the order
function calculateChaiIngredients(){
    //prompt that collects user input 
    const order = prompt('Karibu! How many cups of Chai Bora would you like to make?: ');

    //assigns order the number of cups as an argument
    order = Number(numberOfCups);

    //declared the ingredient values and multiplies by the number of cups that is collected from the prompt
    let water = 200 * order;
    let milk = 50 * order;
    let teaLeaves = 2 * order;
    let sugar = 2 * order;

    //logs the order based on the input from prompt
    console.log(`To make ${order} cups of Kenyan Chai, you will need:`);
    console.log(`${water}: ${order} ml`);
    console.log(`${milk}: ${order} ml`);
    console.log(`${teaLeaves}: ${order} tablespoons`);
    console.log(`${sugar}: ${order} teaspoons`);
}