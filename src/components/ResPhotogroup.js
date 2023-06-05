import { PhotoGroup } from "./ResPhotogroupStyledComponents";

function ResPhotoGroup({ target }) {
  return (
    <PhotoGroup>
      {Object.entries(target[0][1].photo).map(([key, value], index) => {
        return <img src={value.url} alt="리뷰 사진" />;
      })}
    </PhotoGroup>
  );
}

export default ResPhotoGroup;
