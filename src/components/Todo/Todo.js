import CheckBox from "../../shared/Buttons/CheckBox/CheckBox";
import Edit from "../../shared/Buttons/EditButton/Edit";
import Delete from "../../shared/Buttons/DeleteButton/Delete";
import {TodoWrapper, TodoText, IconsBlock} from "./style";
import {useState} from "react";

const Todo = ({id, text, deleteTask}) => {

	const [isChecked, setChecked] = useState(false)
	const [isEditing, setEditing] = useState(false)
	const [todoText, setTodoText] = useState(text)

	const handleCheckboxChange = () => {
		setChecked(() => !isChecked)
	}

	const handleTodoEditing = (event) => {
		setTodoText(event.target.value)
	}

	const handleEditModeSwitch = () => {
		setEditing(() => !isEditing)
	}

	return (
		<TodoWrapper>
			<CheckBox checked={isChecked} handleCheckboxChange={handleCheckboxChange}/>
			{(!isEditing) ?
				(<TodoText type={"text"} value={todoText} isChecked={isChecked} isEditing={isEditing} readOnly/>) :
				(<TodoText type={"text"} value={todoText} isChecked={isChecked} isEditing={isEditing} onChange={(event) => handleTodoEditing(event)}/>)}
			<IconsBlock>
				<Edit handleEditModeSwitch={handleEditModeSwitch}/>
				<Delete deleteTask={deleteTask} id={id}/>
			</IconsBlock>
		</TodoWrapper>
	)

}

export default Todo;