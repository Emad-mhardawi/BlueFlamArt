import "./MenuButton.css";

function MenuButton(props) {
  return (
    <div onClick={props.clicked} className={`MenuButton ${props.className}`}>
      <div className="MenuButton-line"></div>
      <div className="MenuButton-line"></div>
      <div className="MenuButton-line"></div>
    </div>
  );
}

export default MenuButton;
