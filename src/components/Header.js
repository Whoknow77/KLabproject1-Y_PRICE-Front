import { useNavigate } from "react-router-dom";
import { region } from "../region";

import { HeaderWrapper, Select, Search } from "./HeaderStyledComponents";

function Header({
  input,
  setInput,
  setSearch,
  search,
  id,
  categorynum,
  onChangecategorynum,
}) {
  const navigate = useNavigate();
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
        <img
          src={
            categorynum < 0 && search === ""
              ? "/img/searchbutton.png"
              : "/img/leftbutton.png"
          }
          alt=""
          onClick={() => {
            onChangecategorynum(-1);
            setSearch("");
          }}
        />
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
