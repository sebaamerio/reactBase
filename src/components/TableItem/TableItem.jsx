import "./TableItem.css";
import { ButtonCancel } from "../common/Button/ButtonCancel.jsx";

export const TableItem = ({ title, completed, id, handleCheck, handleRemoveItem }) => {
	return (
		<>
			<input
				type="checkbox"
				className="card__item__input"
				name="tableItem"
				id="tableItem"
				checked={completed}
				onChange={() => handleCheck({ id })}
			/>

			<label className="card__item__label">{title}</label>

			<ButtonCancel id={id} handleRemoveItem={handleRemoveItem} />
		</>
	);
};
