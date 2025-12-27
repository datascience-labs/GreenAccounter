import { Box, Typography, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: 7 }}>
      <Divider sx={{ mb: 2 }} />
      <Typography
        variant="h4"          // ⬅️ caption → body2
        align="right"
        marginTop={3}
        marginRight={5}
        color="text.secondary"
        sx={{ fontWeight: 500 }}
      >
        Carbon Intensity powered by Electricity Maps
      </Typography>
    </Box>
  );
};

export default Footer;
