var Scrollbar = window.Scrollbar;
const nav = document.querySelector("nav");

var options = {
	damping: 0.05,
	// "alwaysShowTracks": true
};
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

window.addEventListener("DOMContentLoaded", (e)=>{
	Scrollbar.init(document.querySelector("body"), options);
})