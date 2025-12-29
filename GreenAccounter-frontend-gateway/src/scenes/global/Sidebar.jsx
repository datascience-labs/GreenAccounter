import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100]
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDarkMode = theme.palette.mode === 'dark';
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  // dark : #333 / light:  #f1f3f5
  const sidebarWidth = isCollapsed ? '80px' : '250px'; // 사이드바의 너비 설정
  const sideColor = isDarkMode ? colors.primary[400] : '#f1f3f5' ;
  return (
    <Box display="flex">
      <Box
        sx={{
          position: 'fixed', // 사이드바를 고정
          top: 0, // 페이지의 맨 위에 고정
          left: 0, // 페이지의 맨 왼쪽에 고정
          height: '100vh', // 전체 화면 높이를 차지
          width: sidebarWidth, // 사이드바의 너비
          zIndex: 1000, // 다른 요소들보다 위에 표시되도록 z-index 설정
          '& .pro-sidebar-inner': {
            background: `${sideColor} !important`
          },
          '& .pro-icon-wrapper': {
            backgroundColor: 'transparent !important'
          },
          '& .pro-inner-item': {
            padding: '5px 35px 5px 20px !important'
          },
          '& .pro-inner-item:hover': {
            color: '#868dfb !important'
          },
          '& .pro-menu-item.active': {
            color: '#6870fa !important'
          }
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: '10px 0 20px 0',
                color: colors.grey[100]
              }}
            >
              {!isCollapsed && (
                <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                  <Typography variant="h3" color={colors.grey[100]}>
                    {/* 사이드바 타이틀 */}
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="logo"
                    width="150px"
                    height="150px"
                    src={`../../assets/logo.png`}
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: '10px 0 0 0' }}
                  >
                    Green<br></br>Accounting<br></br>Platform
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    {/* 사용자 설명 */}
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : '10%'}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                Data
              </Typography>
              <Item
                title="Clouds"
                to="/team"
                icon={<CloudOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                Charts
              </Typography>
              <Item
                title="Carbon-Emission"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {/* <Item
                title="Cloud Usage"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
              {/* <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>

      <Box
        sx={{
          marginLeft: sidebarWidth, // 사이드바의 너비만큼 콘텐츠를 오른쪽으로 이동
          padding: '20px',
          width: `calc(100% - ${sidebarWidth})`, // 전체 너비에서 사이드바 너비를 뺀 값
        }}
      >
        {/* 여기에 메인 콘텐츠를 렌더링 */}
      </Box>
    </Box>
  );
};

export default Sidebar;
