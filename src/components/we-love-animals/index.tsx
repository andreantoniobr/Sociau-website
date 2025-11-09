import "./styles.css";
import JumpingDog from "../../assets/jumping-dog.png";

function WeLoveAnimals() {
  return (
    <section className="full-screen we-love-animals">
      <div className="we-love-animals-left">
        <img
          src={JumpingDog}
          alt="Cachorro Pulando"
        />
      </div>
      <div className="we-love-animals-right">
        <h2>
          AMAMOS ANIMAIS E<br />
          <span>ACREDITAMOS EM FINAIS FELIZES.</span>
        </h2>
        <p>
          No SOCIAU, cada adoção é um novo começo. Acreditamos que todos os
          animais merecem amor e segurança. Nossa equipe trabalha
          incansavelmente para garantir que cada um encontre um lar feliz. Seja
          parte dessa missão de amor!
        </p>
      </div>
    </section>
  );
}

export default WeLoveAnimals;
