import { PhotoGroup } from "./ResPhotoGroupStyledComponents";

const ResPhotoGroup = ({ target }) => {
  let isphoto = target[1].photo;
  if (!isphoto) {
    return <PhotoGroup></PhotoGroup>;
  }
  return (
    <PhotoGroup>
      {Object.entries(target[1].photo).map(([key, value], index) => {
        return <img src={value.url} alt="음식점 리뷰 사진" />;
      })}
    </PhotoGroup>
  );
};

export default ResPhotoGroup;
