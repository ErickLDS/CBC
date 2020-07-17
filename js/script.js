var imgAdd = document.getElementById("img");
var img = document.getElementById("imgAdd");
var btnAddImg = document.getElementById("fileIcon");

imgAdd.addEventListener("change", function () {
	const leitor = new FileReader(); 
	const arquivo = imgAdd.files[0];

	if (arquivo) {
		leitor.addEventListener("load", function () {
			img.setAttribute("src", leitor.result);
			btnAddImg.style.display = "none";
			img.style.display = "flex";
		});
		leitor.readAsDataURL(arquivo);
	}
	
});

