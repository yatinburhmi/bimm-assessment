import CarPage from "@/features/cars/pages/CarPage";
import { Box as MUIBox, Typography as MUITypography } from "@mui/material";

const Home = () => {
  return (
    <MUIBox component={"main"} px={10} bgcolor={"whitesmoke"}>
      <MUITypography variant="h4" py={2} color={"red"}>
        AudiRED
      </MUITypography>
      <CarPage />
    </MUIBox>
  );
};

export default Home;
