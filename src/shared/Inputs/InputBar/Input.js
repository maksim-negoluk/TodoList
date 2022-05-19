import StyledInput from "./styles"

const Input = ({getInput, valueValue}) => {
	return (
		<StyledInput type="text" placeholder="what's need to be done?" value={valueValue} onInput = {(event) => getInput(event)}/>
	)

}

export default Input;