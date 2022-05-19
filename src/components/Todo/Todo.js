import CheckBox from "../../shared/Buttons/CheckBox/CheckBox";
import Redact from "../../shared/Buttons/RedactButton/Redact";
import Delete from "../../shared/Buttons/DeleteButton/Delete";
import {TodoWrapper, TodoText, IconsBlock} from "./style";

const Todo = ({id, deleteTask, text}) => {
	return (
		<TodoWrapper>
			<CheckBox/>
			<TodoText> {text} </TodoText>
			<IconsBlock>
				<Redact />
				<Delete deleteTask={deleteTask} id={id}/>
			</IconsBlock>
		</TodoWrapper>
	)

}

export default Todo;