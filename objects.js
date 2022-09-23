
class Form {
	static grabData(form){
	const myFormData = new FormData(form);
	const formDataObj = Object.fromEntries(myFormData.entries());
	return formDataObj;
	}
}

