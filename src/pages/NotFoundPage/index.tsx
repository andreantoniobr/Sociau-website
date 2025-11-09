import { useNavigate } from "react-router-dom";
import "./styles.css";
import ButtonFragment from "../../fragments/button-fragment";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Página Não Encontrada</h1>
        <p className="error-message">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <div className="error-actions">
          <ButtonFragment
            className="blue shadow-blue"
            label="voltar"
            onClick={handleGoBack}
          />
          <ButtonFragment
            className="shadow-blue"
            label="Página Inicial"
            onClick={handleGoHome}
          />
        </div>
        <div className="error-image">
          <div className="lost-animal"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
