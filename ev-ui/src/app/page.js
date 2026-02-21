import Nav from "./components/Nav";
import Form from "./components/Form";
import Home from "./pages/Home";
import Bottom from "./pages/Bottom";
import Footer from "./pages/Footer";

export default function Page() {
  return (
    <main>

      <Nav />
      <Home />
      <Form />
      <Bottom />
      
      <Footer />

    </main>
  );
}