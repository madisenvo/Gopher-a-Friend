const newFormHandler = async (event) => {
	event.preventDefault();

	const art_text = document.querySelector('textarea[name="art-post-body"]').value;

	await fetch("/api/artpost", {
		method: 'POST',
		body: JSON.stringify({ art_text }),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	document.location.replace('/art');
};



document
.querySelector('#art-post-form')
.addEventListener('submit', newFormHandler);