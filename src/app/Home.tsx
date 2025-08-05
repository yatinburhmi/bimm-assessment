import CarPage from "@/features/cars/pages/CarPage";
import { Box as MUIBox, Typography as MUITypography } from "@mui/material";

const Home = () => {
  return (
    <MUIBox component={"main"}>
      <MUITypography variant="h4">AudiRED</MUITypography>
      <CarPage />
    </MUIBox>
  );
};

export default Home;
