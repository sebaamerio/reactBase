// Error class for http
class HttpError extends Error {
	constructor(response) {
		super(`Http Error: ${response.statusText}`);
		this.response = response;
	}
}

export function handleResponse(response) {
	if (!response.ok) {
		throw new HttpError(response);
	}

	return response.json();
}
