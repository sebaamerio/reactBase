import { useState, useEffect } from "react";
import { Form } from "./components/Form/Form";
import { Table } from "./components/Table/Table";
import { getTask, addTask, updateTask, deleteTask } from "./services/list.service";
import "./App.css";

function App() {
	const [list, setList] = useState([]);

	useEffect(() => {
		getTask().then((data) => {
			console.log("useEffect: ", data);
			setList(data);
		});
	}, []);

	const getId = () => {
		let itemMayor = 0;
		list.forEach((item) => {
			if (item.id > itemMayor) itemMayor = parseInt(item.id);
		});

		return itemMayor + 1;
	};

	const handleAddItem = async (pTitle) => {
		const newItem = {
			id: getId().toString(),
			title: pTitle,
			completed: false,
		};
		const addedTask = await addTask({ newItem });
		setList([...list, newItem]);
	};

	const handleRemoveItem = async ({ id }) => {
		console.log("remove ", id);
		const newList = list.filter((item) => item.id != id);

		await deleteTask({ id });
		setList(newList);
	};

	const handleCheck = async ({ id }) => {
		const newList = list.map((item) => {
			if (item.id == id) {
				return {
					...item,
					completed: !item.completed,
				};
			}
			return item;
		});

		const taskChanged = newList.find((item) => item.id === id);
		await updateTask({ taskChanged, id });
		setList(newList);
	};

	return (
		<div className="grid-container">
			<header className="header">
				<Form handleAddItem={handleAddItem} />
			</header>

			<article className="main">
				<Table
					elements={list}
					handleCheck={handleCheck}
					handleRemoveItem={handleRemoveItem}
				></Table>
			</article>
			<footer className="footer"> footer</footer>
		</div>
	);
}

export default App;
