
//Create a variable that will target the two classes (like-button and heart-icon)
const heartIcon = document.querySelector(".like-button .heart-icon")
//Create a variable that will target the two classes(like-button and amount)
const amountOfLikes = document.querySelector(".like-button .amount")

//Create a variable that will store the amount of likes within the page
let amount = 0
//Add an event listener to the heartIcon variable, and when these are clicked the amount variable will be incremented by one
heartIcon.addEventListener('click', function(){
heartIcon.classList.toggle("liked")
if(heartIcon.classList.contains("liked")){
	
amount++
}else{//If it is clicked again the amount variable will decrement by one which will indicate that the user unliked the content
	amount--
}

amountOfLikes.innerHTML = amount
})

/*
//Create an onclick function that will direct user to a page that includes all the available plans once the button is clicked 
function beginJourney(){
	window.open('../main/plans.html', '_blank')
}
*/

//Create a variable that will target a button with an Id of bu
let button = document.getElementById("bu")

//Add an eventlistener to this button 
button.addEventListener('click', function(event){
let commentBox = document.getElementById("comment-box").value;// Create a variable that will target the Id comment-box within the html dom
let commentList = document.createElement("li")//Create a variable that will store all the data input from the comment-box in a list
let commentText = document.createTextNode(commentBox);
    commentList.appendChild(commentText);
    console.log(commentList)
  console.log( document.getElementById("list").appendChild(commentList))

  localStorage.setItem('comments', commentList)//Store the comment list within localstorage
  
  
    
})



//Target the form tag within the DOM
let form = document.querySelector('form')
console.log(form)

//Add an eventlistener to the targeted form tag
form.addEventListener('submit', function(e){
  e.preventDefault()
  const formData = new FormData(form)// create a new FormData object to capture the HTML form and to submit it to localstorage .

  for(item of formData){
    console.log(item[0] , item[1])// Loop through each form label
    localStorage.setItem(`${item[0]}`, `${item[1]}`)//Store each value of the form in localstorage
  }
})

//Create a variable that will count and store the amount of times a button has been clicked
let count =  JSON.parse(localStorage.getItem('count')) //0



//Create a variable that will target the class named monday-section within the HTML DOM
let monday = document.querySelector('.monday-section')
console.log(monday)


//Create a variable that will target the class named tuesday-section within the HTML DOM
let tuesday = document.querySelector('.tuesday-section')
console.log(tuesday)
//Create a variable that will target the class named wednesday-section within the HTML DOM
let wednesday = document.querySelector('.wednesday-section')
console.log(wednesday)
//Create a variable that will target the class named thursday-section within the HTML DOM
let thursday = document.querySelector('.thursday-section')
console.log(thursday)
//Create a variable that will target the class named friday-section within the HTML DOM
let friday = document.querySelector('.friday-section')
console.log(friday)
//Create a variable that will target the class named saturday-section within the HTML DOM
let saturday = document.querySelector('.saturday-section')
console.log(saturday)
//Create a variable that will target the class named sunday-section within the HTML DOM
let sunday = document.querySelector('.sunday-section')
console.log(sunday)


//Create an onclick function that will store mondays meal plan within localstorage when it is clicked
function saveSection(event){
   event.disabled = true//Disable the click button after it has been clicked once
  count++//When button is clicked, count will be incremented by 1
  localStorage.setItem('count', JSON.stringify(count))// Store the the amount of clicks within localstorage

  alert(`you have ${count} saved items`)
  localStorage.setItem('monday', JSON.stringify(monday.innerHTML))
   
  if(localStorage.getItem('count') === null){//if this stored key is not clicked, then it should return zero
  count = 0
} else{
  count = JSON.parse(localStorage.getItem('count'))//Get the count once the button has been clicked
}
}

//let count = count = JSON.parse(localStorage.getItem('count'))

//Create an onclick function that will store tuesdays meal plan within localstorage when it is clicked
function saveTuesday(event){
  event.disabled = true;//Disable the click button after it has been clicked once
  count++//When button is clicked, count will be incremented by 1
  localStorage.setItem('count', JSON.stringify(count))

  alert(`you have ${count} saved items`)
  localStorage.setItem('tuesday', JSON.stringify(tuesday.innerHTML))
   
  if(localStorage.getItem('count') === null){//if this stored key is not clicked, then it should return zero
  count = 0
} else{
  count = JSON.parse(localStorage.getItem('count'))//Get the count once the button has been clicked
}
}

//Create an onclick function that will store wednesdays meal plan within localstorage when it is clicked
function saveWednesday(event){
  event.disabled = true;//Disable the click button after it has been clicked once
  count++//When button is clicked, count will be incremented by 1
  localStorage.setItem('count', JSON.stringify(count))// Store the the amount of clicks within localstorage

  alert(`you have ${count} saved items`)
  localStorage.setItem('wednesday', JSON.stringify(wednesday.innerHTML))
   
  if(localStorage.getItem('count') === null){//if this stored key is not clicked, then it should return zero
  count = 0
} else{
  count = JSON.parse(localStorage.getItem('count'))//Get the count once the button has been clicked
}
}

//Create an onclick function that will store thursdays meal plan within localstorage when it is clicked
function saveThursday(event){
  event.disabled = true;//Disable the click button after it has been clicked once
  count++//When button is clicked, count will be incremented by 1
 localStorage.setItem('count', JSON.stringify(count))// Store the the amount of clicks within localstorage

  alert(`you have ${count} saved items`)
  localStorage.setItem('thursday', JSON.stringify(thursday.innerHTML))
   
  if(localStorage.getItem('count') === null){
  count = 0
} else{
  count = JSON.parse(localStorage.getItem('count'))//Get the count once the button has been clicked
}
}

//Create an onclick function that will store fridays meal plan within localstorage when it is clicked
function saveFriday(event){
  event.disabled = true;//Disable the click button after it has been clicked once
  count++//When button is clicked, count will be incremented by 1
  localStorage.setItem('count', JSON.stringify(count))// Store the the amount of clicks within localstorage

  alert(`you have ${count} saved items`)
  localStorage.setItem('friday', JSON.stringify(friday.innerHTML))
   
  if(localStorage.getItem('count') === null){//if this stored key is not clicked, then it should return zero
  count = 0
} else{
  count = JSON.parse(localStorage.getItem('count'))//Get the count once the button has been clicked
}
}

//Create an onclick function that will store saturdays meal plan within localstorage when it is clicked
function saveSaturday(event){
  event.disabled = true;//Disable the click button after it has been clicked once
  count++//When button is clicked, count will be incremented by 1
  localStorage.setItem('count', JSON.stringify(count))// Store the the amount of clicks within localstorage

  alert(`you have ${count} saved items`)
  localStorage.setItem('saturday', JSON.stringify(saturday.innerHTML))
   
  if(localStorage.getItem('count') === null){//if this stored key is not clicked, then it should return zero
  count = 0
} else{
  count = JSON.parse(localStorage.getItem('count'))//Get the count once the button has been clicked
}
}

//Create an onclick function that will store sundays meal plan within localstorage when it is clicked
function saveSunday(event){
  event.disabled = true;//Disable the click button after it has been clicked once
  count++//When button is clicked, count will be incremented by 1
  localStorage.setItem('count', JSON.stringify(count))// Store the the amount of clicks within localstorage

  alert(`you have ${count} saved items`)
  localStorage.setItem('sunday', JSON.stringify(sunday.innerHTML))// Store the the amount of clicks within localstorage
   
  if(localStorage.getItem('count') === null){//if this stored key is not clicked, then it should return zero
  count = 0
} else{
  count = JSON.parse(localStorage.getItem('count'))//Get the count once the button has been clicked
}
}

let likedArticle = document.querySelector('#like')
console.log(likedArticle)

let likedItem = localStorage.setItem('likedItems', JSON.stringify(likedArticle.innerHTML))










