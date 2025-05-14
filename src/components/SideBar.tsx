import { Stack } from "@mui/material"
import { categories } from "../utils/constants";

interface IProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({ selectedCategory, setSelectedCategory }: IProps) => {
  return (
    <Stack direction={"row"} sx={{ overflowY: "auto", height: { sx: "auto", md: "89vh" }, flexDirection: { md: "column" } }}>
      {categories.map((category) => (
        <button className="category-btn" key={category.name} style={{ background: category.name === selectedCategory ? "#fc1503" : "#000", color: "#fff" }} onClick={() => setSelectedCategory(category.name)}>
          <span style={{ color: category.name === selectedCategory ? "#fff" : "#fc1503", marginRight: "15px" }}>
            <category.icon />
          </span>
          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar