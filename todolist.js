/** @format */

const handleAddNewTask = () => {
	const content = document.getElementById('content').value;
	const id = Date.now();

	const li = document.createElement('li');
	const input = document.createElement('input');
	const label = document.createElement('label');
	const btn = document.createElement('button');

	btn.setAttribute('class', 'btn btn-sm btn-text text-danger');
	label.setAttribute('class', 'form-check-label');
	label.setAttribute('for', `cb${id}`);
	label.setAttribute('id', `lb${id}`);

	input.setAttribute('class', 'form-check-input me-1');
	input.setAttribute('type', 'checkbox');
	input.setAttribute('id', `cb${id}`);
	input.setAttribute('onchange', "handleCompletTask('" + `cb${id}` + "')");

	li.setAttribute('class', 'list-group-item');
	li.setAttribute('id', `li${id}`);

	btn.setAttribute('onclick', "handleRemoveTask('" + `li${id}` + "')");

	btn.innerHTML = 'del';
	label.innerHTML = content;

	li.appendChild(input);
	li.appendChild(label);
	li.appendChild(btn);

	document.getElementById('list-tasks').appendChild(li);
	document.getElementById('content').value = '';
};

const handleCompletTask = (id) => {
	const checked = document.getElementById(id).checked;
	document
		.getElementById(`${id.replace('cb', 'lb')}`)
		.setAttribute('class', checked ? 'lb-complete' : 'lb-incomplete');
};

const handleRemoveTask = (id) => {
	const li = document.getElementById(id);
	document.getElementById('list-tasks').removeChild(li);
};
