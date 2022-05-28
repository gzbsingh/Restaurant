import "./Restaurant.css";
export default function RestaurantDetails({
  PaymentMethod,
  Category,
  Cost,
  url,
  Rating
}) {
  return (
    <>
      <div className="sub_div">
        <div className="sub_div1">
          <img src={url} alt="Resturant" />
        </div>

        <div>
          <p>{Category}</p>
          <p>{Cost} Rs</p>
          <p>{PaymentMethod}</p>
        </div>
        <div>
          <h4 style={{ color: "red", backgroundColor: "lightgray" }}>
            {Rating}*
          </h4>
        </div>
      </div>
    </>
  );
}
