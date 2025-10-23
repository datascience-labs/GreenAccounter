import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoFeatures } from '../data/mockGeoFeatures';
import { tokens } from '../testtheme';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { scaleQuantize } from 'd3-scale';
import { scaleLinear  } from 'd3-scale';
import { interpolateHcl } from 'd3-interpolate';
import MapProgressCircle from '../components/MapProgressCircle';

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

const GeographyChart = ({ isDashboard = false }) => {
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
  const [countryData, setCountryData] = useState(null); // hover 시 보여줄 24시간 데이터

  const [learningCountry, setCountry] = useState({
    dest_region: null,
    is_learning: true,
    migration: false,
    migration_progress: false,
    region: 'US-NE-ISNE',
    region_full: 'New England ISO'
  });

  const location = useLocation();

  const transformData = (result) => {
    return Object.keys(result)
      .filter((item) => result[item].value)  // 값이 0이 아닌 항목만 남김
      .map((item) => {
        let countryId = '';
        switch (item) {
          case 'IE':
            countryId = 'IRL';
            break;
          case 'KR':
            countryId = 'KOR';
            break;
          case 'US-CAL-BANC':
            countryId = 'USA';
            break;
          default:
            countryId = item;
            break;
        }
  
        const color = ['USA', 'GBR', 'KOR'].includes(countryId) ? '#0000FF' : '#FF0000';
        return {
          id: countryId,
          value: result[item].value,
          history:result[item].history,
          full_name:result[item].full_name,
          color
        };
      });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`/ci/cur-carbon-intensity`);
      const result = await response.json();

      const transformedData = transformData(result);
      setData(transformedData);
      setFadeType('out');
      setTimeout(() => setLoading(false), 1000);
    } catch (error) {
      setData([
        { id: 'USA', value: 750000, color: '#FF0000' },
        { id: 'GBR', value: 500000, color: '#FF0000' },
        { id: 'KOR', value: 300000, color: '#FF0000' },
        ...geoFeatures.features.map((feature) => ({
          id: feature.properties.name,
          value: 400000,
          color: '#CCCCCC'
        }))
      ]);
      setFadeType('out');
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await fetch(`/ci/get_resource`);
      const result = await response.json();
      setResources(result);
    } catch (error) {
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
        case 'US-NE-ISNE':
          result.region = 'USA';
          break;
        default:
          result.region = 'USA';
          break;
      }
      setCountry(result);
      // console.log(learningCountry);
      setIsMigration(result.is_train);
      if (result.is_train) {
        setDestRegion(result.dest_region);
        toast.info(`Migration 됨. 도착지역은 ‘${result.dest_region}’ 입니다.`);
      }
    } catch (error) {
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleReloadClick = async () => {
    setLoading(true);
    setFadeType('in');
    fetchData();
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
  const colorScale = scaleQuantize()
    .domain([10, 1000])
    .range([
      '#ADFF2F', '#9ACD32', '#7CFC00', '#32CD32', '#228B22',
      '#8B4513', '#A0522D', '#D2691E', '#F4A460', '#B22222', '#8B0000'
    ]);
    const TooltipContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.8); /* 배경을 투명한 흰색으로 설정 */
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    font-size: 12px;
    color: #000;
  `;
  
  const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;   // 막대 그래프 컨테이너의 너비를 100%로 설정
`;

const Bar = styled.div`
  width: 4%; // 막대 너비
  height: ${(props) => props.height}px; // 데이터에 비례한 높이
  background-color: #3498db; // 막대 색상
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9; // 마우스 오버 시 색상 변경
  }
`;


  return (
    <>
      <GlobalStyle />
      {loading ? (
        <LoadingContainer fadeType={fadeType}>
          <CircularProgress />
          <Box ml={2}>
            <Typography variant="body1" fontSize="3rem">
              <FontAwesomeIcon icon="fa-solid fa-plane-departure" />
              Loading...🛫
            </Typography>
          </Box>
        </LoadingContainer>
      ) : (
        <ResponsiveChoropleth
          data={data}
          colors={colorScale}
          theme={{
            // background: "#f1f3f5", // background
            background: "#fff",
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100]
                }
              },
              legend: {
                text: {
                  fill: colors.grey[100]
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
                fill: colors.grey[100]
              }
            },
            tooltip: {
              container: {
                color: '#000000'
              }
            }
          }}
          features={geoFeatures.features}
          margin={{ top: 40, right: 0, bottom: 100, left: 0 }}
          domain={[0, 1000]}
          unknownColor="#BBBCB8"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={isDashboard ? 40 : 200}
          projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1.5}
          borderColor="#f8f9fa"
          tooltip={({ feature }) => (
<div>
  <strong>{feature.properties.name}</strong>
  {feature ? (
    <div>
      <TooltipContainer>
        24시간 데이터:
        {data.filter(country => country.full_name === feature.properties.name).length > 0 ? (
          <>
            {(() => {
              const filteredCountry = data.filter(
                (country) => country.full_name === feature.properties.name
              )[0];
              const values = filteredCountry.history.map(([hour, value]) => value);
              const minValue = Math.min(...values);
              const maxValue = Math.max(...values);

              // 색상 스케일 정의 (최소값은 파란색, 최대값은 빨간색)
              const colorScale = scaleLinear()
                .domain([minValue, maxValue]) // min-max 범위
                .range(['#3498db', '#e74c3c']); // 파란색 -> 빨간색으로 색상 범위 설정

              return (
                <>
                  {/* min-max 값 표시 */}
                  <br></br>
                  <span>최소값: {minValue}, 최대값: {maxValue}</span>

                  {/* Bar chart */}
                  <BarContainer>
                    {filteredCountry.history.map(([hour, value], index) => (
                      <Bar
                        key={index}
                        height={value / 10} // 데이터 값에 비례한 높이 설정
                        style={{ backgroundColor: colorScale(value) }} // 값에 따라 색상 변화
                        title={`${hour}:00 - ${value}`} // 각 막대에 시간과 값을 툴팁으로 표시
                      />
                    ))}
                  </BarContainer>
                </>
              );
            })()}
          </>
        ) : (
          '데이터 없음'
        )}
      </TooltipContainer>
    </div>
  ) : (
    <p>데이터 로딩 중...</p>
  )}
</div>



          )}
          fill={[
            {
              match: {
                id: learningCountry.region // 학습 중인 지역의 id와 일치
              },
              id: 'dots'
            }
          ]}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#000000',
              size: 4,
              padding: 1,
              stagger: true
            }
          ]}
          legends={
            !isDashboard
              ? [
                  {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: colors.grey[100],
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#000000',
                          itemOpacity: 1
                        }
                      }
                    ]
                  }
                ]
              : undefined

          }
    
        />
      )}
      
    </>
  );
};

export default GeographyChart;
