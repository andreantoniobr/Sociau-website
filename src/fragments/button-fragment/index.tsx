import "./styles.css";

interface ButtonFragmentProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; 
  className?: string;
}

export default function ButtonFragment({
  label,
  onClick,
  type = "button",
  className = "",
}: ButtonFragmentProps) {  
  const classes = ["btn", className].filter(Boolean).join(" ");

  return (
    <button type={type} onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
