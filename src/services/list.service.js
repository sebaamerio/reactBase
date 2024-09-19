import { handleResponse } from "./HttpError";

const URL_BASE = "http://localhost:8000/tasks";

// Defaul headers for fetch
const defaultHeaders = {
	"Content-Type": "application/json",
	Accept: "*/*",
};

const doTaskPromise = () => {
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

export const getTask = async () => {
	const response = await fetch(URL_BASE, {
		method: "GET",
		headers: defaultHeaders,
	});

	return response.json();
};

export async function addTask({ newItem }) {
	const response = await fetch(URL_BASE, {
		method: "POST",
		headers: defaultHeaders,
		body: JSON.stringify(newItem),
	});

	return response.json();
}

export async function updateTask({ taskChanged, id }) {
	const response = await fetch(`${URL_BASE}/${id}`, {
		method: "PUT",
		headers: defaultHeaders,
		body: JSON.stringify(taskChanged),
	});

	return response.json();
}

export const deleteTask = async ({ id }) => {
	console.log("del", id);
	await fetch(`${URL_BASE}/${id}`, {
		method: "DELETE",
		headers: defaultHeaders,
	});

	// return handleResponse(response);
};
