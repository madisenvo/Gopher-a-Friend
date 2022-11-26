const art_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

const editArtFormHandler = async (event) => {
	event.preventDefault();

	const art_text = document.querySelector('textarea[name="art-post-body"]').value;

	if (art_text) {
		const response = await fetch(`/api/artpost/${art_id}`, {
		method: 'PUT',
		body: JSON.stringify({art_text}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		document.location.replace('/art');
	} else {
		alert('Failed to update post');
	}
	}
};


const delArtButtonHandler = async (event) => {
	event.preventDefault();
	const art_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

	const response = await fetch(`/api/artpost/${art_id}`, {
		method: 'DELETE',
	});

	if (response.ok) {
		document.location.replace('/art');
	} else {
		alert('Failed to delete post');
	}
};

document
	.querySelector('#edit-art-form')
	.addEventListener('submit', editArtFormHandler);

document
	.querySelector('#art-delete-btn')
	.addEventListener('click', delArtButtonHandler);