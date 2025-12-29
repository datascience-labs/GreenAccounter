import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';

// ResourceInfo 컴포넌트 정의
const ResourceInfo = ({ endpoint, locationName }) => {
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

  const theme = useTheme();
  const colors = theme.palette;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/res${endpoint}`);
        const data = await response.json();
        setResource(data);
      } catch (error) {
        console.error(`Error fetching resource data from ${endpoint}:`, error);
      }
    };

    // 초기 데이터 가져오기
    fetchData();

    // 5초마다 데이터 다시 가져오기
    const interval = setInterval(fetchData, 1000);

    // 컴포넌트가 언마운트될 때 인터벌 제거
    return () => clearInterval(interval);
  }, [endpoint]);

  const getMemoryUsage = () => {
    if (resource.used_memory && resource.memory_info) {
      return ((resource.used_memory / resource.memory_info) * 100).toFixed(2);
    }
    return 0;
  };

  return (
    <div className="com-info" style={{ padding: '0px', marginLeft: '0px' }}>
      <h4 style={{ marginLeft: '20px', fontWeight: '600' }}> Hardware usage in {locationName} </h4>
      <hr style={{ border: 'none', height: '2.5px', backgroundColor: '#939393', width: '100%' }} />

      {/* <div className="transaction-item" style={{ display: 'flex', fontWeight: '400' }}> */}
      <div className="transaction-item" style={{ display: 'flex' }}>
        <div style={{ marginLeft: '20px' }}>CPU Used :</div>
        <div>{resource.cpu}%</div>
      </div>
      <hr
        style={{
          border: 'none',
          height: '1px',
          backgroundColor: '#939393',
          width: '100%',
          opacity: 0.5
        }}
      />

      <div className="transaction-item" style={{ display: 'flex' }}>
        <div style={{ marginLeft: '20px' }}>GPU Used : </div>
        <div>{resource.gpu}%</div>
      </div>
      <hr
        style={{
          border: 'none',
          height: '1px',
          backgroundColor: '#939393',
          width: '100%',
          opacity: 0.5
        }}
      />

      <div className="transaction-item" style={{ display: 'flex' }}>
        <div style={{ marginLeft: '20px' }}>Memory Used : </div>
        <div>{getMemoryUsage()} %</div>
      </div>
      <hr
        style={{
          border: 'none',
          height: '1px',
          backgroundColor: '#939393',
          width: '100%',
          opacity: 0.5
        }}
      />

      <div className="transaction-item" style={{ display: 'flex' }}>
        <div style={{ marginLeft: '20px' }}>CPU Info : </div>
        <div>{resource.cpu_info}</div>
      </div>
      <hr
        style={{
          border: 'none',
          height: '1px',
          backgroundColor: '#939393',
          width: '100%',
          opacity: 0.5
        }}
      />

      <div className="transaction-item" style={{ display: 'flex' }}>
        <div style={{ marginLeft: '20px' }}>GPU Info : </div>
        <div>{resource.gpu_info}</div>
      </div>
      <hr
        style={{
          border: 'none',
          height: '1px',
          backgroundColor: '#939393',
          width: '100%',
          opacity: 0.5
        }}
      />

      <div className="transaction-item" style={{ display: 'flex' }}>
        <div style={{ marginLeft: '20px' }}>CI : </div>
        <div>{resource.CI} gCO2eq/kWh</div>
      </div>
      {/* <hr style={{ border: 'none', height: '1px', backgroundColor: '#939393', width: '100%' }} /> */}
    </div>
  );
};

export default ResourceInfo;
