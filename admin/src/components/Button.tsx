
type ButtonProps = {
    bgColor: string;
    color: string; 
    size: string;
    text: string;
    borderRadius: string;
}  

const Button = ({bgColor, color, size, text, borderRadius}: ButtonProps) => {
  return (
    <div>
      <button type="button" style={{ backgroundColor: bgColor, color, borderRadius}} className={`text-${size} p-3 hover:drop-shadow-xl`}>
        {text}
      </button>
    </div>
  )
}

export default Button
