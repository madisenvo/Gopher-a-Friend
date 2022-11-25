const newFormHandler = async (event) => {
	event.preventDefault();

	const art_title = document.querySelector('input[name="post-title"]').value;
	const art_body = document.querySelector('textarea[name="post-body"]').value;

	await fetch(`/api/artpost/${art_post_id}`, {
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
.querySelector('#geo-post-form')// add id for new art post form
.addEventListener('submit', newFormHandler);