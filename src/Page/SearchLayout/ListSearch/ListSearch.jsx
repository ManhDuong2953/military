import "./ListSearch.scss";
export default function ListSearch(props) {
  return (
    <>
      <span>
        <img className="search-img" src={props.item.img} alt={props.item.name} />
      </span>
      <div className="info-demo">
        <ul className="list-info-search">
          {props.item.name}
          <li>Nước sản xuất: {props.item.origin}</li>
          <li>Nước biên chế: {props.item.countries_used}</li>

          <li>Giá: ${props.item.prices}</li>
          {props.item.details.map((itemChild, indexChild) => {
            if (indexChild <= 6) {
              return <li key={indexChild}>{itemChild}</li>;
            }
          })}
          <li>Xem thêm...</li>
        </ul>
      </div>
    </>
  );
}
