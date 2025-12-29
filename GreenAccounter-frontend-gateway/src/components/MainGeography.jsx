import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoFeatures } from '../data/mockGeoFeatures';
import { tokens } from '../testtheme';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import { Box, Table, TableBody, TableCell, TableRow, CircularProgress} from '@mui/material';
import Button from '@mui/material/Button';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import MapProgressCircle from '../components/MapProgressCircle';
import { Table, TableBody, TableRow, TableCell, LinearProgress, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css'; // import css file from root.

const GlobalStyle = createGlobalStyle`
  .react-custom-alert__body {
    color: #000000 !important; // 메시지의 글씨 색상을 검정색으로 변경
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const LoadingContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${(props) => (props.fadeType === 'in' ? fadeIn : fadeOut)} 1s;
`;
const ProgressBar = ({}) => {
    const [progress, setProgress] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [open, setOpen] = useState(false); // 팝업 상태 관리
    const [showProgressBar, setShowProgressBar] = useState(true); // 진행 바 전체 표시 여부
    const theme = useTheme(); // 다크 모드 여부 확인
  
    useEffect(() => {
    //   const totalTime = 1200; // 2분 = 120,000ms
      const totalTime = 120000; // 2분 = 120,000ms
      const updateInterval = 1000; // 1초마다 업데이트
      const incrementValue = (100 / totalTime) * updateInterval;
  
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + incrementValue;
          if (nextProgress >= 100) {
            clearInterval(interval);
            setIsCompleted(true); // 완료 상태 설정
            setOpen(true); // 팝업 열기
            return 100;
          }
          return nextProgress;
        });
      }, updateInterval);
  
      return () => clearInterval(interval);
    }, []);
  
    // 다크 모드일 때 색상과 일반 모드일 때 색상 구분
    const progressBarColor = theme.palette.mode === 'dark' ? '#90caf9' : '#fff';
  
    // 팝업 닫기 및 진행 바 숨기기
    const handleClose = () => {
      setOpen(false); // 팝업 닫기
      setShowProgressBar(false); // 진행 바 숨기기
    };
  
    // 진행 바가 사라지도록 조건부 렌더링
    if (!showProgressBar) {
      return null; // 진행 바 전체 컴포넌트 숨기기
    }
  
    return (
      <>
        <Box 
          sx={{ 
            width: '100%', 
            marginTop: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            marginLeft: '30px'
        }}>
          <Typography 
            variant="body1" 
            style={{ fontSize:'15px', marginBottom: '10px' }} // 텍스트 가운데 정렬
          >
            <strong>Migration</strong>: {Math.round(progress)}%
          </Typography>
          <Box sx={{ width: '100%' }}>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ backgroundColor: progressBarColor }}
            />
          </Box>
        </Box>
  
        {/* 팝업 Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>마이그레이션 완료</DialogTitle>
          <DialogContent>
            <Typography>마이그레이션이 완료되었습니다!</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

const MainGeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const [resources, setResources] = useState({
    CI: 0,
    carbon_emission: 0,
    clock: 0,
    cpu: 0,
    epoch: 0,
    gpu: 0,
    learning_time: 0,
    max_clock: 0,
    memory: 0,
    total_epoch: 0,
    total_gpu: 0,
    total_memory: 1
  });
  const [loading, setLoading] = useState(true);
  const [fadeType, setFadeType] = useState('in');
  const [isMigration, setIsMigration] = useState(false); // 마이그레이션 상태
  const [destRegion, setDestRegion] = useState(''); // 목적지 지역
  const [learningCountry, setCountry] = useState({
    dest_region: '-',
    is_learning: false,
    migration: false,
    migration_progress: false,
    region: '-',
    region_full: '-'
  });

  const location = useLocation();

  const fetchData2 = async () => {
    try {
      const response = await fetch(`/ci/get_resource`);
      const result = await response.json();
      setResources(result);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const checkMigrationStatus = async () => {
    try {
      const response = await fetch(`/mgnt/is_train`);
      const result = await response.json();
      switch (result.region) {
        case 'IT-CSO':
          result.region = 'IRL';
          break;
        case 'KR':
          result.region = 'KOR';
          break;
        case 'US':
          result.region = 'USA';
          break;
        default:
          result.region = '-';
          break;
      }
    //   TEST!!!!
    //   result.migration = !learningCountry.migration;
      setCountry(result);
      // console.log(learningCountry);
      setIsMigration(result.is_train);
      if (result.is_train) {
        setDestRegion(result.dest_region);
        toast.info(`Migration 됨. 도착지역은 ‘${result.dest_region}’ 입니다.`);
      }
    } catch (error) {
      console.error('Error fetching migration status:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchData2, 5000);
    // 컴포넌트가 언마운트될 때 인터벌 제거
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(checkMigrationStatus, 5000);
    // 컴포넌트가 언마운트될 때 인터벌 제거
    return () => clearInterval(interval);
  }, []);


  const handleReloadClick = async () => {
    setLoading(true);
    setFadeType('in');
  };



  const handleStopClick = async () => {
    try {
      setLoading(true);
      setFadeType('in');
      const response = await fetch(`/ci/train-stop`);
      if (response.ok) {
        setLoading(false);
      } else {
        throw new Error('Failed to stop training.');
      }
    } catch (error) {
      console.error('Error stopping training:', error);
      setLoading(false);
    }
  };

  // 마이그레이션 팝업 동작 여부 시뮬레이터 버튼
  const handleSimulateMigration = async () => {
    try {
      setIsMigration(true);
      setDestRegion('Test Region'); // 임시 목적지 지역 설정
      toast.info(`Migration 됨. 도착지역은 'Test Region’ 입니다.`);
    } catch (error) {
      console.error('Error simulating migration:', error);
    }
  };

  return (
    <>
      <ToastContainer floatingTime={5000} />
      <div>
          <>
            {/* 여기서부터 추가 컴포넌트 */}
            <div
              style={{
                display: 'flex',
                textAlign: 'left',
                marginTop: '20px',
                marginLeft: '20px',
                borderRadius: '2px',
                color: theme.palette.mode === 'dark' ? '#fff' : '#000'
              }}
            >
              <div style={{ flex: 0.7 }}>
              <Box style={{ marginTop: '-15px', width: '100%' }}>
                <Table>
                    <TableBody>
                    {!learningCountry.migration && 
                    <TableRow>
                        <TableCell align="left">
                        <Typography variant="span" style={{ fontSize: '15px' }}>
                            <strong>Training State:</strong>
                        </Typography>
                        </TableCell>
                        <TableCell align="left">
                        <Typography variant="span" style={{ fontSize: '15px' }}>
                            {learningCountry.is_learning ? "Learning" : 'x'}
                        </Typography>
                        </TableCell>
                    </TableRow>
                    }
                    {/* Region Row */}
                    <TableRow>
                        <TableCell align="left">
                        <Typography variant="span" style={{ fontSize: '15px' }}>
                            <strong>Region:</strong>
                        </Typography>
                        </TableCell>
                        <TableCell align="left">
                        <Typography variant="span" style={{ fontSize: '15px' }}>
                            {learningCountry.region}
                        </Typography>
                        </TableCell>
                    </TableRow>

                    {/* Arrival area Row */}
                    <TableRow>
                        <TableCell align="left">
                        <Typography variant="span" style={{ fontSize: '15px' }}>
                            <strong>Arrival Region:</strong>
                        </Typography>
                        </TableCell>
                        <TableCell align="left">
                        <Typography variant="span" style={{ fontSize: '15px' }}>
                            {learningCountry.migration ? learningCountry.dest_region : '-'}
                        </Typography>
                        </TableCell>
                    </TableRow>
                    {/* Arrival area Row */}
                    <TableRow>
                        <TableCell align="left">
                        <Typography variant="span" style={{ fontSize: '15px' }}>
                            <strong>Migration State:</strong>
                        </Typography>
                        </TableCell>
                        <TableCell align="left">
                        <Typography variant="span" style={{ fontSize: '15px' }}>
                            {learningCountry.migration ? "Yes" : 'No'}
                        </Typography>
                        </TableCell>
                    </TableRow>
                    {learningCountry.migration && 
                    <ProgressBar/>
                    }
                    </TableBody>
                </Table>
                </Box>
                {/* <Typography variant="span" style={{ fontSize:'15px',marginTop: '30px', marginBottom: '10px' }}>
                  Region: <strong>{learningCountry.region_full}</strong>{learningCountry.region}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Arrival area: {learningCountry.migration ? learningCountry.dest_region : 'KR'} 
                </Typography> */}
              </div>
              <div
                style={{
                  width: '2px',
                  height: '200px',
                  backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#000',
                  margin: '0 20px'
                }}
              ></div>

              <div style={{ flex: 2, display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 50%', marginBottom: '10px' }}>
                  <Typography variant="body1" style={{ fontSize: '2rem' }}>
                    {resources.epoch} / {resources.total_epoch} Epoch
                  </Typography>
                  {/* 현재 탄소 밀집도 */}
                  <Typography variant="body1" style={{ fontSize: '13px' }}>
                    Learning Epochs
                  </Typography>
                </div>

                <div style={{ flex: '1 1 50%', marginBottom: '10px' }}>
                  <Typography variant="body1" style={{ fontSize: '2rem' }}>
                    {parseFloat(resources.carbon_emission).toFixed(2)} gCO2eq/kWh
                  </Typography>
                  <Typography variant="span" style={{ fontSize: '0.9rem', color: 'grey' }}>
                    {`(${
                      parseFloat(parseFloat(resources.carbon_emission) / 25).toFixed(5)
                    } cows burp emissions..🐄🐃🐂)`}
                  </Typography>
                  {/* 누적 탄소 배출량 */}
                  <Typography variant="body1" style={{ fontSize: '13px' }}>
                    cumulative carbon emissions
                  </Typography>
                </div>

                <div style={{ flex: '1 1 50%', marginBottom: '10px' }}>
                  <Typography variant="body1" style={{ fontSize: '2rem' }}>
                    {parseFloat(resources.learning_time).toFixed(2)} second
                  </Typography>
                  {/* 누적 학습 시간 */}
                  <Typography variant="body1" style={{ fontSize: '13px' }}>
                    Cumulative learning time
                  </Typography>
                </div>

                <div style={{ flex: '1 1 50%', marginBottom: '10px' }}>
                  <Typography variant="body1" style={{ fontSize: '2rem' }}>
                    {parseFloat(resources.total_gpu).toFixed(2)} kWh
                  </Typography>
                  {/* 누적 전력 소비량 */}
                  <Typography variant="body1" style={{ fontSize: '13px' }}>
                    Cumulative power consumption
                  </Typography>
                </div>
              </div>
            </div>
          </>
      </div>
    </>
  );
};

export default MainGeographyChart;
