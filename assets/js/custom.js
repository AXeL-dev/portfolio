document.addEventListener('DOMContentLoaded', function () {
	// Initialize tooltips
	var elems = document.querySelectorAll('.tooltipped');
	var instances = M.Tooltip.init(elems);
	// Wait for background images to load before removing the preloader
	var images = document.querySelectorAll('.image-bg');
	imagesLoaded(images, { background: true }, function () {
		//console.log('all images are loaded');
		var preloader = document.querySelector('.preloader');
		preloader.style.display = 'none';
	});
});