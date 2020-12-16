const posts = js.getEl('posts');

function createPost(postData, userInfo, postId) {

	const post = js.createEl('div', 'post');
	posts.insertBefore(post, posts.firstElementChild);
	
	const text = js.createEl('div', 'post-text', postData.text);
	const info = js.createEl('div', 'post-info');
	const author = js.createEl('span', 'post-info', "by " + userInfo.displayName);
	const d = new Date(postData.date);
	const realDate = js.formatDate(d)
	const date = js.createEl('span', 'post-date', " on " + realDate);

	info.appendChild(author);
	info.appendChild(date);

	post.appendChild(text);
	post.appendChild(info);
}