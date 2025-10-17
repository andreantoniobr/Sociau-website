import "./styles.css";
import logoSrc from "../../assets/sociau_logo.png";

interface LogoImageFragmentProps {
  width?: number;
  height?: number;
  alt?: string;
  src?: string;
}

export default function LogoImageFragment({
  width = 200,
  height = 50,
  alt = "Sociau Logo",
  src = logoSrc,
}: LogoImageFragmentProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="logo-image"
    />
  );
}
