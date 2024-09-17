import "./Table.css";
import { TableItem } from "../TableItem/TableItem";

export const Table = ({ elements, handleCheck, handleRemoveItem }) => {
	return (
		<ul className="table__ul">
			{elements.map((item) => (
				<li key={item.id} className="table__li">
					<TableItem
						title={item.title}
						completed={item.completed}
						id={item.id}
						handleCheck={handleCheck}
						handleRemoveItem={handleRemoveItem}
					/>
				</li>
			))}
		</ul>
	);
};
