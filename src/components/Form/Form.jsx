import "./Form.css";
import { useState } from "react";

export const Form = ({ handleAddItem }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!value) return;
		handleAddItem(value);
		setValue("");
	};
	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2 className="title">LISTADO DE TAREAS</h2>
			<input
				className="inputText"
				type="text"
				id="inpuTarea"
				name="inpuTarea"
				placeholder="Creamos una tarea"
				required
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
		</form>
	);
};
