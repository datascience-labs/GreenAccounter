import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, CircularProgress, useTheme, ButtonGroup, Button} from '@mui/material';
import { mockDataTeam } from '../../data/mockData';
import { tokens } from '../../theme';
import HomeIcon from '@mui/icons-material/Home';  // Replace broken image links with icons
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TvIcon from '@mui/icons-material/Tv';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';  // 비행기 아이콘
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ForestIcon from '@mui/icons-material/Forest'; // 나무 아이콘

const CircularChartWithLabel = ({ value, label }) => {
  const theme = useTheme();  // Get current theme
  const isDarkMode = theme.palette.mode === 'dark'; // 다크 모드 여부 확인
  const textColor = theme.palette.mode === 'dark' ? 'white' : 'black';  // Set text color based on theme mode
  const chartColor = isDarkMode ? '#90caf9' : '#4551b5'; // 차트 색상도 동일하게 설정

  return (
    <Box position="relative" display="inline-flex" flexDirection="column" alignItems="center">
      {/* Background circular progress (grey) */}
      <CircularProgress 
        variant="determinate" 
        value={100} 
        size={120} 
        thickness={6} 
        style={{ color: '#d3d3d3', position: 'absolute' }} 
      />
      {/* Foreground circular progress */}
      <CircularProgress 
        variant="determinate" 
        value={value} 
        size={120} 
        thickness={6} 
        style={{ color: chartColor }} 
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" component="div" color={textColor} style={{ textAlign: 'center', marginBottom: '30px' }}>
          {value}
        </Typography>
      </Box>
      <Typography variant="h4" component="div" color={textColor} style={{ marginTop: '10px', textAlign: 'center' }}>
        {label}
      </Typography>
    </Box>
  );
};


const CarbonFootprint = () => {
  const theme = useTheme(); // 현재 테마를 가져옴
  const isDarkMode = theme.palette.mode === 'dark'; // 다크 모드 여부 확인
  const textColor = isDarkMode ? '#fff' : '#555'; // 다크 모드일 때 텍스트 색상
  const iconColor = isDarkMode ? '#90caf9' : '#4551b5'; // 다크 모드일 때 아이콘 색상

  const [selectedTab, setSelectedTab] = useState('flights'); // 선택된 탭 상태 관리

  const renderContent = () => {
    switch (selectedTab) {
      case 'flights':
        return (
          <Grid container justifyContent="center" spacing={4}>
            <Grid item>
              {/* 비행기 아이콘 */}
              <FlightTakeoffIcon sx={{ fontSize: 150, color: iconColor }} /> {/* 아이콘 크기 증가 */}
            </Grid>
            <Grid item>
              <Typography sx={{ color: textColor, fontSize: '1.7em', fontWeight: 'bold' }}>
                CO2e emissions from
              </Typography>
              <Typography variant="h2" sx={{ color: iconColor, fontWeight: 'bold', textAlign:'left', marginLeft:'5px'}}> {/* 글자 크기 증가 */}
                17
              </Typography>
              <Typography sx={{ color: textColor, fontSize: '1.7em'}}> {/* 글자 크기 증가 */}
                direct one way flights <br/>from <i>NYC</i>  to <i>London</i>
              </Typography>
            </Grid>
          </Grid>
        );
      case 'phones':
        return (
          <Grid container justifyContent="center" spacing={4}>
            <Grid item>
              {/* 스마트폰 아이콘 */}
              <SmartphoneIcon sx={{ fontSize: 150, color: iconColor }} /> {/* 아이콘 크기 증가 */}
            </Grid>
            <Grid item>
              <Typography  sx={{ color: textColor, fontSize: '1.7em', fontWeight: 'bold' }}> {/* 글자 크기 증가 */}
                CO2e emissions from
              </Typography>
              <Typography variant="h2" sx={{ color: iconColor, fontWeight: 'bold', textAlign:'left', marginLeft:'5px' }}> {/* 글자 크기 증가 */}
                1.7+ M
              </Typography>
              <Typography sx={{ color: textColor, fontSize: '1.7em'}}> {/* 글자 크기 증가 */}
                smartphones charged
              </Typography>
            </Grid>
          </Grid>
        );
      case 'trees':
        return (
          <Grid container justifyContent="center" spacing={4}>
            <Grid item>
              {/* 나무 아이콘 */}
              <ForestIcon sx={{ fontSize: 150, color: iconColor }} /> {/* 아이콘 크기 증가 */}
            </Grid>
            <Grid item>
              <Typography sx={{ color: textColor, fontSize: '1.7em', fontWeight: 'bold' }}> {/* 글자 크기 증가 */}
                carbon sequestered by
              </Typography>
              <Typography variant="h2" sx={{ color: iconColor, fontWeight: 'bold', textAlign:'left', marginLeft:'5px'}}> {/* 글자 크기 증가 */}
                 233
              </Typography>
              <Typography sx={{ color: textColor, fontSize: '1.7em', }}> {/* 글자 크기 증가 */}
                Tree seedlings grown <br /> for 10 years
              </Typography>
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      {/* 중간 콘텐츠 */}
      <Box sx={{ textAlign: 'center', padding: '40px 20px' }}>{renderContent()}</Box>

      {/* 버튼 그룹 */}
      <Box textAlign="center" sx={{ marginTop: '20px' }}>
        <ButtonGroup variant="contained">
          <Button
            sx={{
              backgroundColor: selectedTab === 'flights' ? iconColor : '#e0e0e0',
              color: selectedTab === 'flights' ? 'white' : textColor,
              fontSize: '1rem', // 버튼 글자 크기 증가
            }}
            onClick={() => setSelectedTab('flights')}
          >
            FLIGHTS
          </Button>
          <Button
            sx={{
              backgroundColor: selectedTab === 'phones' ? iconColor : '#e0e0e0',
              color: selectedTab === 'phones' ? 'white' : textColor,
              fontSize: '1rem', // 버튼 글자 크기 증가
            }}
            onClick={() => setSelectedTab('phones')}
          >
            PHONES
          </Button>
          <Button
            sx={{
              backgroundColor: selectedTab === 'trees' ? iconColor : '#e0e0e0',
              color: selectedTab === 'trees' ? 'white' : textColor,
              fontSize: '1rem', // 버튼 글자 크기 증가
            }}
            onClick={() => setSelectedTab('trees')}
          >
            TREES
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

const Team = () => {
  const [selectedRow, setSelectedRow] = useState(null); // 선택된 행 저장
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDarkMode = theme.palette.mode === 'dark';  
  const textColor = isDarkMode ? 'white' : 'black' ; // 다크 모드일 때 밝은 파랑, 라이트 모드일 때 진한 파랑
  const iconColor = isDarkMode ? '#90caf9' : '#4551b5'; // 아이콘 색상도 동일하게 설정
  const handleRowClick = (row) => {
    setSelectedRow(selectedRow?.id === row.id ? null : row); // 선택된 행 토글
  };

  return (
    <Box m="20px">
      <Typography variant="h1" gutterBottom>
        <strong>Clouds </strong>  
          <Typography
            component="span"
            variant="h5"
            sx={{ opacity: 0.7 }}>
          This environment operates on mock data for demonstration purposes.
          </Typography>
      </Typography>
      <Typography variant="subtitle1" fontSize='20px' gutterBottom>
        Managing the Clouds
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontSize: '1.2rem' }}>Number</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: '1.2rem' }}>Cloud Name</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: '1.2rem' }}>Status</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: '1.2rem' }}>Region</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: '1.2rem' }}>Last Used Time</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontSize: '1.2rem' }}>Carbon Emission</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockDataTeam.map((row) => (
              <React.Fragment key={row.id}>
                {/* 기본 행 */}
                <TableRow hover onClick={() => handleRowClick(row)} style={{ cursor: 'pointer' }}>
                  <TableCell sx={{ fontSize: '1.0rem' }}>{row.id}</TableCell>
                  <TableCell sx={{ fontSize: '1.0rem' }}>{row.name}</TableCell>
                  <TableCell sx={{ fontSize: '1.0rem', color: '#00FF00' }}>{row.status}</TableCell>
                  <TableCell sx={{ fontSize: '1.0rem' }}>{row.region}</TableCell>
                  <TableCell sx={{ fontSize: '1.0rem' }}>{row.time}</TableCell>
                  <TableCell sx={{ fontSize: '1.0rem' }}>{row.ci}</TableCell>

                </TableRow>

                {/* 선택된 행 아래에 상세 정보 표시 */}
                {selectedRow?.id === row.id && (
                  <TableRow>
                  <TableCell colSpan={6}>
                    {/* <Box mt="20px" p="20px" bgcolor={colors.greenAccent[900]} borderRadius="10px"> */}
                    <Box 
                      mt="20px" 
                      p="20px" 
                      bgcolor={isDarkMode ? '#333' : '#f1f3f5'} 
                      borderRadius="10px">
                      <Typography variant="h4" gutterBottom>
                        <strong>상세 정보</strong>
                      </Typography>
                      <hr/>
                      <Grid container spacing={0} marginBottom={'10px'}>
                        <Grid item xs={12}>
                          <Grid container spacing={0}>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>서버 이름 (Instance ID):</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.name}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>공인 IP (Instance ID):</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.ip}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12}>
                          <Grid container spacing={0}>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>서버 상태:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.status}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant="h6"><strong>최근 사용 일시:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.time}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12}>
                          <Grid container spacing={0}>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>서버 위치:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.region}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>집계 기간:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.cumulative_dration}days</Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12}>
                          <Grid container spacing={0}>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>CPU 정보:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.cpu}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>Cloud 사용량:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.cloud_usages}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12}>
                          <Grid container spacing={0}>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>GPU 정보:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.gpu}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>에너지 사용량:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.gpu_consumed}kWh</Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12}>
                          <Grid container spacing={0}>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>MEMORY 정보:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.memory}GB</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>Cloud 탄소 배출량:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.cloud_carbon_emission}Kg</Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={12}>
                          <Grid container spacing={0}>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>탄소 집약도:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.ci}KgCO2eq/kWh</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant="h5"><strong>OS 정보:</strong></Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: '0' }}> {/* 열 간 간격 조정 */}
                              <Typography variant="h5">{selectedRow.osInfo}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>


                      <hr/>
                      {/* Exemplary equivalents to put emissions in context. */}
                      <Typography
                      variant = "h4"
                        sx={{
                          textAlign: 'center',  // 가운데 정렬
                          fontSize: '2.0rem',    // 폰트 크기
                          fontWeight: 'bold',    // 폰트 두께
                          color: textColor,      // 텍스트 색상
                          marginTop: '10px',  // 하단 마진
                        }}
                      >
                        고객님의 누적 탄소 배출량은 {selectedRow.gpu_consumed}KgCO2eq 입니다.
                      </Typography>
                      <Grid container spacing={4} mt={1}>
                        {/* 왼쪽: CarbonFootprint */}
                        <Grid item xs={6}>
                          <CarbonFootprint />
                        </Grid>

                        {/* 오른쪽: Circular charts와 Icon들 */}
                        <Grid item xs={6}>
                        {/* 테이블 형식으로 Circular charts 및 아이콘 정렬 */}
                        <Table>
                          <TableBody>
                            <TableRow>
                              {/* Circular charts */}
                              <TableCell align="center">
                                <CircularChartWithLabel value={selectedRow.gpu_consumed} label="KWH" />
                              </TableCell>
                              <TableCell align="center">
                                <CircularChartWithLabel value={selectedRow.cloud_carbon_emission} label="KgCO2eq" />
                              </TableCell>
                              <TableCell align="center">
                                <CircularChartWithLabel value={selectedRow.cumulative_dration} label="days" />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              {/* Icon and additional info */}
                              <TableCell align="center">
                                <Box textAlign="center">
                                  <HomeIcon style={{ fontSize: 100, color: iconColor }} />
                                  <Typography variant="h3" component="div" sx={{ color: textColor }}>
                                  {(selectedRow.cumulative_dration / (250 * 0.4) * 100).toFixed(2)} %
                                  </Typography>
                                  <Typography variant="h5" component="div" sx={{ color: textColor }}>
                                    Power Consumption
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell align="center">
                                <Box textAlign="center">
                                  <DirectionsCarIcon style={{ fontSize: 100, color: iconColor }} />
                                  <Typography variant="h3" component="div" sx={{ color: textColor }}>
                                  {(selectedRow.cumulative_dration / 0.411 * 1.60934).toFixed(2)}
                                  </Typography>
                                  <Typography variant="h5" component="div" sx={{ color: textColor }}>
                                   km driven
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell align="center">
                                <Box textAlign="center">
                                  <TvIcon style={{ fontSize: 100, color: iconColor }} />
                                  <Typography variant="h3" component="div" sx={{ color: textColor }}>
                                  {(selectedRow.cumulative_dration / (0.09 * 24)).toFixed(2)} days
                                  </Typography>
                                  <Typography variant="h5" component="div" sx={{ color: textColor }}>
                                    of TV
                                  </Typography>
                                </Box>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Grid>

                        {/* 왼쪽 끝 */}
                      </Grid>

                    </Box>
                  </TableCell>
                </TableRow>
                  
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Team;
