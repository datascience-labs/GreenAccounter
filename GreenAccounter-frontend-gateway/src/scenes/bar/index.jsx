import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
        <Header
          title="Carbon Emission"
          subtitle={
            <>
              Daily CO2e Levels for US, UK, and KR{" "}
              <span style={{ fontSize: "0.85em", opacity: 0.7 }}>
                (This environment operates on mock data for demonstration purposes.)
              </span>
            </>
          }
        />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
