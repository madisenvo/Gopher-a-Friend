const commentFormEl = async function(event) {
	event.preventDefault();

	const tech_post_id = document.querySelector('input[name="post-id"]').value;
	const tech_body = document.querySelector('textarea[name="post-body"]').value;

	if (body) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				tech_post_id,
				tech_body
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		document.location.reload();
	}
};

document
.querySelector('#new-comment-form') //attach form id for tech comment in handlebars
.addEventListener('submit', commentFormEl);