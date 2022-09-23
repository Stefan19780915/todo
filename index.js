const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', (e)=>{
	
	e.preventDefault();
	
	const data = {...Form.grabData(e.target), 
					checkbox: 'unchecked', 
					button: 'Delete'};  
	
	Store.addItem('tasks', data);
	
	UI.clearElement('#task-output');
	
	Store.getAllItems('tasks').forEach(item => UI.displayObject(item, '#task-output'));
	
	UI.clearFields(e.target);
});

UI.clearElement('#task-output');

Store.getAllItems('tasks').forEach(item => UI.displayObject(item, '#task-output'));