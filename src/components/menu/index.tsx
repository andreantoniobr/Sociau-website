import { useState } from "react";
import "./styles.css";
import ButtonFragment from "../../fragments/button-fragment";
import { Link } from "react-router-dom";

export default function Menu() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li><Link to="/quemsomos" className="menu-link">Quem Somos</Link> </li>
        <li><Link to="/queroajudar" className="menu-link">Quero Ajudar</Link></li>
        <li><Link to="/contato" className="menu-link">Contato</Link></li>
        <li>
          {loggedIn ? (
            <div className="logged-menu">
              <p>Olá, amigo</p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/sociau-27036.appspot.com/o/Icones%2FVector.png?alt=media&token=3b68bf1c-4d02-4b23-8183-925d9d56339c"
                alt="ícone usuário"
                className="user-icon"
              />

              <ul id="logged-options" className="logged-options">
                <li><a href="/novoAnimal">Cadastrar novo animal</a></li>
                <li><a href="/meuPerfil">Meu perfil / animais</a></li>
                <li><a href="/editarPerfil">Editar perfil</a></li>
                <li><a href="/alterarSenha">Alterar senha</a></li>
                <li>
                  <button onClick={() => setLoggedIn(false)} className="logout">
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn shadow-white">Login/Cadastre-se</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}


