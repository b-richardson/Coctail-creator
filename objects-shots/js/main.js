//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', coctailSearch)

document.querySelector('#randomButton').addEventListener('click', randomSearch)
  

function coctailSearch(){
    let choice = document.querySelector('input').value
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+choice
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0]);
        document.querySelector('.name').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        document.querySelector('.in1').innerText = data.drinks[0].strIngredient1
        document.querySelector('.in2').innerText = data.drinks[0].strIngredient2
        document.querySelector('.in3').innerText = data.drinks[0].strIngredient3
        document.querySelector('.in4').innerText = data.drinks[0].strIngredient4
        document.querySelector('.in5').innerText = data.drinks[0].strIngredient5
        document.querySelector('.in6').innerText = data.drinks[0].strIngredient6
        document.querySelector('.me1').innerText = data.drinks[0].strMeasure1
        document.querySelector('.me2').innerText = data.drinks[0].strMeasure2
        document.querySelector('.me3').innerText = data.drinks[0].strMeasure3
        document.querySelector('.me4').innerText = data.drinks[0].strMeasure4
        document.querySelector('.me5').innerText = data.drinks[0].strMeasure5
        document.querySelector('.me6').innerText = data.drinks[0].strMeasure6
})
.catch(err => {
    console.log(`error ${err}`);
});
}

function randomSearch(){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0]);
        document.querySelector('.name').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        document.querySelector('.in1').innerText = data.drinks[0].strIngredient1
        document.querySelector('.in2').innerText = data.drinks[0].strIngredient2
        document.querySelector('.in3').innerText = data.drinks[0].strIngredient3
        document.querySelector('.in4').innerText = data.drinks[0].strIngredient4
        document.querySelector('.in5').innerText = data.drinks[0].strIngredient5
        document.querySelector('.in6').innerText = data.drinks[0].strIngredient6
        document.querySelector('.me1').innerText = data.drinks[0].strMeasure1
        document.querySelector('.me2').innerText = data.drinks[0].strMeasure2
        document.querySelector('.me3').innerText = data.drinks[0].strMeasure3
        document.querySelector('.me4').innerText = data.drinks[0].strMeasure4
        document.querySelector('.me5').innerText = data.drinks[0].strMeasure5
        document.querySelector('.me6').innerText = data.drinks[0].strMeasure6
        
})
.catch(err => {
    console.log(`error ${err}`);
});
}





