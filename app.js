
// burger menu
let burger = document.getElementById('burger');
let topNav = document.getElementById('topNav');

burger.addEventListener('click', () => {
	topNav.classList.toggle('show-menu');
})

// slider statistic



let slides = document.querySelectorAll('.slide');

let prevSlide = document.querySelector('.prev_slide');
prevSlide.addEventListener('click', () => sliderIndex = indexMinus(slides, sliderIndex));

let nextSlide = document.querySelector('.next_slide');
nextSlide.addEventListener('click', () => sliderIndex = indexPlus(slides, sliderIndex));

let sliderIndex = 0;

function indexPlus (arr, index) {
	index++; 
	if (index >= arr.length) {
		index = 0;
	}
	showSlide(arr, index);
	return index;
}

function indexMinus (arr, index) {
	index--;
	if (index < 0) {
		index = arr.length-1;
	} 
	showSlide(arr, index);
	return index;
}

function showSlide (arr, index ) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].style.display = 'none';
	}
	
	arr[index].style.display = 'block';

}


// slider sercives

let items = document.querySelectorAll('#item');
let itemIndex = 0;

let prevItem = document.querySelector('.prev_item');
prevItem.addEventListener('click', () => itemIndex = indexMinus(items, itemIndex));

let nextItem = document.querySelector('.next_item');
nextItem.addEventListener('click', () => itemIndex = indexPlus(items, itemIndex));



// slider clients


let clientsLogoImgs = document.querySelectorAll('.clients_logo_img');
let logoIndex = 0;

let prevLogo = document.querySelector('.prev_logo');
prevLogo.addEventListener('click', () => logoIndex = indexMinus(clientsLogoImgs, logoIndex));

let nextLogo = document.querySelector('.next_logo');
nextLogo.addEventListener('click', () => logoIndex = indexPlus(clientsLogoImgs, logoIndex));



