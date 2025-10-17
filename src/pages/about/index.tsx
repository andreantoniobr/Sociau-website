import "./styles.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ButtonFragment from '../../fragments/button-fragment'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="join-us">
          <h1>
            MUITO MAIS QUE UM SITE DE ADOÇÃO
            <br />
            <span>CONECTAMOS CORAÇÕES!</span>
          </h1>
          <p>Somos uma ponte entre ONGs de adoção e pessoas que querem fazer a diferença. Venha conectar corações e lares com a gente!</p>
          <ButtonFragment className="h-60px round semibold shadow-white" label="Venha fazer parte"/> 
        </section>        
      </main>
      <Footer />
    </>
  );
}
