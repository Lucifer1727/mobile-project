import Navbar from "./assets/components/navbar";
import Part1 from "./assets/components/part1";
import phones from "./assets/Images/phones.png";
// import pink from "./assets/Images/pink.png";
import Features from "./assets/components/features";
import Users from "./assets/components/users";
import Faq from "./assets/components/Faq";
import Down from "./assets/components/down";
import Footer from "./assets/components/footer";
import "./App.css";
function App() {
  return (
    <>
      <div className="bg-white h-[100vh] w-[100vw] overflow-x-hidden flex-col">
        <Navbar />
        <div className="sm:flex gap-[10vw]">
          <Part1 />
          <img className="hidden sm:flex" src={phones} alt="" />
        </div>
      </div>
      <div className="bg-white h-[100vh] w-[100vw] overflow-x-hidden flex-col">
        <Features />
        <Users />
        <Faq />
        <Down />
        <Footer />
      </div>
    </>
  );
}

export default App;
