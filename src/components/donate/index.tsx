import "./styles.css";
import Qrcode from "../../assets/qrcode.png";

function Donate() {
  const cnpj = "12.345.678/0001-95";
  const bankData = {
    banco: "341",
    agencia: "1234-5",
    conta: "56789-0",
    nome: "Associação Sociau",
  };

  return (
    <section className="full-screen donate donate-bg">
      <div className="title">
        <p>Faça sua doação e nos ajude a continuar esse trabalho!</p>
      </div>
      <div className="bank-info">
        <div className="pix">
          <p className="bank-info-title">PIX</p>
          <img src={Qrcode} alt="QR Code PIX" />
          <p>CNPJ: {cnpj}</p>
        </div>
        <div className="ted">
          <p className="bank-info-title">TED ou Transferência</p>
          <p>
            Banco: {bankData.banco}
            <br />
            Agência: {bankData.agencia}
            <br />
            Cc: {bankData.conta}
            <br />
            {bankData.nome}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Donate;
