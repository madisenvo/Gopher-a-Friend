const geo_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

const editGeoFormHandler = async (event) => {
	event.preventDefault();

	const geo_text = document.querySelector('textarea[name="geo-post-body"]').value;

	if (geo_text) {
		const response = await fetch(`/api/geopost/${geo_id}`, {
		method: 'PUT',
		body: JSON.stringify({geo_text}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		document.location.replace('/geography');
	} else {
		alert('Failed to update post');
	}
	}
};


const delGeoButtonHandler = async (event) => {
	event.preventDefault();
	const geo_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

	const response = await fetch(`/api/geopost/${geo_id}`, {
		method: 'DELETE',
	});

	if (response.ok) {
		document.location.replace('/geography');
	} else {
		alert('Failed to delete post');
	}
};

document
	.querySelector('#edit-geo-form')
	.addEventListener('submit', editGeoFormHandler);

document
	.querySelector('#geo-delete-btn')
	.addEventListener('click', delGeoButtonHandler);