import RatingBased from "./Components/RatingBased";
import RestaurantDetails from "./Components/RestaurantDetails";
import "./styles.css";

export default function App() {
  let admins = require("./data/Data.json");
  return (
    <div className="App">
      {admins.map((item) => {
        return <RestaurantDetails {...item} key={item.Rating} />;
      })}
      <RatingBased data={admins} />
    </div>
  );
}
