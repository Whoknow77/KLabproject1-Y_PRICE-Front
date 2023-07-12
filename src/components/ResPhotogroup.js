import { PhotoGroup } from "../styles/ResPhotogroupStyledComponents";

function ResPhotogroup({ target }) {
  return (
    <PhotoGroup>
      {Object.entries(target[0][1].photo).map(([key, value], index) => {
        return <img src={value.url} alt="리뷰 사진" />;
      })}
    </PhotoGroup>
  );
}

export default ResPhotogroup;
