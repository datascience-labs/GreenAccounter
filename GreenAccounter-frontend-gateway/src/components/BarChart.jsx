import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const usData = [0.822, 0.735, 1.27, 0.762, 0.742, 0.809, 0.774, 0.753, 0.804, 0.792, 0.757, 0.749, 1.01, 1.10, 1.21];
  const ukData = [2.253, 2.209, 1.531, 2.323, 2.256, 2.216, 2.096, 2.029, 2.202, 2.163, 2.043, 2.017, 1.978, 1.922, 2.401];
  const krData = [1.244, 1.128, 1.254, 1.17, 1.145, 1.23, 1.185, 1.16, 1.225, 1.21, 1.165, 1.155, 1.14, 1.12, 1.3];

  const summedData = usData.map((value, index) => value + ukData[index] + krData[index]);
  const data = {
    labels: ['09:00', '', '11:00', '', '13:00', '', '15:00', '', '17:00', '', '19:00', '', '21:00', '', '23:00'],
    datasets: [
      {
        label: 'US - CO2e (metric tons)',
        data: usData,
        borderColor: tokens('dark').redAccent[500],
        backgroundColor: tokens('dark').redAccent[100],
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'UK - CO2e (metric tons)',
        data: ukData,
        borderColor: tokens('dark').blueAccent[500],
        backgroundColor: tokens('dark').blueAccent[100],
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'KR - CO2e (metric tons)',
        data: krData,
        borderColor: tokens('dark').greenAccent[500],
        backgroundColor: tokens('dark').greenAccent[100],
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Total CO2e (metric tons)',
        data: summedData,
        borderColor: '#8E44AD', // Purple color
        backgroundColor: '#D2B4DE',
        fill: true,
        tension: 0.4,
        pointRadius: 7,
        pointHoverRadius: 10,
      },
    ]
  };

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
      min: 0.6,
      max: 5.0, // Y축 최대값을 UK 데이터에 맞춰 확장
    },
  },
};

return (
  <div
    style={{
      backgroundColor: '#F0F0F0', // Background color similar to the image
      padding: '20px', // Optional padding for spacing
      borderRadius: '8px', // Optional rounded corners
      width: '90%'
    }}
  >
    <Box 
      position="relative" 
      width="100%"  // 너비 조정
      height="50%"  // 높이 조정
    >
      {/* 타이틀만 표시 */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* <Box>
          <h2>Carbon Emission for US, UK, KR</h2>
        </Box> */}
      </Box>
      <Line data={data} options={options} />
    </Box>
  </div>
);

};

export default BarChart;
