import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper,IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <Paper component={"form"} onSubmit={()=>{}} sx={{borderRadius:20,border:"1px solid #3d3d3d",pl:2,boxShadow:"none",mr:{sm:5}}}>
      <input className="search-bar" placeholder="Search..." value={""} onChange={()=>{}}/>
      <IconButton type="submit" sx={{p:"10px",color:"red"}}><SearchIcon/></IconButton>
    </Paper>
  );
}

export default Searchbar