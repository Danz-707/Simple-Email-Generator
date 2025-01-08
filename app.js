const btn = document.querySelector("#get");
const container = document.querySelector(".email");
function load() {
	var xhttp = new XMLHttpRequest();
	xhttp.open(
		"GET",
		"https://jsonplaceholder.typicode.com/comments",
		true
	);
	xhttp.onload = function () {
		if (this.status == 200) {
			var users = JSON.parse(this.responseText);
			const random = Math.floor(Math.random() * 100);
			output = "";
			output +=
				"<p>" + users[random].email + "</p>";
			container.innerHTML = output;
		}
	};
	xhttp.send();
	container.style.display = "flex";
}
btn.addEventListener("click", load);
document
	.querySelector("#close")
	.addEventListener("click", () => {
		container.style.display = "none";
	});
