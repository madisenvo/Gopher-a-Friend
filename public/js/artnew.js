const newFormHandler = async (event) => {
	event.preventDefault();

	const art_title = document.querySelector('input[name="art-post-title"]').value;
	const art_body = document.querySelector('textarea[name="art-post-body"]').value;

	await fetch("/api/artpost", {
		method: 'PUT',
		body: JSON.stringify({
		art_title,
		art_body
		}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	
	document.location.replace('/art');
};



document
.querySelector('#art-post-form')
.addEventListener('submit', newFormHandler);