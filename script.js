const menu = document.querySelector("#menu");
const nav = documant.querySelector(".links");

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	nav.classList.toggle('active');	


	}