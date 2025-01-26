interface ButtonsProps {
    text: string,
    onClick: () => void,
}

const Button = (props: ButtonsProps) => {
    const { text, onClick } = props

    return (
        <button onClick={onClick}>{text}</button>
    );
}

export default Button;