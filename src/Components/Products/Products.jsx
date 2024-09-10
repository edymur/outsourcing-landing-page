import React from "react";
import "./Products.css";
import photo_recrutation from "./../../assets/product_recru1.jpg";
import photo_payroll from "./../../assets/product_payroll.jpg";
import photo_HR from "./../../assets/product_HR.jpg";
import photo_IT from "./../../assets/product_IT.jpg";
import recru_icon from "./../../assets/hiring.png";
import payroll_icon from "./../../assets/give-money.png";
import HR_icon from "./../../assets/human-resources.png";
import IT_icon from "./../../assets/it-department.png";

const Products = () => {
  return (
    <div className="products">
      <div className="product">
        <img
          src={photo_recrutation}
          alt="zdjęcie ukazujące kobietę podczas rekrutacji"
        />
        <div className="caption">
          <img src={recru_icon} alt="ikona człowieka w lupie" />
          <p>
            <b>Outsourcing HR</b>
            <br />
            Oddelegowanie zarządzania zasobami ludzkimi do specjalisty
            zewnętrznego.
          </p>
        </div>
      </div>

      <div className="product">
        <img
          src={photo_payroll}
          alt="zdjęcie ukazujące biurko z dwoma laptopami i rękami dwóch mężczyzn"
        />
        <div className="caption">
          <img src={payroll_icon} alt="ikona człowieka w lupie" />
          <p>
            <b>Outsourcing payroll</b>
            <br />
            Zlecenie zewnętrznej firmie prowadzenie procesu wypłaty wynagrodzeń,
            naliczania podatków i składek, obsługę związanych z nimi dokumentów.
          </p>
        </div>
      </div>
      <div className="product">
        <img
          src={photo_HR}
          alt="zdjęcie ukazujące trzy osoby podczas spotkania"
        />
        <div className="caption">
          <img src={HR_icon} alt="ikona człowieka w lupie" />
          <p>
            <b>Outsourcing kadr i płac</b>
            <br />
            Obejmuje outsourcing payroll ORAZ dodatkową obsługę dokumentacji
            kadrowej i zarządzanie personalnymi aspektami zatrudnienia.
          </p>
        </div>
      </div>
      <div className="product">
        <img src={photo_IT} alt="zdjęcie ukazuje programistów podczas pracy" />
        <div className="caption">
          <img src={IT_icon} alt="ikona człowieka w lupie" />
          <p>
            <b>Outsourcing kadr IT</b>
            <br />
            Zlecenie projektów informatycznych (np. z zakresu
            cyberbezpieczeństwa) specjalistom z zewnątrz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
