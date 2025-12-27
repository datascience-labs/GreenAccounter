import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Train from './Training';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CloudUsageChart = ({ region }) => {
  // 데이터셋을 파라미터에 따라 설정
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let data;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  if (region === "US") {
    data = {
      labels: ['09:00', '', '11:00', '', '13:00', '', '15:00', '', '17:00', '', '19:00', '', '21:00', '', '23:00'],
      datasets: [
        {
          label: 'CO2e (metric tons) / Demo environment (mock data).',
          data: [0.822, 0.735, 1.27, 0.762, 0.742, 0.809, 0.774, 0.753, 0.804, 0.792, 0.757, 0.749, 1.01, 1.10, 1.21],
          borderColor: tokens('dark').redAccent[500],
          backgroundColor: tokens('dark').redAccent[100],
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
        min:0.6,
        max:1.4
    };
  } else if (region === "UK") {
    data = {
      labels: ['09:00', '', '11:00', '', '13:00', '', '15:00', '', '17:00', '', '19:00', '', '21:00', '', '23:00'],
      datasets: [
        {
          label: 'CO2e (metric tons) / Demo environment (mock data).',
          data: [2.253, 2.209, 1.531, 2.323, 2.256, 2.216, 2.096, 2.029, 2.202, 2.163, 2.043, 2.017, 1.978, 1.922, 2.401],
          borderColor: tokens('dark').blueAccent[500],
          backgroundColor: tokens('dark').blueAccent[100],
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    min:1.4,
    max:2.6
    };
  } else if (region === "KR") {
    data = {
      labels: ['09:00', '', '11:00', '', '13:00', '', '15:00', '', '17:00', '', '19:00', '', '21:00', '', '23:00'],
      datasets: [
        {
          label: 'CO2e (metric tons) / Demo environment (mock data).',
          data: [1.244, 1.128, 1.254, 1.17, 1.145, 1.23, 1.185, 1.16, 1.225, 1.21, 1.165, 1.155, 1.14, 1.12, 1.3],
          borderColor: tokens('dark').greenAccent[500],
          backgroundColor: tokens('dark').greenAccent[100],
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    min:0.6,
    max:1.6
    };
  } else {
    // 기본 데이터셋 또는 예외 처리
    data = {
      labels: ['Mar 02,,', 'Apr 02,,', 'May 02,,', 'Jun 02,,', 'Jul 02,,', 'Aug 02,,', 'Sep 02,,', 'Oct 02,,', 'Nov 02,,', 'Dec 02,,', 'Jan 02,,', 'Feb 02,,', 'Mar 02,,', 'Apr 02,,', 'May 02,,'],
      datasets: [
        {
          label: 'CO2e (metric tons)',
          data: [1.044, 0.928, 1.054, 0.97, 0.945, 1.03, 0.985, 0.96, 1.025, 1.01, 0.965, 0.955, 0.94, 0.92, 1.1],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    min:0.8,
    max:1.4
    };
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Aug 21, 2024',
        },
      },
      y: {
        title: {
          display: true,
          text: 'CO2e (metric tons)',
        },
        min: data.min,
        max: data.max,  // Y축 최대값을 1.5로 설정하여 KR 데이터를 포함하도록 확장
      },
    },
  };
  return (
    <div>
      <Box justifyContent="center" alignItems="center" position="relative" width="100%" height="100%" maxHeight="225px">
        {/* 타이틀과 버튼을 같은 줄에 배치하기 위해 Flex 사용 */}
        <Box display="flex" justifyContent="space-between" alignItems="center" >
          <Box>
            <h2>{region} Carbon-Emission</h2>
          </Box>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Terminal Connection
          </Button>
        </Box>
        <Line data={data} options={options} />
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth >
          <DialogTitle>{region} Terminal</DialogTitle>
          <DialogContent>
            <Train endpoint={`ssh${region}`} locationName={region} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
  // return <Line data={data} options={options} />;
};

export default CloudUsageChart;
