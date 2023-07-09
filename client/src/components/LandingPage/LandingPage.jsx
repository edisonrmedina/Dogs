import React from 'react'
import "../LandingPage/LandingPage.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export const LandingPage = () => {
  return (
    <div className="backgorund_image">
      <section>
        <div className="circle" />
        <header>
          <h1></h1>
        </header>
        <div className="content_landing">
          <div className="textBox">
            <h2>
              <span>Happy Dogs</span>
            </h2>
            <p>Descubre el mundo de las razas de perros y crea una experiencia personalizada basada en el temperamento de tu fiel compañero.</p>
            <Link to="/home">
            <div className="home_button">Ingresar</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

}