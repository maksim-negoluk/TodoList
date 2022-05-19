import Input from "../../shared/Inputs/InputBar/Input";
import AddButton from "../../shared/Buttons/AddButton/AddButton";
import {InputBlockWrapper, AddTodoBlock} from "./styles";
import {useState} from "react";

const InputBlock = ({addTask}) => {

	const [inputValue, setInputValue] = useState("")

	const handleGettingInput = (event) => {
		setInputValue(event.target.value)
	}

	const handleAddButtonClick = (event) => {
		addTask(inputValue)
		setInputValue("")
	}

	return (
		<InputBlockWrapper>
			<h1>Todo List</h1>
			<AddTodoBlock >
				<Input type={"text"} value={inputValue} placeholder={"What`s need to be done?"} getInput={handleGettingInput}/>
				<AddButton taskName={inputValue} addTask={handleAddButtonClick}/>
			</AddTodoBlock >
		</InputBlockWrapper>
	)
}

export default InputBlock;