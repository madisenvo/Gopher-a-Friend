const newFormHandler = async (event) => {
	event.preventDefault();

	const geo_title = document.querySelector('input[name="post-title"]').value;
	const geo_body = document.querySelector('textarea[name="post-body"]').value;

	await fetch(`/api/geopost/${geo_post_id}`, {
		method: 'PUT',
		body: JSON.stringify({
		geo_title,
		geo_body
		}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	
	document.location.replace('/geography');
};



document
.querySelector('#geo-post-form')// add id for new geo post form
.addEventListener('submit', newFormHandler);