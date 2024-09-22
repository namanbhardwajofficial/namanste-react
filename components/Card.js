const CardComponent = ({ cardData }) => {
  console.log(cardData.data);
  const {
    area,
    avgRating,
    cloudinaryImageId,
    cuisines,
    costForTwoString,
    name,
  } = cardData?.data;
  return (
    <div className="card-container">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${cloudinaryImageId}`}
        alt="Description of the image"
        className="card-image"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h4>{area}</h4>
      <h4>{costForTwoString} </h4>
      <h4>{avgRating}</h4>
    </div>
  );
};
export default CardComponent;
