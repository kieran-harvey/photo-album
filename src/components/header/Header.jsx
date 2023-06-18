import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h2 onClick={() => navigate("/")}>Photo Albums</h2>
      <hr />
    </div>
  );
};

export default Header;
