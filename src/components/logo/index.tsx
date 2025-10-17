import LogoIconFragment from "../../fragments/logo-icon-fragment";
import LogoImageFragment from "../../fragments/logo-image-fragment";
import { Link } from "react-router-dom";
import "./styles.css";

interface LogoProps {
  sizeIcon?: number;
  onClick?: () => void;
}

export default function Logo({ sizeIcon = 50, onClick }: LogoProps) {
  return (
    <Link to="/" className="logo-container">
      <LogoIconFragment size={sizeIcon} />
      <LogoImageFragment width={sizeIcon * 4} />
    </Link>
  );
}
