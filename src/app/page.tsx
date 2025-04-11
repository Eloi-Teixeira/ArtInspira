import Benefits from "@/components/benefits";
import Design from "@/components/design";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Image from "next/image";

export default function Home() {

  const ideia = {
    title: "Mundo Submarino Futurista",
    text: "Uma civilização submarina que combina elementos orgânicos e tecnológicos. Criaturas bioluminescentes nadam entre ruínas de uma cidade antiga enquanto veículos futuristas de propulsão magnética passam ao redor. As estruturas arquitetônicas misturam corais vivos com vidro e metal em formas curvilíneas.",
  };

  const palette = {
    colors: ["#ff6b6b", "#4eccc4", "#ffe76e", "#1a535c", "#5c4ff0"],
    description: "Esta paleta combina tons aquáticos profundos com toques de cores vibrantes para elementos bioluminescentes.",
    sugestion: "Experimente combinar cores vibrantes para criar um efeito visualmente atraente.",
  };

  return (
    <>
    <Header />
    <Intro />
    <Design ideia={ideia} palette={palette} />
    <Benefits />
    <Footer />
    </>
  );
}
