import React, { useEffect, useState } from "react";

function Foodmap({ searchPlace }) {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=356b31118b5a1505ace3d54067de4a4e&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      setMapLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      const { kakao } = window;

      var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3, // 지도 초기 확대레벨
      };

      const map = new kakao.maps.Map(container, options);
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(searchPlace, placesSearchCB);

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          // 첫 번째 검색 결과를 중심으로 지도 이동
          let firstPlace = data[0];
          map.setCenter(new kakao.maps.LatLng(firstPlace.y, firstPlace.x));

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
          }

          setTimeout(() => {
            map.relayout();
          }, 4000);
        }
      }

      function displayMarker(place) {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });
      }
    }
  }, [mapLoaded, searchPlace]);

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
