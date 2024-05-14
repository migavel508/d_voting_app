const Button = ({btnName, handleClick, classStyle}) => {
  <button className={Style.button} type="button" onclick={handleClick}>
    {btnName}
  </button>
};

export default Button;
