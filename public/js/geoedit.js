const geo_id = document.querySelector('input[name="geo-post-id"]').value;

const editGeoFormHandler = async (event) => {
	event.preventDefault();

	const geo_title = document.querySelector('input[name="geo-post-title"]').value;
	const geo_body = document.querySelector('textarea[name="geo-post-body"]').value;

	if (geo_body && geo_title) {
		const response = await fetch(`/api/geopost/${geo_id}`, {
		method: 'PUT',
		geo_body: JSON.stringify({
		geo_title,
		body
		//not sure if body above should be art_body
	}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		document.location.replace('/geography');
	} else {
		alert('Failed to delete project');
	}
	}
};


const delGeoButtonHandler = async (event) => {
	if (event.target.hasAttribute('geo-data-id')) {
	const geo_id = event.target.getAttribute('geo-data-id');

	const response = await fetch(`/api/geopost/${geo_id}`, {
		method: 'DELETE',
	});

	if (response.ok) {
		document.location.replace('/geography');
	} else {
		alert('Failed to delete project');
	}
	}
};

document
	.querySelector('#edit-geo-form')
	.addEventListener('submit', editGeoFormHandler);

document
	.querySelector('#geo-delete-btn')
	.addEventListener('click', delGeoButtonHandler);