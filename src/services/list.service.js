import { handleResponse } from "./HttpError";

const URL_BASE = "http://18.219.160.0:8080/tasks"; // aws
// const URL_BASE = "http://localhost:3005/todos";

// Defaul headers for fetch
const defaultHeaders = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

const doTask = () => {
	const promise = new Promise((resolve, reject) => {
		const list = [
			{ id: 1, title: "Title 1", completed: false },
			{ id: 2, title: "Title 2", completed: true },
			{ id: 3, title: "Title 3", completed: false },
			{ id: 4, title: "Title 4", completed: false },
			{ id: 5, title: "Title 5", completed: true },
			{ id: 6, title: "Title 6", completed: false },
			{ id: 7, title: "Title 7", completed: false },
			{ id: 8, title: "Title 8", completed: false },
		];
		resolve(list);
		reject("Error");
	});
	return promise;
};

export async function getTodos() {
	/*	const response = await fetch(URL_BASE, {
		method: "GET",
		headers: defaultHeaders,
	})
*/

	return doTask();
}

export async function addTodo({ title }) {
	const response = await fetch(URL_BASE, {
		method: "POST",
		headers: defaultHeaders,
		body: JSON.stringify({ title }),
	});

	return handleResponse(response);
}

export async function updateTodo(todo) {
	const response = await fetch(URL_BASE, {
		method: "PUT",
		headers: defaultHeaders,
		body: JSON.stringify(todo),
	});

	return handleResponse(response);
}

export const deleteTodo = async (id) => {
	await fetch(`${URL_BASE}/${id}`, {
		method: "DELETE",
		headers: defaultHeaders,
	});

	// return handleResponse(response);
};
