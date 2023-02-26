import "./NavBarLayout.scss";
import Logo from "./asset/logo.png";
import { BiSearch } from "react-icons/bi";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBarLayout(props) {
  const [valueInit, setValueInit] = useState("");
  const handleInput = useCallback(
    (e) => {
      if (e === "Enter" && valueInit) {
        props.parentCallback(valueInit);
        setValueInit("");
      }
    },
    [props, valueInit]
  );
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".nav-main").style.transform = "translateY(0)";
    } else {
      document.querySelector(".nav-main").style.transform = "translateY(-100%)";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <div className="nav-main">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/military">
              <img src={Logo} alt="" className="logo" />
            </Link>
            <ul className="list-direct">
              <Link to="/military">
                <li className="list-direct--item">Trang chủ</li>
              </Link>
              <li className="list-direct--item">
                Trang Bị
                <ul className="sub-nav">
                  <Link to="/equirement/army">
                    <li className="sub_nav-item">Trang bị lục quân</li>
                  </Link>
                  <Link to="/equirement/airforce">
                    <li className="sub_nav-item">Trang bị không quân</li>
                  </Link>
                  <Link to="/equirement/navy">
                    <li className="sub_nav-item">Trang bị hải quân</li>
                  </Link>
                  <Link to="/equirement/defend">
                    <li className="sub_nav-item">Trang bị phòng thủ</li>
                  </Link>
                  <Link to="/equirement/others">
                    <li className="sub_nav-item">trang bị khác</li>
                  </Link>
                </ul>
              </li>
              <Link to="/introduce">
                <li className="list-direct--item">Tin tức</li>
              </Link>

              <Link to="/about">
                <li className="list-direct--item">Giới thiệu</li>
              </Link>
              

              
            </ul>
          </div>
          <div className="nav-right">
            <Link to="/search">
              <div className="search">
                <BiSearch className="search-icon" />
                <input
                  onChange={(e) => setValueInit(e.target.value)}
                  onKeyDown={(e) => handleInput(e.key)}
                  type="text"
                  placeholder="Tìm kiếm vũ khí, phương tiện,..."
                  className="search-control"
                  value={valueInit}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
