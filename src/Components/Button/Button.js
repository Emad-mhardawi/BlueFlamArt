import "./Button.css";

const Button = (props) => {
  return (
    <button  {...props} onClick={props.clicked}  className={`button ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;