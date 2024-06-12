// set vars
const slider = document.getElementById("slider");
const image = document.getElementsByClassName("image")[1];
const buttonRange = document.getElementsByClassName("buttonRange")[0];

// move slider at change of value
slider.addEventListener("input", (e) => {
	const sliderPos = e.target.value;

	image.style = "width:" + sliderPos + "%";
});

// move slider at change of value
slider.addEventListener("input", (e) => {
	const sliderPos = e.target.value;

	buttonRange.style = "left:" + sliderPos + "%";
});