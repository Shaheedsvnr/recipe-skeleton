import Reciepi from "./Reciepi";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
export default function API() {
  const [rcp, setRcp] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setLoading(true);
    setTimeout(() => {
      setSearch(e.target.value);
      setLoading(false);
    }, 1000);
  };
  return (
    <div
      style={{
        backgroundColor: "#c07b9936",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: "50%" }}
          label="Search recipe here..."
          type="search"
          color="secondary"
          onChange={handleSearch}
        />
      </Box>
      {loading ? (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "45%",
          }}
          size={100}
          color="secondary"
        />
      ) : (
        <Reciepi data={rcp} setData={setRcp} search={search} />
      )}
    </div>
  );
}
