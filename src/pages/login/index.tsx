import { useState } from "react";
import "./styles.css";
import Header from "../../components/header";
import InputFragment from "../../fragments/input-fragment";
import ButtonFragment from "../../fragments/button-fragment";
import catLogin from '../../assets/CatImgLogin.png'
import iconUser from '../../assets/icons/login/icon-user.svg'
import iconPass from '../../assets/icons/login/icon-password.svg'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Senha:", password);
    alert("Login enviado!");
  };

  return (
    <>
      <Header />
      <main className="login-page">
        <section className="login-left">
          <img
            src={catLogin}
            alt="Gato rasgando tela e aparecendo"
            className="login-image"
          />
        </section>

        <section className="login-right">
          <form onSubmit={handleLogin} className="login-form">
            <h1 className="login-title">Login</h1>
            <div className="input-field-container">
              <InputFragment
                name="username"
                id="username"
                placeholder="Usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img
                src={iconUser}
                alt="Icone de Usuário"
              />
            </div>
            <div className="input-field-container">
              <InputFragment              
                type="password"
                name="userpassword"
                id="userpassword"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={iconPass}
                alt="Icone de Usuário"
              />
            </div>

            <p className="forgot-password">
              <a href="/esquecisenha">Esqueci minha senha</a>
            </p>

            <ButtonFragment className="h-60px blue round blue semibold shadow-blue" label="Entrar"/> 

            <p className="signup-text">
              Não tem conta?{" "}
              <a href="/signup">
                Cadastre-se
              </a>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}


