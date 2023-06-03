//Target the two main images within the contact page
let contact = document.querySelector('.foodie')
console.log(contact)

//Create a variable that will count and store the amount of times a button has been clicked
let count = JSON.parse(localStorage.getItem('count'))


//Create a function that will store the images in localstorage when they are clicked
function saveImages(event){
	 event.disabled = true;//Disable the click button after it has been clicked once
  count++//When button is clicked, it will be incremented by 1
  //localStorage.setItem('count', JSON.stringify(count))// Store the the amount of clicks within localstorage

  alert(`you have ${count} saved items`)// Display an alert to let the user know how many items they have saved within the save for later page
  localStorage.setItem('contact', JSON.stringify(contact.innerHTML))//Change the targeted images into text
   
  if(localStorage.getItem('count') === null){
  count = 0
} else{
  count = JSON.parse(localStorage.getItem('count'))//Get the count once the button has been clicked
}


}

//Target the form tag within the DOM
let form = document.querySelector('form')
console.log(form)

//Add an eventlistener to the targeted form tag
form.addEventListener('submit', function(e){
	e.preventDefault()
	const formData = new FormData(form)// create a new FormData object to capture the HTML form and to submit it to localstorage 

	for(item of formData){// Loop through each form label
		console.log(item[0] , item[1])
		localStorage.setItem(`${item[0]}`, `${item[1]}`)//Store each value of the form in localstorage
		
	}
})


