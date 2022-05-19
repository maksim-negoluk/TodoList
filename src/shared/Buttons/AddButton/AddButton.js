import StyledAddButton from "./styles"

const AddButton = ({addTask}) => {

	return (
		<StyledAddButton onClick={() => addTask()}> Add Task </StyledAddButton>
	)
}

export default AddButton;