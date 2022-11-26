const newFormHandler = async (event) => {
	event.preventDefault();

	const geo_title = document.querySelector('input[name="geo-post-title"]').value;
	const geo_body = document.querySelector('textarea[name="geo-post-body"]').value;

	await fetch("/api/geopost", {
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
.querySelector('#geo-post-form')
.addEventListener('submit', newFormHandler);