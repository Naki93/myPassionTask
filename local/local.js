



//Within the save for later page conditional rendering will be used to get all values stored within localstorage

//If the key 'monday' is not clicked nothing will be displayed
if(localStorage.getItem('monday') === null){
	console.log("")
	
} else{
	let section = JSON.parse(localStorage.getItem('monday')) // Else if it is clicked then we will get the parsed valued of the key
	let sectionImage = document.querySelector('.monday-section') //Create a variable that will store the clicked data
	sectionImage.innerHTML = section // display the data within the html page
	

}

//If the key 'tuesday' is not clicked nothing will be displayed
if(localStorage.getItem('tuesday') === null){
	
	console.log("")
} else{
	let section = JSON.parse(localStorage.getItem('tuesday')) // Else if it is clicked then we will get the parsed valued of the key
	let sectionTuesday = document.querySelector('.tuesday-section') //Create a variable that will store the clicked data
	sectionTuesday.innerHTML = section // display the data within the html page
}

//If the key 'wednesday' is not clicked nothing will be displayed
if(localStorage.getItem('wednesday') === null){
	
	console.log("")
} else{
	let section = JSON.parse(localStorage.getItem('wednesday'))// Else if it is clicked then we will get the parsed valued of the key
	let sectionWednesday = document.querySelector('.wednesday-section')//Create a variable that will store the clicked data
	sectionWednesday.innerHTML = section // display the data within the html page
}

//If the key 'thursday' is not clicked nothing will be displayed
if(localStorage.getItem('thursday') === null){
	
	console.log("")
} else{
	let section = JSON.parse(localStorage.getItem('thursday'))// Else if it is clicked then we will get the parsed valued of the key
	let sectionThursday = document.querySelector('.thursday-section')//Create a variable that will store the clicked data
	sectionThursday.innerHTML = section // display the data within the html page
}

//If the key 'friday' is not clicked nothing will be displayed
if(localStorage.getItem('friday') === null){
	
	console.log("")
} else{
	let section = JSON.parse(localStorage.getItem('friday'))// Else if it is clicked then we will get the parsed valued of the key
	let sectionFriday = document.querySelector('.friday-section')//Create a variable that will store the clicked data
	sectionFriday.innerHTML = section // display the data within the html page
}

//If the key 'saturday' is not clicked nothing will be displayed
if(localStorage.getItem('saturday') === null){
	
	console.log("")
} else{
	let section = JSON.parse(localStorage.getItem('saturday'))// Else if it is clicked then we will get the parsed valued of the key
	let sectionSaturday = document.querySelector('.saturday-section')//Create a variable that will store the clicked data
	sectionSaturday.innerHTML = section // display the data within the html page
}

//If the key 'sunday' is not clicked nothing will be displayed
if(localStorage.getItem('sunday') === null){
	
	console.log("")

} else{
	let section = JSON.parse(localStorage.getItem('sunday'))// Else if it is clicked then we will get the parsed valued of the key
	let sectionSunday = document.querySelector('.sunday-section')//Create a variable that will store the clicked data
	sectionSunday.innerHTML = section// display the data within the html page
}

//If the key 'reasons' is not clicked nothing will be displayed
if(localStorage.getItem('reasons') === null){
	
	console.log("")
} else{
	let section = JSON.parse(localStorage.getItem('reasons'))// Else if it is clicked then we will get the parsed valued of the key
	let reasons = document.querySelector('.section-reasons')//Create a variable that will store the clicked data
	reasons.innerHTML = section// display the data within the html page
}

//If the key 'contact' is not clicked then nothing will be displayed
if(localStorage.getItem('contact') === null){

	console.log("")
} else{
	let section = JSON.parse(localStorage.getItem('contact'))// Else if it is clicked then we will get the parsed valued of the key
	let images = document.querySelector('.images')//Create a variable that will store the clicked data
	images.innerHTML = section// display the data within the html page
}
