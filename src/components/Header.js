import { useNavigate } from "react-router-dom";
import { region } from "../region";

import { HeaderWrapper, Select, Search } from "./HeaderStyledComponents";

function Header({ input, setInput, setSearch, id }) {
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
      </Select>
      <Search>
        <img src="/img/searchbutton.png" alt="search" />
        <input
          type="text"
          className="searchinput"
          placeholder="Search food or restaurant"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setSearch("");
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
