import "./styles.css";
import YellowEmblem from "../../assets/yellow-emblem.png";
import GreenEmblem from "../../assets/green-emblem.png";
import BlueEmblem from "../../assets/blue-emblem.png";

function Donations() {
  return (
    <section className="full-screen donations">
      <p className="title">Doações Mensais/Recorrentes</p>
      <p className="text">
        Caso seja do desejo, disponibilizamos uma cobrança mensal, onde o
        usuário nos ajudará a manter esse projeto de pé, para continuarmos a
        encontrar uma cama quentinha em um lar para esses animaiszinhos.
        <br />
        <br />
        Todo mês também o assinante receberá um boletim mensal com prestação de
        contas de nossas atividades, além de receber notificações toda vez que
        algum animalzinho tiver sido resgatado para caso do usuário queira
        adotar.
      </p>
      <div className="icons">
        <img
          src={YellowEmblem}
          alt="Emblema amarelo"
        />
        <img
          src={BlueEmblem}
          alt="Emblema azul"
        />
        <img
          src={GreenEmblem}
          alt="Emblema verde"
        />
      </div>
    </section>
  );
}

export default Donations;
