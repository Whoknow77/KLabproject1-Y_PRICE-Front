# Y-price

이 서비스는 외국인 관광객을 위해 지역별로 음식/음식점의 정보와 가격대를 제공합니다.
**데모페이지** --> https://k-labproject1-y-price-front.vercel.app/

## 요구사항

- Home
- Select
  - 화살표 버튼으로 지역을 넘긴다.
  - Go버튼을 누르면 map 페이지로 넘어간다.
- Map
  - Select 페이지에서 고른 지역을 바탕으로 기본 Map페이지를 보여준다.
    - 기본 Map 페이지
      - 한식 4종류에 대한 카테고리를 보여준다.
      - 선택한 지역의 4종류의 한식을 파는 음식점들을 나열한다.
      - 음식점들을 클릭 시 음식점 정보 페이지를 보여준다.
    - 음식점
      - 음식점의 사진, 이름, 카테고리, 리뷰를 받아온다.
      - 이외의 정보는 Menu, Photo, Info 탭으로 나눠져있다.
      - 메뉴를 선택 시 음식 정보 페이지를 보여준다.
      - 제공하지 않는 메뉴를 클릭 시 모달 창을 띄운다.
      - Menu 탭
        - 음식점의 메뉴들과 가격, 평균가격을 제공한다.
      - Photo 탭
        - 음식점의 리뷰 사진들을 제공한다.
      - Info 탭
        - 음식점의 지도, 위치정보, 영업시간을 제공한다.
    - 음식
      - 한식 4종류인 비빔밥, 삼겹살, 떡볶이, 불고기의 정보를 보여준다.
      - 해당 음식의 이름, 사진과 평균가격을 제공한다.
      - 이때 가격은 6가지 다양한 화폐로 변환이 가능하다.
      - 선택한 지역내에서 해당 음식의 가격대를 그래프로 제공한다.
      - 선택한 지역내에서 해당 음식을 팔고 있는 음식점들을 나열한다.

## Trouble Shooting

### 1. 페이지를 부드럽게 넘기는 애니메이션

페이지를 부드럽게 넘기는 애니메이션을 구현하는 데에는 수 많은 방법이 있다.

라이브러리를 사용하든 transform과 transition으로 X좌표를 부드럽게 이동시켜 하드코딩을 하든..

처음에 캐러셀을 모르는 과정에서 그저 부드럽게 넘기는 애니메이션을 라이브러리를 안쓰고 구현해보자니 시간도 오래걸리고 삽질을 너무 해대서 그냥

캐러셀 라이브러리를 사용하였다.

### 캐러셀 라이브러리

1. React-Slick
2. React-Material-Ui-Carousel
3. React Responsive Carousel

제일 정리가 잘 되어있고 사람들이 가장 많이 사용하는 1번 React-Slick을 통해 구현하였다.

그렇게 구현하던중 문제점이 발생하였다.

```js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainCarousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
```

구조는 이렇게 되어있고, settings에는 dots를 표시할건지, 슬라이드를 한 번에 넘길때 몇개를 넘길지, 몇개를 보여줄지, 슬라이드를 넘기는 속도 등등 엄청 다양한 옵션이 있다.

`Slider`태그로 감싸져있는 `div`태그들 안에 `img`태그를 넣는 방식이 일반적인데 내가 기존에 구현하려는 방식은

<img src="https://i.postimg.cc/hthmsHKd/image.png">

위와 같이 `img`태그를 배경으로 삼아 그 안에서 `flex`를 여러번 사용하여 레이아웃을 배치하였는데 캐러셀에서는 `div`태그가 그 역할을 한다.

그러나 div태그에 여러 버튼들과 문구들을 넣으려니 들어가지 않았고, css 속성도 먹히지 않아서 고민하면서 GPT에 물어보니 답변은

`react-slick`의 다양한 메서드를 이용하라고 알려준다.

`Wrapper`를 부모로 삼고. 그 안에서 `position`을 `absolute`값을 주어서 해결하였다.

하지만 그닥 올바른 방법이 아닌 것 같다. 좀 더 깔끔한 방법을 찾으려면 차라리 라이브러리 없이 직접 구현하여 커스텀 하는 방향이 더 쉬울 것 같다는 생각이 들었다.

따라서 다음부턴 캐러셀을 라이브러리없이 직접 구현해보려 한다.

근데 여전히 문제는 초기에 슬라이드를 넘길때 아주 미세하게 깜빡인다는 점과 슬라이드를 넘기면서 전의 이미지와 다음의 이미지가 부드럽게 이어져야 하는데 다음의 이미지가 나오고 또 다음의 이미지가 겹쳐서 나오는 문제가 있다.

문제를 해결하는 방식을 하나씩 살펴보자

### 슬라이드를 깜빡이지 않고 부드럽게 넘기기

react-slick 라이브러리의 특성상 이미지 슬라이드는 라이브러리가 제공하는 기능에 의해 자동으로 변경된다.

따라서 이미지가 변할때마다 변하는 문구들은 따로 `useState`로 관리되는 변수를 통해 제어한다.

```js
const [id, setId] = useState(0);

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // 애니메이션이 진행 중 일때
  beforeChange: (current, next) => {
    if (current - next === -5 || current - next === 1) {
      setId((prevId) => (prevId === 0 ? 5 : prevId - 1));
    } else {
      setId((prevId) => (prevId + 1) % 6);
    }
  },
  nextArrow: (
    <NextButton>
      <img src="/img/next.png" alt="" />
    </NextButton>
  ),
  prevArrow: (
    <BackButton>
      <img src="/img/back.png" alt="" />
    </BackButton>
  ),
};
```

슬라이더에 사용할 ref를 선언 후, `sliderRef`를 통해 조건에 따라 `sliderRef.current.slickGoTo()`를 이용해 슬라이드를 직접 조작하여 문제를 해결할 수 있다.

### img를 어둡게 처리하기

img를 어둡게 처리하는 방법에는 크게 두가지 방식이 존재한다.

img태그의 흐림 속성을 직접 적용하는 방법과 **div태그에 background 이미지를 삽입하고, 흐림 속성을 적용하는 방법**이 있다.

이전에는 후자의 방법을 이용하여서 똑같이 img 태그 바깥의 div태그에 background에 이미지를 넣고 속성을 적용해보자.

```js
export default function Image({ img }) {
  return (
    <div style={{}}>
      <IMG src={img} />
    </div>
  );
}

const IMG = styled.img`
  width: 100%;
  height: 800px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
  background-size: cover;
`;
```

`setId`는 `useState` 변경 함수 답게 상태 변경이 즉시 발생하는 것이 아니라 비동기적으로 처리된다. 즉, 상태 변경 요청을 한 후, 리액트가 상태를 업데이트하고 리렌더링을 수행하는 데에는 약간의 시간이 걸린다.

`beforeChange는` 슬라이드가 바뀌기 전에 호출되므로, 클릭 이벤트로 인해 상태가 변경되기 전에 호출된다.

`beforeChange` 함수는 (current,next)인자를 가지고 current : 이전 슬라이드의 인덱스, next : 다음 슬라이드의 인덱스를 나타내므로 beforeChange 내부에서 setId를 호출하면, 슬라이드가 실제로 바뀌기 전에 id 상태가 업데이트되는 것을 보장할 수 있다.

### 2. 이벤트 처리 방식과 클로저 함수

```js
import { useState } from "react";

function ResMenuGroup({ selected, target, id, foodtarget2, averageprice }) {
  let priceflag;
  return (
    <ResMenuWrapper>
      {Object.entries(target[0][1].menu).map(([key, value], index) => {
        const foodregex = /(tteokbokki|pork)/gi;
        priceflag = foodregex.test(value.name.toLowerCase());
        return (
          <MenuAverageContainer
            onClick={() => {
              if (priceflag) {
                //
              } else {
                //
              }
            }}
          ></MenuAverageContainer>
        );
      })}
    </ResMenuWrapper>
  );
}
export default ResMenuGroup;
```

반복문안에서 변하는 `priceflag`를 전역적으로 선언하였다.

하지만 원하는 결과값이 나오지 않았고 확인해보니 항상 false값을 가지는 것을 발견하였다.

```js
import { useState } from "react";

function ResMenuGroup({ selected, target, id, foodtarget2, averageprice }) {
  return (
    <ResMenuWrapper>
      {Object.entries(target[0][1].menu).map(([key, value], index) => {
        const foodregex = /(tteokbokki|pork)/gi;
        let priceflag = foodregex.test(value.name.toLowerCase());
        return (
          <MenuAverageContainer
            onClick={() => {
              if (priceflag) {
                //
              } else {
                //
              }
            }}
          ></MenuAverageContainer>
        );
      })}
    </ResMenuWrapper>
  );
}
export default ResMenuGroup;
```

그리고 `priceflag`를 전역적으로 선언하지 않고 안에서 선언해봤더니 값이 조건에 맞게 true or false에 맞게 이벤트가 잘 동작되었다.

이유가 뭘까?

## 참고자료

https://velog.io/@owlsuri/React-slick-Custom
