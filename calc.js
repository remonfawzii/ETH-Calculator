// declaring variables
var ainResult = document.getElementById('result'), // the element inwhich result will appear
	bugElement = document.getElementById('bug'), // element to show bugs in (if any bugs found)
	result = 0;


// the function that adds commas to the number
function commafy(num) {
	"use strict";
	
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}

// the calculation function
function ethCalc(x) {
	"use strict";
	
	// check if the entered value is string or a negative value and tell the user to enter +ve number
	if (isNaN(x) || x < 0) {
		bugElement.innerHTML = 'Please Enter A Positive Number';
		ainResult.innerHTML = '';
	} else {
		bugElement.innerHTML = '';
		// if the entered value is between 0 -> 1 result = value * 10000
		if (x <= 1) {
			result = x * 10000;
			result = Math.round(result * 100000000) / 100000000;
			result = commafy(result);
			result = result.replace(/\s/g, '');
			ainResult.innerHTML = result + '<span class="ain-word">AIN</span>';
			
		} else if (x > 1 && x <= 5) {
			// if the entered value is between 0 -> 1 result = value * 15000
			result = x * 15000;
			result = Math.round(result * 100000000) / 100000000;
			result = commafy(result);
			result = result.replace(/\s/g, '');
			ainResult.innerHTML = result + '<span class="ain-word">AIN</span>';
		} else if (x > 5 && x <= 10) {
			// if the entered value is between 0 -> 1 result = value * 20000
			result = x * 20000;
			result = Math.round(result * 100000000) / 100000000;
			result = commafy(result);
			result = result.replace(/\s/g, '');
			ainResult.innerHTML = result + '<span class="ain-word">AIN</span>';
		} else {
			// if the entered value is between 0 -> 1 result = value * 30000
			result = x * 30000;
			result = Math.round(result * 100000000) / 100000000;
			result = commafy(result);
			result = result.replace(/\s/g, '');
			ainResult.innerHTML = result + '<span class="ain-word">AIN</span>';
		}
	}
}

