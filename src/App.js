import FormCreator from "./components/forms/FormCreator";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Galery from "./components/galery/Galery";
import Header from "./components/header/Header";
import Income from "./components/income/Income";
import Layout from "./components/layout/Layout";
import People from "./components/people/People";
import Recommendations from "./components/recommendations/Recommendations";
import Relation from "./components/relation/Relation";
function App() {
  return (
    <>
      <Header />
      <People />
      <Income />
      <Relation />
      <Layout
        title="Como funciona... Tu pones el talento, nosotros los cliente$"
        txt1="Haz match con la empresa que quieres trabjar y comienza a monetizar tu marca personal"
        txt2="Acepta tantas ofertas como quieras, gana reputación y te colverás más atractivo para las marcas"
        txtBtn="Registrate Gratis"
      />
      <Layout
        title="La plataforma a la medida para Creadores"
        txt1="Ten a la mano la herramienta que necesitas para construir y administrar tú talento digital, sin importar el nivel de influencia en el que te encuentres."
        txtBtn="Iniciar"
      />
      <Layout
        title="Obten grandes beneficios"
        txt1="Sube de rango y gana increíbles premios. Como es acumulativo tarde ó temprano vas a subir. Todas las herramientas que necesitas en un mismo lugar."
        txtBtn="Empezar"
      />
      <Layout
        title="Pagos 100% confiables"
        txt1="Seguridad total del pago, le retemos el dinero al cliente para que trabajes con total tranquilidad."
        txtBtn="Empezar"
      />
      <Recommendations />
      <Experience />
      <Galery />
      <Footer />
    </>
  );
}

export default App;
