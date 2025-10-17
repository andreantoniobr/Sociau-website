import type { InputHTMLAttributes } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function InputFragment({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`custom-input ${className}`}
    />
  );
}

