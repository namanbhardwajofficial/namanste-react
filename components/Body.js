import CardComponent from "./Card";
import CardData from "../components/utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  const [resData, SetResData] = useState(CardData);

  return (
    <div className="body">
      <button
        onClick={() =>
          SetResData(resData.filter((res) => res?.data?.avgRating > 4.0))
        }
      >
        Filter Restatuant
      </button>
      <div className="card-row">
        {resData.map((cardData, index) => (
          <CardComponent key={index} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
