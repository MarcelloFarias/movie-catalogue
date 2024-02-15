import "./style.scss";

function Button({onClick, children, style}) {
    return (
        <button className="btn" onClick={onClick} style={style}>
            {children}
        </button>
    );
}

export default Button;