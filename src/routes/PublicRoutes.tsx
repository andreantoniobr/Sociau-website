import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ContributePage from "../pages/ContributePage";
import FAQPage from "../pages/FAQPage";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/quem-somos" element={<AboutPage />} />
      <Route path="/quero-ajudar" element={<ContributePage />} />
      <Route path="/perguntas-frequentes" element={<FAQPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default PublicRoutes;