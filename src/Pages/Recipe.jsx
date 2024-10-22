import { Box, CircularProgress, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import RecipeContainer from "../components/RecipeContainer";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 1000);
  };
  return (
    <div
      style={{
        backgroundColor: "#fff",
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
        <RecipeContainer data={recipes} setData={setRecipes} search={search} />
      )}
    </div>
  );
}
