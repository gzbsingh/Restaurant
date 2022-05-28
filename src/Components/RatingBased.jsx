//import RestaurantDetails from "./Components/RestaurantDetails";
import React from "react";
import RestaurantDetails from "./RestaurantDetails";
export default function RatingBased(AllData) {
  const [data, setData] = React.useState([]);
  const onHandle = (value) => {
    const filterData = AllData.data.filter((el) => el.Rating > value);
    setData(filterData);
  };
  return (
    <div>
      {/* <div className="map">
        {[].map((it) => {
          return <RestaurantDetails {...it} />;
        })}
      </div> */}

      {data.map((item) => {
        return <RestaurantDetails {...item} key={item.Rating} />;
      })}

      <button
        onClick={() => {
          onHandle(1);
        }}
      >
        1 Star RestaurantDetails
      </button>
      <button
        onClick={() => {
          onHandle(2);
        }}
      >
        2 Star RestaurantDetails
      </button>
      <button
        onClick={() => {
          onHandle(3);
        }}
      >
        3 Star RestaurantDetails
      </button>
      <button
        onClick={() => {
          onHandle(4);
        }}
      >
        4 Star RestaurantDetails
      </button>
      <button
        onClick={() => {
          onHandle(5);
        }}
      >
        5Star RestaurantDetails
      </button>
    </div>
  );
}
