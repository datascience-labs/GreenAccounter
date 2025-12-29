import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, Tooltip } from '@mui/material';
import { tokens } from '../theme';

const MapProgressCircle = ({ endpoint, locationName }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [resource, setResource] = useState({
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
  const [resources2, setResources2] = useState({
    CI: 0,
    cpu: 0,
    gpu: 0,
    used_memory: 0,
    memory_info: 1
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`/ci/${endpoint}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResource(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await fetch(`/res/resourceUS`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResources2(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 5000);
    // 컴포넌트가 언마운트될 때 인터벌 제거
    return () => clearInterval(interval);
  }, [endpoint]);

  useEffect(() => {
    const interval = setInterval(fetchData2, 1000);
    // 컴포넌트가 언마운트될 때 인터벌 제거
    return () => clearInterval(interval);
  }, []);

  const renderProgressCircle = (size, label, used, total, location) => {
    const angle = (used / total) * 360;
    return (
      <Tooltip title={`${label} (${location}): ${Math.round((used / total) * 100)}%`} arrow>
        <Box
          sx={{
            position: 'relative',
            width: `${size}px`,
            height: `${size}px`,
            marginRight: '100px',
            marginLeft: '10px'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" sx={{ color: '#4cceac', fontWeight: 'bold' }}>
              {label}
            </Typography>
            <Typography variant="body2" sx={{ color: '#4cceac', fontWeight: 'bold' }}>
              Used: {used}
            </Typography>
            {(label === 'Epoch' || label === 'CPU' || label === 'GPU' || label === 'Memory') && (
              <Typography variant="body2" sx={{ color: '#4cceac', fontWeight: 'bold' }}>
                {label === 'Epoch' ? `${resource.epoch} / ${resource.total_epoch}` : ''}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
              conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
              ${colors.greenAccent[500]}`,
              borderRadius: '50%',
              width: '100%',
              height: '100%'
            }}
          />
        </Box>
      </Tooltip>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // 수평 중앙 정렬
        alignItems: 'center', // 수직 중앙 정렬
        textAlign: 'left',
        marginTop: '30px',
        padding: '20px',
        borderRadius: '2px',
        backgroundColor: theme.palette.mode === 'dark' ? '#1F2A40' : '#F2F2F2',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000'
        // border: '1px solid'
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        {renderProgressCircle(170, 'CPU', resources2.cpu, 100.0, locationName)} {/* 크게 표시 */}
        {renderProgressCircle(170, 'GPU', resources2.gpu, 100.0, locationName)} {/* 크게 표시 */}
        {renderProgressCircle(
          170,
          'Memory',
          resources2.used_memory,
          resources2.memory_info,
          locationName
        )}{' '}
        {/* 크게 표시 */}
        {renderProgressCircle(
          170,
          'Epoch',
          resource.epoch,
          resource.total_epoch,
          locationName
        )}{' '}
        {/* 크게 표시 */}
      </Box>
    </div>
  );
};

export default MapProgressCircle;
