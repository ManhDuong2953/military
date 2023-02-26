import "./DetailsInfoLayout.scss";
import data from "../../API/Data.json";
import NavBarLayout from "../../Component/NavBarLayout/NavBarLayout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import FooterLayout from "../../Component/Footer/FooterLayout";

export default function DetailsInfoLayout() {
  const { id } = useParams();
  const [dataTemp, setDataTemp] = useState(null);

  useEffect(() => {
    const found = data.find((item) => item.id === parseInt(id));
    setDataTemp(found);
  }, [id]);

  return (
    <>
      <div className="details-main">
        <NavBarLayout />
        <h1>{dataTemp && dataTemp.name}</h1>
        <div className="detail-container">
          <iframe
            width="700"
            height="500"
            src={`https://www.youtube.com/embed/${dataTemp && dataTemp.video}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="info-details">
            <ul>
              THÔNG SỐ CHI TIẾT:
              <li>Loại vũ khí: {dataTemp && dataTemp.style}</li>
              {dataTemp &&
                dataTemp.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              <li>Quốc gia sản xuất: {dataTemp && dataTemp.origin}</li>
              <li>Thuộc biên chế: {dataTemp && dataTemp.countries_used}</li>
              <li>Giá: ${dataTemp && dataTemp.prices}</li>
            </ul>
          </div>
        </div>
        <FooterLayout/>
      </div>
    </>
  );
}
