import Logo from "../logo";
import Menu from "../menu";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />   
      <Menu />   
    </header>
  );
}
