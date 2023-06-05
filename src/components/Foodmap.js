import React, { useEffect, useRef } from "react";

function Foodmap({ searchPlace }) {
  const mapRef = useRef(null);
  const infowindowRef = useRef(null);

  useEffect(() => {
    const { kakao } = window;

    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3, // 지도 초기 확대레벨
    };

    const map = new kakao.maps.Map(container, options);
    mapRef.current = map;
    infowindowRef.current = new kakao.maps.InfoWindow({ zIndex: 1 });

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const firstPlace = data[0];
        map.setCenter(new kakao.maps.LatLng(firstPlace.y, firstPlace.x));

        setTimeout(() => {
          map.relayout();
          displayMarker(firstPlace);
        }, 1500);
      }
    }

    function displayMarker(place) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindowRef.current.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindowRef.current.open(map, marker);
      });

      const bounds = new kakao.maps.LatLngBounds();
      bounds.extend(new kakao.maps.LatLng(place.y, place.x));
      map.setBounds(bounds);
    }
  }, [searchPlace]);

  useEffect(() => {
    const onResize = () => {
      if (mapRef.current) {
        mapRef.current.relayout();
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "230px",
      }}
    ></div>
  );
}

export default Foodmap;
