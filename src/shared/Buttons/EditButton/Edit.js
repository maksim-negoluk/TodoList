import EditIcon from "./styles"
import logo from "../../../static/pencil.png"

const Edit = ({handleEditModeSwitch}) => {
	return (
		<div>
			<EditIcon src={logo} onClick={(event) => handleEditModeSwitch(event)}/>
		</div>
	)

}

export default Edit;