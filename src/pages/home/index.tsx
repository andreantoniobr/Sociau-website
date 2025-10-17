import InputFragment from "../../fragments/input-fragment";
import ProfileButtonFragment from '../../fragments/profile-button'
import ButtonFragment from '../../fragments/button-fragment'
import Header from '../../components/header'
import { Link } from "react-router-dom";



export default function HomePage() {
  return (
    <>  
    <Header /> 
    <ButtonFragment label="Login/Cadastre-se" />   
    <Link to="/login" className="btn h-60px blue round blue semibold shadow-blue">Cadastre-se / Login</Link>
    <ButtonFragment className="h-60px blue round blue semibold shadow-blue" label="Entrar"/> 
    <ProfileButtonFragment isLogged={true} />  
    <InputFragment className='mb-6 h-[60px]' name='username' id='username' placeholder='Usuário' />
      <main className="contact-page">
        <section className="contact-hero">
          <p className="contact-title">
            Como você prefere falar com a gente?
          </p>
        </section>    
      </main>      
    </>
  );
}