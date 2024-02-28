import { Container } from "react-bootstrap";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from "./screens/HomeScreens";

function App() {
  return (
    <>
      <Header />
      <main className="py-3" style={{ minHeight: "80vh" }}>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
