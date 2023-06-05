import { PhotoGroup } from "./ResPhotogroupStyledComponents";

function ResPhotoGroup({ selected, target }) {
  return (
    <PhotoGroup>
      {Object.entries(target[0][1].photo).map(([key, value], index) => {
        return (
          <img
            src={value.url}
            alt="리뷰 사진"
            style={{
              objectFit: "contain",
              width: "140px",
              height: "211px",
              borderRadius: "10px",
              imageRendering: "pixelated",
            }}
          />
        );
      })}
    </PhotoGroup>
  );
}

export default ResPhotoGroup;
