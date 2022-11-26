const tech_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

const editTechFormHandler = async (event) => {
	event.preventDefault();
	const tech_title = document.querySelector('input[name="tech-post-title"]').value;
	const tech_text = document.querySelector('textarea[name="tech-post-body"]').value;

	if (tech_text && tech_title) {
		const response = await fetch(`/api/techpost/${tech_id}`, {
		method: 'PUT',
		body: JSON.stringify({
		tech_title,
		tech_text
	}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		document.location.replace('/technology');
	} else {
		alert('Failed to update post!');
	}
	}
};


const delTechButtonHandler = async (event) => {
	event.preventDefault();
	const tech_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

	const response = await fetch(`/api/techpost/${tech_id}`, {
		method: 'DELETE',
	});

	if (response.ok) {
		document.location.replace('/technology');
	} else {
		alert('Failed to delete post!');
	}
};

document
	.querySelector('#edit-tech-form')
	.addEventListener('submit', editTechFormHandler);

document
	.querySelector('#tech-delete-btn')
	.addEventListener('click', delTechButtonHandler);