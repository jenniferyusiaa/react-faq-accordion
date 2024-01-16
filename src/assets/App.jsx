import Box from "../components/box/Box";
import Footer from "../components/footer/Footer";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <section>
        <div className="boxContainer">
          <Box />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default App;
