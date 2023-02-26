import "./Search.scss";
import NavBarLayout from "../../Component/NavBarLayout/NavBarLayout";
import FooterLayout from "../../Component/Footer/FooterLayout";
import React, { useCallback, useState } from "react";
import LazyLoad from "react-lazy-load";
import { useNavigate } from "react-router-dom";
import data from "../../API/Data.json";
import ListSearch from "./ListSearch/ListSearch";
export default function SearchLayout() {
  const [listData, setListData] = useState([]);
  const [key, setKey] = useState();
  const myDirect = useNavigate();

  const searchQuery = (query, content) => {
    const optimizedQuery = query
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu tiếng Việt
      .replace(/\s+/g, "") // Loại bỏ khoảng trắng
      .toLowerCase();

    const optimizedContent = content
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu tiếng Việt
      .replace(/\s+/g, "") // Loại bỏ khoảng trắng
      .toLowerCase();

    if (optimizedContent.includes(optimizedQuery)) {
      return true;
    } else {
      return false;
    }
  };

  const GetData = useCallback((keyword) => {
    setKey(keyword);
    const newListData = [];
    // const keywords = "Súng";
    for (let index = 0; index < data.length; index++) {
      if (
        searchQuery(keyword, data[index].name) ||
        searchQuery(keyword, data[index].origin) ||
        searchQuery(keyword, data[index].countries_used) ||
        searchQuery(keyword, data[index].style)||
        searchQuery(keyword, data[index].style_equirement)
      ) {
        newListData.push(data[index]);
      }
    }
    setListData(newListData);
  }, []);

  const handleNavigate = (e) => {
    myDirect(`/details/${e}`);
  };
  window.onload = () => {
    document.querySelector("input").focus();
  };

  return (
    <>
      <NavBarLayout parentCallback={GetData} />

      <p className="title-search">Kết quả tìm kiếm cho: {key}</p>
      <ul className="search-container">
        {listData &&
          listData.map((item, index) => (
            <React.Suspense
              fallback={
                <div class="loader">
                  <div class="loader-bar"></div>
                  <div class="loader-bar"></div>
                  <div class="loader-bar"></div>
                </div>
              }
            >
              <LazyLoad height="inherit" once>
                <li
                  key={index}
                  className="search-item"
                  onClick={() => handleNavigate(item.id)}
                >
                  <ListSearch item={item} />
                </li>
              </LazyLoad>
            </React.Suspense>
          ))}
      </ul>

      <FooterLayout />
    </>
  );
}
