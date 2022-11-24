const tech_id = document.querySelector('input[name="tech-post-id"]').value;

const editTechFormHandler = async (event) => {
	event.preventDefault();

	const tech_title = document.querySelector('input[name="tech-post-title"]').value;
	const tech_body = document.querySelector('textarea[name="tech-post-body"]').value;

	if (tech_body && tech_title) {
		const response = await fetch(`/api/techpost/${tech_id}`, {
		method: 'PUT',
		tech_body: JSON.stringify({
		tech_title,
		body
		//not sure if body above should be tech_body
	}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		document.location.replace('/technology');
	} else {
		alert('Failed to delete project');
	}
	}
};


const delTechButtonHandler = async (event) => {
	if (event.target.hasAttribute('tech-data-id')) {
	const tech_id = event.target.getAttribute('tech-data-id');

	const response = await fetch(`/api/techpost/${tech_id}`, {
		method: 'DELETE',
	});

	if (response.ok) {
		document.location.replace('/technology');
	} else {
		alert('Failed to delete project');
	}
	}
};

document
	.querySelector('#edit-tech-form')
	.addEventListener('submit', editTechFormHandler);

document
	.querySelector('#tech-delete-btn')
	.addEventListener('click', delTechButtonHandler);