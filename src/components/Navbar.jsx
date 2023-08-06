import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AiFillYoutube } from "react-icons/ai";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      flexDirection: { xs: "column", md: "row" }, // Stack direction based on screen size
      alignItems: { xs: "center", md: "flex-start" }, // Align items based on screen size
      zIndex: 10,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <AiFillYoutube alt="logo" color="#C70039" size={60} />
      <button className="category-btn2">
        <span>
          Tube
          <span className="tube">Mate</span>
        </span>
      </button>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
