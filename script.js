function getDOMElements(tags) {
	const output = {};

	tags.forEach((tag) => {
		output[tag] = document.querySelector(tag);
	});

	return output;
}

const tags = ['input', 'button', 'select'];
const { input, button, select } = getDOMElements(tags);
input.style.width = '80%';
input.style.height = '40%';