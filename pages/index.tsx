import FeaturedGame from "../components/organism/FeaturedGame";
import Footer from "../components/organism/Footer";
import MainBanner from "../components/organism/MainBanner";
import Navbar from "../components/organism/Navbar";
import Reached from "../components/organism/Reached";
import Story from "../components/organism/Story";
import TransactionsStep from "../components/organism/TransactionStep";

export default function Home() {
  return (
    <>
      <Navbar/>
      <MainBanner/>
      <TransactionsStep/>
      <FeaturedGame/>
      <Reached/>
      <Story/>
      <Footer/>
    </>
  );
}
