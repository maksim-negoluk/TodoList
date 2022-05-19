import DeleteIcon from "./styles"
const trashcanImage = require("../../../static/garbage.png")

const Delete = ({deleteTask, id}) => {
	return (
		<div onClick={() => deleteTask(id)}>
			<DeleteIcon src={trashcanImage}/>
		</div>
	)

}

export default Delete;