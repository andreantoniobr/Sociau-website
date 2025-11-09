import "./styles.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import FAQ from "../../components/frequent-questions";

export default function FAQPage() {
  return (
    <>
    <Header />
      <section className="faq-title">
        <h1>Perguntas frequentes</h1>
        <p>
          Veja as respostas de algumas das perguntas frequentes sobre nosso
          serviço.
        </p>
      </section>      
      <FAQ />
      <Footer />
    </>
  );
}
