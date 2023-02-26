import "./Equirement.scss";
import NavBarLayout from "../../Component/NavBarLayout/NavBarLayout";
import Footer from "../../Component/Footer/FooterLayout";
import data from "../../API/Data.json";
import LazyLoad from "react-lazy-load";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import ListSearch from "../SearchLayout/ListSearch/ListSearch";
export default function Equirements() {
  const { style } = useParams();
  const diRect = useNavigate();
  const [dataMain, setDataMain] = useState();
  useEffect(() => {
    var dataTemp;
    if (style === "navy") {
      dataTemp = data.filter(
        (item, index) => item.style_equirement === "Trang bị hải quân"
      );
    } else if (style === "army") {
      dataTemp = data.filter(
        (item, index) => item.style_equirement === "Trang bị lục quân"
      );
    } else if (style === "airforce") {
      dataTemp = data.filter(
        (item, index) => item.style_equirement === "Trang bị không quân"
      );
    } else if (style === "defend") {
      dataTemp = data.filter(
        (item, index) => item.style_equirement === "Trang bị phòng thủ"
      );
    } else {
      dataTemp = data.filter(
        (item, index) =>
          item.style_equirement !== "Trang bị hải quân" &&
          item.style_equirement !== "Trang bị không quân" &&
          item.style_equirement !== "Trang bị lục quân" &&
          item.style_equirement !== "Trang bị phòng thủ"
      );
    }
    setDataMain(dataTemp);
  }, [style]);

  const handleNavigate = (e) => {
    diRect(`/details/${e}`);
  };
  return (
    <>
      <NavBarLayout />
      <h1 className="title_equire">
        {dataMain && dataMain[0].style_equirement}
      </h1>
      <div className="equire_container">
        {dataMain &&
          dataMain.map((item, index) => (
            <React.Suspense
              fallback={<div style={{ color: "white" }}>Loading...</div>}
              key={index}
            >
              <LazyLoad height="inherit" once>
                <div
                  className="list_equire"
                  onClick={() => handleNavigate(item.id)}
                >
                  <span>
                    <img src={item.img} alt="" className="img-equire" />
                    <p className="name_equire">{item.name}</p>
                  </span>
                </div>
              </LazyLoad>
            </React.Suspense>
          ))}
      </div>
      <Footer />
    </>
  );
}
