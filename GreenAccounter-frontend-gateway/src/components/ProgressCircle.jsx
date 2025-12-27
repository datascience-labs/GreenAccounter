import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, Tooltip } from '@mui/material';
import { tokens } from '../theme';

const ProgressCircle = ({ endpoint, locationName }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [resource, setResource] = useState({
    cpu: 0,
    gpu: 0,
    used_memory: 0,
    memory_info: 1,
    cpu_info: 'Loading...',
    gpu_info: 'Loading...',
    CI: 'Loading...',
    carbon_emission: 0
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`/res${endpoint}`);
      // console.error(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResource(data);
    } catch (error) {
      console.error(endpoint);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 1000);

    // 컴포넌트가 언마운트될 때 인터벌 제거
    return () => clearInterval(interval);
  }, [endpoint]);

  const renderProgressCircle = (size, label, used, total, location) => {
    const angle = (used / total) * 360;
    return (
      <Tooltip title={`${label} (${location}): ${Math.round((used / total) * 100)}%`} arrow>
        <Box
          sx={{
            position: 'relative',
            width: `${size}px`,
            height: `${size}px`,
            margin: '10px'
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
    <Box display="flex" justifyContent="center" alignItems="center">
      {renderProgressCircle(100, 'CPU', resource.cpu, 100.0, locationName)}
      {renderProgressCircle(100, 'GPU', resource.gpu, 100.0, locationName)}
      {renderProgressCircle(
        100,
        'Memory',
        resource.used_memory,
        resource.memory_info,
        locationName
      )}
    </Box>
  );
};

export default ProgressCircle;
