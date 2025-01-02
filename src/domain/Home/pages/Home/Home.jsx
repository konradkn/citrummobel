// css
import "./Home.css";

// hooks
import { useState } from "react";

// components
import NavBar from "../../../../shared/components/NavBar/NavBar";
import Footer from "../../../../shared/components/Footer/Footer";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Card from "../../../../shared/components/Card/Card";
import Banner from "../../../../shared/components/Banner/Banner";
import ImageCard from "../../../../shared/components/ImageCard/ImageCard";
import IndicationItem from "../../../../shared/components/IndicationItem/IndicationItem";

// assets carousel
import kitchen1 from "../../../../assets/home_images/kitchen_5.jpg";
import kitchen2 from "../../../../assets/home_images/kitchen_6.jpg";
import kitchen3 from "../../../../assets/home_images/kitchen_7.jpg";
import kitchen4 from "../../../../assets/home_images/kitchen_8.jpg";

// assets icons
import swipeDown from "../../../../assets/icons/swipe.png";
import whatsApp from "../../../../assets/icons/whatsapp.png";

const phoneNumber = "";
const message = "Hola, me gustaría información sobre una cocina :)";

const handleWARedirect = () => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
};

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="p-3">
        <div className="xl:flex xl:h-lvh">
          <div className="xl:min-w-96">
            <Banner
              title={"Sobre Nosotros"}
              description={
                "Con años de experiencia en la creación de cocinas personalizadas, en Citrum Mobel nos especializamos en combinar innovación, estética y practicidad. Nuestro compromiso es brindarte un servicio personalizado, entendiendo tus necesidades para construir espacios que sean tanto funcionales como inspiradores."
              }
              imgClass={"main-img"}
            />
          </div>

          {/* mobile view and desktop shown */}
          <div>
            <div className="xl:flex">
              <div className="xl:m-1">
                <div className="xl:hidden">
                  <IndicationItem img={swipeDown} />
                </div>
                <HomeSlider
                  img1={kitchen1}
                  img2={kitchen2}
                  img3={kitchen3}
                  img4={kitchen4}
                />
              </div>
              {/* not shown on desktop */}
              <div className="xl:hidden">
                <Card title={"Diseño Personalizado"} description={"Creamos diseños exclusivos que se adaptan a tus preferencias y al espacio disponible. Cada proyecto es único, como tú."} />
              </div>
              <div className="xl:m-1">
                <HomeSlider
                  img1={kitchen1}
                  img2={kitchen2}
                  img3={kitchen3}
                  img4={kitchen4}
                />
              </div>
              {/* not shown on desktop */}
              <div className="xl:hidden">
                <Card title={"Fabricación a Medida"} description={"Utilizamos materiales de alta calidad y técnicas de vanguardia para fabricar cocinas que duran toda la vida."}/>
              </div>
              <div className="xl:m-1">
                <HomeSlider
                  img1={kitchen1}
                  img2={kitchen2}
                  img3={kitchen3}
                  img4={kitchen4}
                />
              </div>
            </div>
            <div className="xl:ml-1">
              <Card
                title={"Transformamos tus ideas en espacios únicos"}
                description={
                  "En Citrum Mobel, diseñamos y fabricamos cocinas a la medida que reflejan tu estilo, optimizan cada rincón y se ajustan a tus necesidades. Nuestro equipo de expertos te acompaña desde la idea inicial hasta la instalación final, asegurando calidad, funcionalidad y elegancia en cada proyecto."
                }
                textColor={"text-slate-950 xl:text-white"}
                bgColor={"xl:bg-gray-900"}
              />
            </div>
          </div>
        </div>

        <div className="xl:w-96">
          <Card
            img={whatsApp}
            title={"¡Hablemos de tu próxima cocina!"}
            description={
              "Estamos aquí para ayudarte a dar vida a tus ideas. Contáctanos para una asesoría gratuita y comienza a crear el espacio que siempre has soñado."
            }
            onClick={handleWARedirect}
          />
        </div>

        <ImageCard imgClass={"secondary-img-1"} />
        <ImageCard imgClass={"secondary-img-2"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
