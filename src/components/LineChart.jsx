import React, { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터 fetch를 위한 비동기 함수
    const fetchData = async () => {
      try {
        const response = await fetch(`/ci/carbon-intensity`);
        const serverData = await response.json();

        // 서버 데이터를 Nivo Line Chart 형식으로 변환
        const transformedData = [
          {
            id: 'KR',
            color: tokens('dark').greenAccent[500],
            data: serverData['KR'] ? serverData['KR'].map(([time, intensity]) => ({ x: time, y: intensity })) : []
          },
          {
            id: 'UK',
            color: tokens('dark').blueAccent[500],
            data: serverData['IE'] ? serverData['IE'].map(([time, intensity]) => ({ x: time, y: intensity })) : []
          },
          {
            id: 'USA',
            color: tokens('dark').redAccent[500],
            data: serverData['US-CAL-BANC'] ? serverData['US-CAL-BANC'].map(([time, intensity]) => ({ x: time, y: intensity })) : []
          }
        ];        

        setData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100]
            }
          },
          legend: {
            text: {
              fill: colors.grey[100],
            }
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1
            },
            text: {
              fill: colors.grey[100]
            }
          }
        },
        legends: {
          text: {
            fill: colors.grey[100],
            fontSize : 14
          }
        },
        tooltip: {
          container: {
            color: colors.primary[500]
          }
        }
      }}
      colors={isDashboard ? { datum: 'color' } : { scheme: 'nivo' }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'linear', min: 0, max: 'auto' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false
      }}
      yFormat=" >-.2f"
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: [0,1,2,3,4,5,6,8,9,10,11,12,13,14,15, 16,17,18,19, 20,21,22, 23],
        legend: isDashboard ? undefined : 'Time (Hours)',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'Carbon Intensity',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={false}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
};

export default LineChart;
