let input = document.getElementById('inputnumber');

// function for displaying values
function display(val){
	input.value += val;
}

// function for calculation
function calc(){
	let inputvalue = input.value;
	let result = eval(inputvalue);

	input.value = result;
}

// function for clearing displaying values
function clr(){
	input.value = "";
}

// function for deleting each number
function del(){
	input.value = input.value.substring(0, input.value.length - 1);
}