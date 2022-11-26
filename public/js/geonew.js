const newFormHandler = async (event) => {
	event.preventDefault();

	const geo_text = document.querySelector('textarea[name="geo-post-body"]').value;

	await fetch("/api/geopost", {
		method: 'POST',
		body: JSON.stringify({geo_text}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	
	document.location.replace('/geography');
};



document
.querySelector('#geo-post-form')
.addEventListener('submit', newFormHandler);