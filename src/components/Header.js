import { useNavigate } from "react-router-dom";
import { region } from "../region";
import { useLocation } from "react-router-dom";
import { HeaderWrapper, Select, Search } from "./HeaderStyledComponents";

function Header({ input, setInput, setSearch, search, id }) {
  const navigate = useNavigate();
  const location = useLocation();
  // 음식과 음식점 정보를 보여줄때는 헤더의 뒤로가기 버튼을 생성
  const buttonflag = !location.pathname.includes("food");

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
        {buttonflag ? (
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
              // navigate(`/food?q=${input}`);
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
