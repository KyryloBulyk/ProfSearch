
type ButtonProps = {
    bgColor: string;
    color: string; 
    size: string;
    text: string;
    borderRadius: string;
    func: () => void
}  

const Button = ({bgColor, color, size, text, borderRadius, func}: ButtonProps) => {
  return (
    <div>
      <button type="button" style={{ backgroundColor: bgColor, color, borderRadius}} className={`text-${size} p-3 py-2 hover:drop-shadow-xl`} onClick={func}>
        {text}
      </button>
    </div>
  )
}

export default Button
