function innerSpin (spin, inner) {
	const spinners = document.getElementsByClassName(spin);
	for (var i = 0; i < spinners.length; i++) {
		spinners[i].innerHTML = inner;
	}
}

innerSpin("spinner-2", '<div class="double-bounce1"></div><div class="double-bounce2"></div>')
innerSpin("spinner-3", '<div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div>');
innerSpin("spinner-4", '<div class="cube1"></div> <div class="cube2"></div>');
innerSpin("spinner-6", '<div class="dot1"></div> <div class="dot2"></div>');
innerSpin("spinner-7", '<div class="bounce1"></div> <div class="bounce2"></div> <div class="bounce3"></div>');
innerSpin("spinner-8", '<div class="spinner-81 sk-child"></div> <div class="spinner-82 sk-child"></div> <div class="spinner-83 sk-child"></div> <div class="spinner-84 sk-child"></div> <div class="spinner-85 sk-child"></div> <div class="spinner-86 sk-child"></div> <div class="spinner-87 sk-child"></div> <div class="spinner-88 sk-child"></div> <div class="spinner-89 sk-child"></div> <div class="spinner-810 sk-child"></div> <div class="spinner-811 sk-child"></div> <div class="spinner-812 sk-child"></div>');
innerSpin("spinner-9", '<div class="sk-cube sk-cube1"></div> <div class="sk-cube sk-cube2"></div> <div class="sk-cube sk-cube3"></div> <div class="sk-cube sk-cube4"></div> <div class="sk-cube sk-cube5"></div> <div class="sk-cube sk-cube6"></div> <div class="sk-cube sk-cube7"></div> <div class="sk-cube sk-cube8"></div> <div class="sk-cube sk-cube9"></div>');
innerSpin("spinner-10", '<div class="sk-circle1 sk-circle"></div> <div class="sk-circle2 sk-circle"></div> <div class="sk-circle3 sk-circle"></div> <div class="sk-circle4 sk-circle"></div> <div class="sk-circle5 sk-circle"></div> <div class="sk-circle6 sk-circle"></div> <div class="sk-circle7 sk-circle"></div> <div class="sk-circle8 sk-circle"></div> <div class="sk-circle9 sk-circle"></div> <div class="sk-circle10 sk-circle"></div> <div class="sk-circle11 sk-circle"></div> <div class="sk-circle12 sk-circle"></div>');
innerSpin("spinner-12", '<div class="dots-container"><div class="bigger-dot"><div class="smaller-dot"></div></div></div>');