const commentFormEl = async function(event) {
	event.preventDefault();

	const art_post_id = document.querySelector('input[name="post-id"]').value;
	const art_body = document.querySelector('textarea[name="post-body"]').value;

	if (body) {
		await fetch('/api/artcomment', {
			method: 'POST',
			body: JSON.stringify({
				art_post_id,
				art_body
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		document.location.reload();
	}
};

document
.querySelector('#new-comment-form') //attach form id for art comment in handlebars
.addEventListener('submit', commentFormEl);