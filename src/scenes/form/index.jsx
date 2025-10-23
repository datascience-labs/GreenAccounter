import React, {useState} from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';

// import googleImage from './Google.png';
// import googleImage from '../../../public/assets/Google.png';
// import googleImage from '../../assets/Google.png';
// import naverImage from '../../assets/naver.png';

// 유효성 검사 스키마
const loginSchema = yup.object().shape({
  id: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

const initialValues = {
  id: '',
  password: '',
};

const Form = ({ onLogin }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate();
  const [csvData, setCsvData] = React.useState(null);
  const [fetchError, setFetchError] = React.useState(false);
  const [csvError, setCsvError] = React.useState(false);

  const handleFormSubmit = (values) => {
    // ID와 비밀번호가 'admin'인 경우 CSV 체크를 건너뛰도록 함
    if (values.id !== 'admin' || values.password !== 'dsl!@#') {
      if (!csvData) {
        setCsvError(true);
        return;
      }
    }

    // 로그인 성공 후 리디렉션
    onLogin();
    navigate('/');
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvText = e.target.result;
      try {
        const parsedData = parseCSV(csvText);
        setCsvData(parsedData);
        setFetchError(false);
        setCsvError(false);
      } catch (error) {
        console.error('Error parsing CSV file:', error);
        setFetchError(true);
      }
    };

    reader.onerror = () => {
      console.error('Error reading CSV file');
      setFetchError(true);
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  const parseCSV = (text) => {
    const lines = text.split('\n');
    const headers = lines[0].split(',');
    const data = lines.slice(1).map((line) => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index] || null; // 값이 없을 경우 기본값으로 null 설정
        return obj;
      }, {});
    });
    return data;
  };
  

return (
  <Box
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    bgcolor="#0f1e3c"
  >
    <Box
      p="40px"
      maxWidth="400px"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
      bgcolor="white"
    >
      <Header title="Welcome!" subtitle="Login or Create New Account" />

{/*       
      <Box display="flex" justifyContent="center" mb="20px">
        <Button variant="outlined" sx={{ mr: 2 }}>
          
          <img
            src={`../../assets/Google.png`}  
            alt="Google"
            style={{ width: '24px', marginRight: '6px' }}  
          />
          Google
        </Button>
        <Button variant="outlined">
        
          <img
            src={`../../assets/naver.png`}  
            alt="Naver"
            style={{ width: '24px', marginRight: '8px' }}  
          />
          Naver
        </Button>
      </Box> */}

      
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.id}
                name="id"
                error={!!touched.id && !!errors.id}
                helperText={touched.id && errors.id}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            {csvError && (
              <Box mt={2} color="error.main">
                CSV 파일을 업로드해주세요.
              </Box>
            )}
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt="20px">
              <Button type="submit" color="primary" variant="contained" sx={{ mb: 2, width: '150px' }}>
                Sign In
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                onClick={handleClickOpen}
                sx={{ mb: 2, width: '150px' }}
              >
                Sign Up
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      {/* CSV 파일 업로드 */}
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        id="csv-input"
      />
      <label htmlFor="csv-input">
        {/* <Button
          color="secondary"
          variant="contained"
          component="span"
          style={{ marginTop: '30px' }}
        >
          Input CSV
        </Button> */}
      </label>
      {fetchError && (
        <Box mt={3}>
          <h2>Failed to parse CSV data.</h2>
          <p>Please check the file format and try again.</p>
        </Box>
      )}
      {csvData && !fetchError && (
        <Box mt={3}>
          <h2>CSV Data:</h2>
          <pre>{JSON.stringify(csvData, null, 2)}</pre>
        </Box>
      )}
    </Box>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-us-dialog-title"
        aria-describedby="contact-us-dialog-description"
        fullWidth >
        <DialogContent>
          <Typography variant="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" component="span" color="primary">해당 계정은 구매한 사람만 이용할 수 있는 서비스입니다. </Typography><br></br>
          <Typography variant="h6" component="span" color="primary">구매를 원하시는 경우 penguins.saver@gmail.com로 문의 주시길 바랍니다.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  </Box>
);
};

export default Form;
