import "./styles.css";
import Logo from "../logo";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <h3>Institucional</h3>
          <ul>
            <li><a href="#">Adote com responsabilidade</a></li>
            <li><a href="#">Divulgar um animal</a></li>
          </ul>
        </div>
        <div>
          <h3>Ajude</h3>
          <ul>
            <li><a href="#">Doe qualquer valor</a></li>
            <li><a href="#">Seja uma Empresa Parceira</a></li>
          </ul>
        </div>
        <div>
          <h3>Sobre o Sociau!</h3>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">ONGs e Projetos</a></li>
          </ul>
        </div>
        <div>
          <h3>Suporte</h3>
          <ul>
            <li><a href="#">Ajuda</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Termos de uso</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-logo">
        <Logo />
      </div>

      <div className="footer-social">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} Sociau. Todos os direitos reservados.
      </div>
    </footer>
  );
}
