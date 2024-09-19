import "./ButtonCancel.css";

export const ButtonCancel = ({ id, handleRemoveItem }) => {
	return (
		<button
			className="button__cancel"
			onClick={() => {
				handleRemoveItem({ id });
			}}
		>
			X
		</button>
	);
};
