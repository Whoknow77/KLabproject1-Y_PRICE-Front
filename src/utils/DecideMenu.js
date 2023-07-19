import { ResInfo, ResMenuGroup, ResPhotoGroup } from "../components/index";

export const DecideMenu = (
  selected,
  target,
  categoryid,
  id,
  averageprice,
  showModal,
  setShowmodal
) => {
  switch (selected) {
    case 0:
      return (
        <ResMenuGroup
          selected={selected}
          target={target}
          id={id}
          foodtarget2={categoryid}
          averageprice={averageprice}
          showModal={showModal}
          setShowmodal={setShowmodal}
        />
      );
    case 1:
      return (
        <ResPhotoGroup selected={selected} target={target}></ResPhotoGroup>
      );
    case 2:
      return <ResInfo selected={selected} target={target} />;
    default:
  }
};
