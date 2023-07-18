import { FoodInfoPriceItem } from "../components/FoodDetail/FoodDetailStyledComponents";

export const Exchange = ({ averageprice, exchangesign }) => {
  let result = averageprice;
  switch (exchangesign) {
    case "€":
      result = parseFloat(averageprice * 0.0007).toFixed(2);
      break;
    case "£":
      result = parseFloat(averageprice * 0.0000061).toFixed(2);
      break;
    case "¥":
      result = parseFloat(averageprice * 0.0053).toFixed(2);
      break;
    case "$":
      result = parseFloat(averageprice * 0.00076).toFixed(2);
      break;
    case "₩":
      result = averageprice.toLocaleString("en");
      break;
    default:
      result = averageprice;
  }

  return <FoodInfoPriceItem>{`${result}${exchangesign}`}</FoodInfoPriceItem>;
};
