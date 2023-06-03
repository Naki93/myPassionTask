
//Create a variable that will target the two classes (like-button and heart-icon)
const heartIcon = document.querySelector(".like-button .heart-icon")

//Create a variable that will target the two classes(like-button and amount)
const amountOfLikes = document.querySelector(".like-button .amount")

//Create a variable that will store the amount of likes within the page
let amount = 0
//localStorage.setItem('text', amount)

//Add an event listener to the heartIcon variable, and when these are clicked the amount variable will be incremented by one
heartIcon.addEventListener('click', function(){

heartIcon.classList.toggle("liked")
if(heartIcon.classList.contains("liked")){ 
//let heart = localStorage.setItem('Amount', amount)	
 amount++
 
}else{//If it is clicked again the amount variable will decrement by one which will indicate that the user unliked the content
	//sessionStorage.setItem('Amount', amount--)
	 amount--
}
//localStorage.getItem('Amount')
amountOfLikes.innerHTML = amount

})

//Create an onclick function that will direct user to a page that includes all the available plans once the button is clicked 
function beginJourney(){
	window.open('../main/meals.html', '_blank')//The window.open() method opens a new browser window
}


//Create a variable that will count and store the amount of times a button has been clicked
let count = 0//JSON.parse(localStorage.getItem('count'))

//Create a variable that will target the id named reasons within the HTML DOM
let saveReasons = document.querySelector('#reasons')
console.log(saveReasons)

//Create an onclick function that will store the reasons why I am vegetarian within localstorage when it is clicked
function saveAllReasons(event){
event.disabled = true; //Disable the click button after it has been clicked once
  count++ //When button is clicked, count will be incremented by 1
    
  localStorage.setItem('count', JSON.stringify(count))// Store the the amount of clicks within localstorage

alert(`you have ${count} saved items`)// Display an alert to let the user know how many items they have saved within the save for later page
localStorage.setItem('reasons', JSON.stringify(saveReasons.innerHTML))//Change the targeted reasons into text
if(localStorage.getItem('count') === null){
  count = 0
} else{
  count = JSON.parse(localStorage.getItem('count'))//Get the count once the button has been clicked
}

}


let likedArticle = document.querySelector('#like')
console.log(likedArticle)

let likedItem = localStorage.setItem('likedItems', JSON.stringify(likedArticle.innerHTML))



