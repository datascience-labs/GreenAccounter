import React, { useState } from 'react';
import ExecuteCommand from './ExecuteCommand';
import ResourceInfo from './ResourceInfo';
import CircleChart from './CircleChart';

const TrainSection = ({ resource, locationName }) => {
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleOutputChange = (newOutput) => {
    setOutput(newOutput);
    setError('');
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setOutput('');
  };

  const handleSubmitCommand = async (command) => {
    try {
      const response = await fetch(`/api/ssh${locationName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ command })
      });

      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다');
      }

      const data = await response.json();
      setOutput(data.output);
      setError('');
    } catch (err) {
      console.error('에러:', err);
      setOutput('');
      setError('명령을 실행하는 동안 오류가 발생했습니다.');
    }
  };

  return (
    <div className="resource-terminal">
      <ResourceInfo resource={resource} />
      <CircleChart
        data={[
          { name: 'CPU', value: resource.cpu.used / resource.cpu.total },
          { name: 'GPU', value: resource.gpu.used / resource.gpu.total },
          { name: 'Memory', value: resource.memory.used / resource.memory.total }
        ]}
      />
      <ExecuteCommand
        onSubmitCommand={handleSubmitCommand}
        onOutputChange={handleOutputChange}
        onError={handleError}
      />
      {output && (
        <div>
          <h2>Output:</h2>
          <pre>{output}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Error:</h2>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
};

export default TrainSection;
