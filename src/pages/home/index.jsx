import React, { useEffect, useState } from "react";
import "./styles.css";
import bannerImage1 from "../../assets/banner1.jpg";
import bannerImage2 from "../../assets/banner2.jpg";
import bannerImage3 from "../../assets/banner3.jpg";
import bannerImage4 from "../../assets/banner4.jpg";

const Home = () => {
  const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];
  const bannerTexts = [
    "Descontos de até 50% esse semestre.",
    "Tranforme sua carreira e estude na melhor Universidade do Brasil",
    "Tem dúvidas sobre qual área escolher?",
    "Faça sua graduação EAD com a sua nota ENEM dos últimos 10 anos",
  ];
  const bannerTextButton = [
    "Matricule-se.",
    "Matricule-se",
    "Veja nossos cursos!",
    "Matricule-se",
  ];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <div className="container-home">
        <div className="container-title-slide">
          {bannerTexts[currentBannerIndex]}
          <button id="button-slides" className="button-site">
            {bannerTextButton[currentBannerIndex]}
          </button>
        </div>
        <div className="container-image-slide">
          <img
            className="image-banner"
            src={bannerImages[currentBannerIndex]}
            alt={`Banner ${currentBannerIndex + 1}`}
          />
        </div>
      </div>
      <div className="estilização"></div>
    </div>
  );
};

export default Home;
