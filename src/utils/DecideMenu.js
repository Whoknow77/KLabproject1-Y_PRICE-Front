import { ResInfo, ResMenuGroup, ResPhotoGroup } from "../components/index";

export const DecideMenu = (
  menu,
  target,
  categoryid,
  mapid,
  averageprice,
  showModal,
  setShowmodal
) => {
  switch (menu) {
    case 0:
      return (
        <ResMenuGroup
          menu={menu}
          target={target}
          mapid={mapid}
          categoryid={categoryid}
          averageprice={averageprice}
          showModal={showModal}
          setShowmodal={setShowmodal}
        />
      );
    case 1:
      return <ResPhotoGroup target={target} />;
    case 2:
      return <ResInfo target={target} />;
    default:
  }
};
