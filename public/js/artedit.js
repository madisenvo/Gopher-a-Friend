const art_id = document.querySelector('input[name="art-post-id"]').value;

const editArtFormHandler = async (event) => {
	event.preventDefault();

	const art_title = document.querySelector('input[name="art-post-title"]').value;
	const art_body = document.querySelector('textarea[name="art-post-body"]').value;

	if (art_body && art_title) {
		const response = await fetch(`/api/artpost/${art_id}`, {
		method: 'PUT',
		art_body: JSON.stringify({
		art_title,
		body
		//not sure if body above should be art_body
	}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		document.location.replace('/art');
	} else {
		alert('Failed to delete project');
	}
	}
};


const delArtButtonHandler = async (event) => {
	if (event.target.hasAttribute('art-data-id')) {
	const art_id = event.target.getAttribute('art-data-id');

	const response = await fetch(`/api/artpost/${art_id}`, {
		method: 'DELETE',
	});

	if (response.ok) {
		document.location.replace('/art');
	} else {
		alert('Failed to delete project');
	}
	}
};

document
	.querySelector('#edit-art-form')
	.addEventListener('submit', editArtFormHandler);

document
	.querySelector('#art-delete-btn')
	.addEventListener('click', delArtButtonHandler);