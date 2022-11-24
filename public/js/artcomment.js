const commentArtFormEl = async function(event) {
	event.preventDefault();

	const art_post_id = document.querySelector('input[name="art-post-id"]').value;
	const art_body = document.querySelector('textarea[name="art-post-body"]').value;

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
.querySelector('#art-comment-form') //attach form id for art comment in handlebars
.addEventListener('submit', commentArtFormEl);