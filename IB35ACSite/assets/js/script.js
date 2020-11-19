/* Width of each carousel image, in pixels */
let carouselWidth = 400; 


/* Part 2.1: Get the elements */
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

/* Part 2.2: Create variable to keep track of which image we're on */
let imageNum = 0;

/* Part 2.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
		// change imageNum
	imageNum = imageNum + 1;
		// how many pixels from the left should imageRow now be?
	pixelOffset = -1 * imageNum * carouselWidth;
		// change css for imageRow
	imageRow.style.left = pixelOffset + "px";

	checkControls();
}

/* Part 2.4: Change the onclick property for the next button */
nextButton.onclick = showNextImage;

/* Part 2.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
		// change imageNum
	imageNum = imageNum - 1;
		// how many pixels from the left should imageRow now be?
	pixelOffset = -1 * imageNum * carouselWidth;
		// change css for imageRow
	imageRow.style.left = pixelOffset + "px";

	checkControls();
}

/* Part 2.6: Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;


// I'm writing my own without looking at the pre-written one, for practice :)
function checkControls() {
	prevButton.classList.remove("hidden");
	nextButton.classList.remove("hidden");

if (imageNum === totalImages-1) {
	nextButton.classList.add("hidden");
} else if (imageNum === 0) {
	prevButton.classList.add("hidden");}
}































/* Part 2.7 */
/* delete this line to uncomment the function!
function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if () {
		// What should happen if it's the first image?

	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if () {
		// What should happen it's the last image?
		
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?

	}
} */

