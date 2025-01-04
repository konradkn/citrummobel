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
import SwipeIndication from "../../../../shared/components/SwipeIndication/SwipeIndication";
import FixedButton from "../../../../shared/components/FixedButton/FixedButton";

// assets carousel
import kitchen5 from "../../../../assets/home_images/kitchen_5.jpg";
import kitchen6 from "../../../../assets/home_images/kitchen_6.jpg";
import kitchen7 from "../../../../assets/home_images/kitchen_7.jpg";
import kitchen8 from "../../../../assets/home_images/kitchen_8.jpg";
import kitchen9 from "../../../../assets/home_images/kitchen_9.jpeg";
import kitchen10 from "../../../../assets/home_images/kitchen_10.jpg";
import kitchen11 from "../../../../assets/home_images/kitchen_11.jpg";
import kitchen12 from "../../../../assets/home_images/kitchen_12.jpg";
import kitchen13 from "../../../../assets/home_images/kitchen_13.jpg";
import kitchen14 from "../../../../assets/home_images/kitchen_14.jpg";
import kitchen15 from "../../../../assets/home_images/kitchen_15.jpg";
import kitchen16 from "../../../../assets/home_images/kitchen_16.jpg";
import kitchen17 from "../../../../assets/home_images/kitchen_17.jpg";
import kitchen18 from "../../../../assets/home_images/kitchen_18.jpg";
import kitchen19 from "../../../../assets/home_images/kitchen_19.jpg";
import kitchen20 from "../../../../assets/home_images/kitchen_20.jpg";

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
        <FixedButton icon={whatsApp} onClick={handleWARedirect}/>
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
                  <SwipeIndication description={"Deslice a la derecha"} />
                </div>
                <HomeSlider
                  img1={kitchen5}
                  img2={kitchen6}
                  img3={kitchen7}
                  img4={kitchen8}
                />
              </div>
              {/* not shown on desktop */}
              <div className="xl:hidden">
                <Card
                  title={"Diseño Personalizado"}
                  description={
                    "Creamos diseños exclusivos que se adaptan a tus preferencias y al espacio disponible. Cada proyecto es único, como tú."
                  }
                />
              </div>
              <div className="xl:m-1">
                <div className="xl:hidden">
                  <SwipeIndication description={"Deslice a la derecha"} />
                </div>
                <HomeSlider
                  img1={kitchen10}
                  img2={kitchen11}
                  img3={kitchen12}
                  img4={kitchen13}
                />
              </div>
              {/* not shown on desktop */}
              <div className="xl:hidden">
                <Card
                  title={"Fabricación a Medida"}
                  description={
                    "Utilizamos materiales de alta calidad y técnicas de vanguardia para fabricar cocinas que duran toda la vida."
                  }
                />
              </div>
              <div className="xl:m-1">
                <div className="xl:hidden">
                  <SwipeIndication description={"Deslice a la derecha"} />
                </div>
                <HomeSlider
                  img1={kitchen14}
                  img2={kitchen15}
                  img3={kitchen16}
                  img4={kitchen17}
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
