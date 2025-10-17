import "./styles.css";
import Header from "../../components/header";
import ContactCard from "../../components/contact-card";
import Footer from "../../components/footer";
import iconTel from "../../assets/icons/telefone.svg"
import iconChat from "../../assets/icons/chat.svg"
import iconEmail from "../../assets/icons/email.svg"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-hero">
          <p className="contact-title">
            Como você prefere falar com a gente?
          </p>
        </section>
        <section className="contact-cards">
          <ContactCard
            title="E-mail"
            subtitle="Tem alguma dúvida?"
            iconUrl={iconEmail}
          />
          <ContactCard
            title="Telefone"
            subtitle="Você pode ligar a qualquer hora."
            iconUrl={iconTel}
          />
          <ContactCard
            title="Chat"
            subtitle="Precisa de alguma ajuda agora?"
            iconUrl={iconChat}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
