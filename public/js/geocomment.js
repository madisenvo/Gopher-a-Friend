const commentFormEl = async function(event) {
	event.preventDefault();

	const geo_post_id = document.querySelector('input[name="post-id"]').value;
	const geo_body = document.querySelector('textarea[name="post-body"]').value;

	if (body) {
		await fetch('/api/geocomment', {
			method: 'POST',
			body: JSON.stringify({
				geo_post_id,
				geo_body
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		document.location.reload();
	}
};

document
.querySelector('#new-comment-form') //attach form id for geo comment in handlebars
.addEventListener('submit', commentFormEl);