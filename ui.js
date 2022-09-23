class UI {

	static displayObject(obj, el){
	const element = document.querySelector(el);
	const div = document.createElement('div');
		div.style.display = 'flex';
		div.style.gap = '1em';
		div.setAttribute('data-id', obj.id);
		div.classList.add('task-row');
		div.addEventListener('click', this.onObjClick);
	div.innerHTML = Object.entries(obj).map((value) => {
  		
			 return (
				value[0] == 'checkbox' ?
				`<input type="checkbox" ${value[1]} class="checkbox"></input>` 
				: value[0] == 'button' ? `<button class="delete">${value[1]}</button>`
				: value[0] == 'id' ? ``
				:`<p class="task">${value[1]}</p>` 
				)
			
				}).join('');
  	
	element.appendChild(div);
	}
	
	static onObjClick(e){
		
		e.target.classList.contains('delete') ? Store.removeItem('tasks', e.currentTarget.dataset.id) : false;
		
		if(e.target.classList.contains('checkbox')) {
			let obj = Store.getOneItem('tasks', e.currentTarget.dataset.id);
			obj[0].checkbox == 'checked' ? obj[0].checkbox = 'unchecked' : obj[0].checkbox = 'checked';
			Store.updateItem('tasks', obj[0], e.currentTarget.dataset.id);
		} 
		
		UI.clearElement('#task-output');
	
		Store.getAllItems('tasks').forEach(item => UI.displayObject(item, '#task-output'));
	}

	static clearFields(el){
		el.childNodes.forEach((node)=>{node.value = '';});
	}
	
	static clearElement(el){
		const element = document.querySelector(el);
			while (element.firstChild) {
    		element.removeChild(element.lastChild);
  			}	
	}
	
	
}