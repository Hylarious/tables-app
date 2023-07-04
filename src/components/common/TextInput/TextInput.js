const TextInput = (props) => {
	return <input value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />
};

export default TextInput