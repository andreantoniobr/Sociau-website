import "./styles.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Mission from "../../components/mission";
import Donations from "../../components/monthly-donations";
import Donate from "../../components/donate";

export default function ContributePage() {
  return (
    <>
      <div className="full-screen mission-bg">
        <Header />
        <main className="contribute-page main-content content-bottom">
          <Mission />
        </main>
      </div>
      <Donate />
      <Donations />
      <Footer />
    </>
  );
}
