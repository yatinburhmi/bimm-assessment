import { Box as MUIBox, Typography as MUITypography } from "@mui/material";
import CarPage from "@/features/cars/pages/CarPage";

/**
 * Home is the root page of the app.
 *
 * Renders the app title and the CarPage feature inside a styled layout.
 */

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
