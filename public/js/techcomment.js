const commentTechFormEl = async function(event) {
	event.preventDefault();

	const tech_post_id = document.querySelector('input[name="tech-post-id"]').value;
	const tech_body = document.querySelector('textarea[name="tech-post-body"]').value;

	if (body) {
		await fetch('/api/techcomment', {
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
.querySelector('#tech-comment-form') //attach form id for tech comment in handlebars
.addEventListener('submit', commentTechFormEl);