import "./styles.css";
import iconSrc from "../../assets/Sociau_icon.svg";

interface LogoIconFragmentProps {
  size?: number;
  src?: string;
  alt?: string;
}

export default function LogoIconFragment({
  size = 70,
  src = iconSrc,
  alt = "Logo Icon",
}: LogoIconFragmentProps) {
  return (
    <div
      className="logo-icon"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}        
      />
    </div>
  );
}
