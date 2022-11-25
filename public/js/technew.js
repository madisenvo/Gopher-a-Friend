const newFormHandler = async (event) => {
	event.preventDefault();

	const tech_title = document.querySelector('input[name="post-title"]').value;
	const tech_body = document.querySelector('textarea[name="post-body"]').value;

	await fetch(`/api/techpost/${tech_post_id}`, {
		method: 'PUT',
		body: JSON.stringify({
		tech_title,
		tech_body
		}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	
	document.location.replace('/technology');
};



document
.querySelector('#tech-post-form')// add id for new tech post form
.addEventListener('submit', newFormHandler);