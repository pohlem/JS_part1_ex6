function show(){
	var first = parseInt(document.getElementById("firstNumber").value);
	var second = parseFloat(document.getElementById("secondNumber").value);
	var result = first%second;
	alert("Résultat : "+result);
}