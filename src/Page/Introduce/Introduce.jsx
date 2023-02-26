import React from "react";
import "./Introduce.scss";
import dataHome from "../../API/Introduce.json";
import NavBarLayout from "../../Component/NavBarLayout/NavBarLayout";
import FooterLayout from "../../Component/Footer/FooterLayout";
import LazyLoad from "react-lazy-load";
export default function Introduce() {
  return (
    <>
      <NavBarLayout />
      <h1 className="title_intro">Một số trang bị tiêu biểu:</h1>
      {dataHome.data.map((item, index) => (
        <React.Suspense
          fallback={<div style={{ color: "red" }}>Loading...</div>}
        >
          <LazyLoad height="inherit" once>
            <div className="infor" key={index}>
              <h1 className="name_intro">{item.name}</h1>
              <span style={{ flexDirection: item.flexDirection }}>
                <ul>
                  Thông số cơ bản:
                  {item.details.map((itemChild, indexChild) => (
                    <li key={indexChild}>{itemChild}</li>
                  ))}
                </ul>
                <img src={item.img} alt="" className="img-t90" />
              </span>
            </div>
          </LazyLoad>
        </React.Suspense>
      ))}
      <FooterLayout />
    </>
  );
}
