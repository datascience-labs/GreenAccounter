import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const Header = ({ title, subtitle, subsubtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="20px">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: '0 0 5px 0' }}>
        {title}
      </Typography>
      <Typography variant="h3" color={colors.greenAccent[400]}>
        &nbsp;&nbsp;{subtitle}
      </Typography>
      <Typography variant="span" color={colors.grey[100]} sx={{ m: '0 0 5px 0',fontSize:'32px'}}>
        {subsubtitle}
      </Typography>
    </Box>
  );
};

export default Header;
