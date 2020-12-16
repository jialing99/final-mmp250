const publishButton = document.getElementById('submit-post');
const postInput = document.getElementById('post-body');
postInput.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});
publishButton.addEventListener('click', publishPost);
function publishPost() {
	const uid = fb.getUID();
	fb.publishPost(uid, postInput.value);
	postInput.value = "";
}

