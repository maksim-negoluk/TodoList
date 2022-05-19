import StyledInput from "./styles"

const Input = ({type, placeholder, getInput, value}) => {
	return (
		<StyledInput type={type} placeholder={placeholder} value={value} onInput={(event) => getInput(event)}/>
	)

}

export default Input;