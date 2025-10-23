import React, { useState, useEffect } from 'react';

const Train = ({ endpoint, locationName }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState();
  const [error, setError] = useState('');
  const [pwd, setPwd] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ command: input })
      });

      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다');
      }

      const data = await response.json();
      setOutput(data.output);
      setInput('');
      setError('');
      fetchData();
    } catch (err) {
      console.error('에러:', err);
      setOutput('');
      setError('명령을 실행하는 동안 오류가 발생했습니다.');
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/pwd${locationName}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('네트워크 응답에 문제가 있습니다.');
      }

      const result = await response.json(); // 서버에서 JSON 응답이 올 경우
      setPwd(result.output);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // 컴포넌트가 렌더링될 때 fetchData 호출
    fetchData();
  }, []);

  return (
    <div className="terminal-container">
      {/* <span className="resource-label">{locationName} terminal </span> */}
      <form onSubmit={handleSubmit}>
      <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ccc',
            borderRadius: '4px',
            marginRight: '10px',
            marginTop: '20px',
            backgroundColor: '#181830',
            color: 'white',
            fontFamily: 'Courier New, Courier, monospace',
            boxSizing: 'border-box',
            width: '100%',
            maxWidth: '1000px',
          }}
        >
          {/* pwd 텍스트는 input 밖에서 보여줌 */}
          <span>{`$${pwd}`}</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            // placeholder={'Please enter the command'}
            required
            className="terminal-input"
            style={{
              padding: '10px',
              fontSize: '16px',
              backgroundColor: '#181830',
              color: 'white',
              fontFamily: 'Courier New, Courier, monospace',
              border: 'none',
              outline: 'none',
              flexGrow: 1,
            }}
          />
        </div>
        <button type="submit" className="execute-btn" hidden>
          Execute
        </button>
      </form>
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

export default Train;
