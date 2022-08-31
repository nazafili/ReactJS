const Input = ({ placeholder, type, value, change }) => {
    return (
        <input placeholder={placeholder} type={type} value={value} onChange={change} />);
};

export default Input;