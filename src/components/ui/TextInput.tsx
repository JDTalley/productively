export interface Props {
    value: string;
    onChange: Function;
    onKeyPress: Function;
}

const TextInput: React.FC<Props> = (props) => {
    const handleChange = (e: React.KeyboardEvent<any>) => {
        props.onChange(e);
    }

    const handleKeyPress = (e: React.KeyboardEvent<any>) => {
        props.onKeyPress(e);
    }

    return (
        <div>
            <input
                type="text"
                value={props.value}
                onChange={handleChange}
                onKeyPress={handleKeyPress}>
            </input>
        </div>
    )
}

export default TextInput;