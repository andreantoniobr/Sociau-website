import { useState } from "react";
import type { FAQItem } from "../../lib/types/types";
import "./styles.css";

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Como eu adoto um animal?",
      answer:
        "Para adotar, basta navegar pelos animais disponíveis, escolher aquele com quem mais se identifica e preencher o formulário de interesse. A equipe responsável entrará em contato para confirmar as informações e combinar os próximos passos.",
    },
    {
      id: 2,
      question: "Como eu faço para colocar um animal para adoção?",
      answer:
        "Você pode cadastrar o animal preenchendo o formulário de adoção em nosso site. É importante incluir fotos, idade aproximada, temperamento e informações de saúde para facilitar a adoção responsável.",
    },
    {
      id: 3,
      question: "Como vejo se um animal já foi adotado?",
      answer:
        "Os animais já adotados são marcados como 'Adotado' no site. Além disso, você pode filtrar a listagem para ver apenas os disponíveis para adoção.",
    },
    {
      id: 4,
      question: "O site trabalha com ONGs específicas?",
      answer:
        "Sim, nós colaboramos com diversas ONGs e protetores independentes parceiros. Nosso objetivo é reunir em um só lugar animais de diferentes instituições para facilitar a adoção.",
    },
    {
      id: 5,
      question: "Há algum custo no processo de adoção?",
      answer:
        "Não há custo para usar o site ou adotar um animal. No entanto, algumas ONGs podem solicitar uma taxa simbólica para ajudar nas despesas com vacinação, castração e cuidados veterinários.",
    },
    {
      id: 6,
      question:
        "O site tem algum sistema de verificação para garantir que os adotantes são qualificados?",
      answer:
        "Sim. Antes da adoção ser aprovada, os adotantes passam por uma breve avaliação feita pela ONG ou responsável pelo animal, garantindo que o pet será acolhido em um ambiente seguro e responsável.",
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const isOpen = (id: number) => openItems.includes(id);

  return (
    <div className="faq-container">
      <div className="faq-items">
        {faqItems.map((item) => (
          <div key={item.id} className="faq-item">
            <button
              onClick={() => toggleAccordion(item.id)}
              className="faq-question"
            >
              <span className="faq-text">
                {item.id}. {item.question}
              </span>
            </button>
            <div
              className={`faq-answer-wrapper ${isOpen(item.id) ? "open" : ""}`}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
