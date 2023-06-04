import { useNavigate } from "react-router-dom";
import { region } from "../region";
import { useLocation } from "react-router-dom";
import { HeaderWrapper, Select, Search } from "./HeaderStyledComponents";

function Header({ input, setInput, setSearch, search, id }) {
  const navigate = useNavigate();
  const location = useLocation();
  // 음식과 음식점 정보를 보여줄때는 헤더의 뒤로가기 버튼을 생성
  const foodflag = !location.pathname.includes("food");
  const resflag = !location.pathname.includes("res");

  return (
    <HeaderWrapper input={input}>
      <Select
        onClick={() => {
          navigate("/select/0");
        }}
      >
        <span className="city">{region[Number(id)].city}</span>
        <span className="area">{region[Number(id)].area}</span>
        <img src="/img/down.png" alt="down" />
      </Select>
      <Search>
        {foodflag && resflag ? (
          <img
            src={"/img/searchbutton.png"}
            alt=""
            onClick={() => {
              setSearch("");
              setInput("");
            }}
          />
        ) : (
          <img
            src={"/img/leftbutton.png"}
            alt=""
            onClick={() => {
              setSearch("");
              setInput("");
              // 뒤로가기
              navigate(-1);
            }}
          />
        )}
        <input
          type="text"
          className="searchinput"
          value={input}
          placeholder="Search food or restaurant"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setSearch(e.target.value);
              if (input.toLowerCase() === "tteokbokki") {
                navigate(`/map/${id}/food/0`);
              }
              if (input.toLowerCase() === "bulgogi") {
                navigate(`/map/${id}/food/1`);
              }
              if (input.toLowerCase() === "samgyeopsal") {
                navigate(`/map/${id}/food/2`);
              }
              if (input.toLowerCase() === "bibimbab") {
                navigate(`/map/${id}/food/3`);
              }
            }
          }}
        />
        <img
          src="/img/xbutton.png"
          alt="x"
          onClick={() => {
            setInput("");
          }}
        />
      </Search>
    </HeaderWrapper>
  );
}

export default Header;
