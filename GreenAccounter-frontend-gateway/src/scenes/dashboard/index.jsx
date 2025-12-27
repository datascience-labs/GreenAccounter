import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import GeographyChart from '../../components/GeographyChart';
import MainGeographyChart from '../../components/MainGeography';
import BarChart from '../../components/BarChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';
import CloudUsageChart from '../../components/CloudUsageChart';
import ResourceInfo from '../resourceInfo/resourceInfo';
import Train from '../../components/Training';
import { Link } from 'react-router-dom';

// 대시보드 파일

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDarkMode = theme.palette.mode === 'dark';
  const set_colors = isDarkMode ? colors.primary[400] : '#f1f3f5' ;
  // #f1f3f5
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          subsubtitle={
            <>
              <span style={{ fontWeight: 'bold' }}>Client Carbon Emissions Overview</span> 
            </>
          }
        />
      </Box>
      {/* GRID & CHARTS */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
        {/* ROW 1 첫번째 줄 컴포넌트들 */}
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          />
        </Box> */}
        {/* ROW 1 */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={set_colors}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              {/* <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Line Chart
              </Typography> */}
              <Typography 
                variant="h3" 
                fontWeight="bold" 
                color={colors.blueAccent[100]}
                sx={{
                  lineHeight: 1.2
                }}>
                Real-time Carbon Intensity
              </Typography>
            </Box>
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: '26px', color: colors.greenAccent[500] }} />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* 가장밑-2번째 컴포넌트 map*/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={set_colors}
          padding="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ marginBottom: '15px' }}>
            Carbon Intensity Map
          </Typography>
          <Link to="/geography">
            <button>Go to Geography Page</button>
          </Link>
          <Box height="160px" sx={{ border: '1px solid black', margin: '10px'  }}>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
        {/* ROW 2 */}
        {/* 리소스 info 자리 */}
        <Box  sx={{ 
                gridRow: 'span 2', // 1.5행부터 시작하여 1행을 span 
                gridColumn: 'span 12', 
                backgroundColor: set_colors,
                p:'30px'
              }}>
          <Typography variant="h4" fontWeight="600">
            Training Information
          </Typography>
          <hr style={{ border: 'none', height: '2.0px', backgroundColor: '#939393', width: '100%' }} />
          <MainGeographyChart></MainGeographyChart>
        </Box>


        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={set_colors}
          overflow="auto"
        >
          {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          > */}
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            {/* Resource info */}
          </Typography>
          {/* </Box> */}
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            <ResourceInfo endpoint="/resourceUS" locationName="US" />
          </Typography>
          {/* 
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                ${transaction.cost}
              </Box>
            </Box>
            
          ))} */}
        </Box>
        {/* 리소스 원형 차트 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={set_colors} p="30px">
          <Typography variant="h5" fontWeight="600">
            Resource Chart
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle endpoint="/resourceUS" locationName="US" />
            <p />
            <Typography>Currently in use</Typography>
          </Box>
        </Box>

        {/* 터미널 컴포넌트 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={set_colors}>
          <Typography variant="h5" fontWeight="600" sx={{ padding: '5px 30px 0 30px' }}>
            <CloudUsageChart region={"US"}/>
            {/* <Train endpoint={`/sshUS`} locationName={'US'} /> */}
            {/* <Train endpoint={`/sshUK`} locationName={'UK'} />
            <Train endpoint={`/sshKR`} locationName={'KR'} /> */}
          </Typography>
          <Box height="250px" mt="-20px">
            {/* <BarChart isDashboard={true} /> */}
            {/* 터미널 컴포넌트가 들어갈 자리입니다 */}
          </Box>
        </Box>

        {/* 리소스 info 자리 2*/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={set_colors}
          overflow="auto"
        >
          {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          > */}
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            {/* Resource info */}
          </Typography>
          {/* </Box> */}
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            <ResourceInfo endpoint="/resourceUK" locationName="UK" />
          </Typography>
          {/* 
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                ${transaction.cost}
              </Box>
            </Box>
            
          ))} */}
        </Box>
        {/* 리소스 원형 차트 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={set_colors} p="30px">
          <Typography variant="h5" fontWeight="600">
            Resource Chart
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle endpoint="/resourceUK" locationName="UK" />
            <p />
            <Typography>Currently in use</Typography>
          </Box>
        </Box>

        {/* 터미널 컴포넌트 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={set_colors}>
          <Typography variant="h5" fontWeight="600" sx={{ padding: '5px 30px 0 30px' }}>
            <CloudUsageChart region={"UK"}/>
            {/* <Train endpoint={`/sshUK`} locationName={'UK'} /> */}
            {/* <Train endpoint={`/sshUK`} locationName={'UK'} />
            <Train endpoint={`/sshKR`} locationName={'KR'} /> */}
          </Typography>
          <Box height="250px" mt="-20px">
            {/* <BarChart isDashboard={true} /> */}
            {/* 터미널 컴포넌트가 들어갈 자리입니다 */}
          </Box>
        </Box>

        {/* 리소스 info 자리  3번째 KR*/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={set_colors}
          overflow="auto"
        >
          {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          > */}
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            {/* Resource info */}
          </Typography>
          {/* </Box> */}
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            <ResourceInfo endpoint="/resourceKR" locationName="KR" />
          </Typography>
          {/* 
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                ${transaction.cost}
              </Box>
            </Box>
            
          ))} */}
        </Box>
        {/* 리소스 원형 차트 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={set_colors} p="30px">
          <Typography variant="h5" fontWeight="600">
            Resource Chart
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle endpoint="/resourceKR" locationName="KR" />
            <p />
            <Typography>Currently in use</Typography>
          </Box>
        </Box>

        {/* 터미널 컴포넌트 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={set_colors}>
          <Typography variant="h5" fontWeight="600" sx={{ padding: '5px 30px 0 30px' }}>
            <CloudUsageChart region={"KR"}/>
            {/* <Train endpoint={`/sshKR`} locationName={'KR'} /> */}
            {/* <Train endpoint={`/sshUK`} locationName={'UK'} />
            <Train endpoint={`/sshKR`} locationName={'KR'} /> */}
          </Typography>
          <Box height="250px" mt="-20px">
            {/* <BarChart isDashboard={true} /> */}
            {/* 터미널 컴포넌트가 들어갈 자리입니다 */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;


// import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
// import { tokens } from '../../theme';
// import { mockTransactions } from '../../data/mockData';
// import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
// import EmailIcon from '@mui/icons-material/Email';
// import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import TrafficIcon from '@mui/icons-material/Traffic';
// import Header from '../../components/Header';
// import LineChart from '../../components/LineChart';
// import GeographyChart from '../../components/GeographyChart';
// import BarChart from '../../components/BarChart';
// import StatBox from '../../components/StatBox';
// import ProgressCircle from '../../components/ProgressCircle';
// import ResourceInfo from '../resourceInfo/resourceInfo';
// import Train from '../../components/Training';
// import { Link } from 'react-router-dom';

// // 대시보드 파일

// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="DASHBOARD" subtitle="Welcome to the CcTv dashboard 😀" />

//         {/* <Box>
//           <Button
//             sx={{
//               backgroundColor: colors.blueAccent[700],
//               color: colors.grey[100],
//               fontSize: '14px',
//               fontWeight: 'bold',
//               padding: '10px 20px'
//             }}
//           >
//             <DownloadOutlinedIcon sx={{ mr: '10px' }} />
//             Download Reports
//           </Button>
//         </Box> */}
//       </Box>

//       {/* GRID & CHARTS */}
//       <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
//         {/* ROW 1 첫번째 줄 컴포넌트들 */}
//         {/* <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="12,361"
//             subtitle="Emails Sent"
//             progress="0.75"
//             increase="+14%"
//             icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="431,225"
//             subtitle="Sales Obtained"
//             progress="0.50"
//             increase="+21%"
//             icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="32,441"
//             subtitle="New Clients"
//             progress="0.30"
//             increase="+5%"
//             icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="1,325,134"
//             subtitle="Traffic Received"
//             progress="0.80"
//             increase="+43%"
//             icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
//           />
//         </Box> */}
//         {/* ROW 1 */}
//         <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
//           <Box
//             mt="25px"
//             p="0 30px"
//             display="flex "
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box>
//               <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
//                 Line Chart
//               </Typography>
//               <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
//                 carbon intensity
//               </Typography>
//             </Box>
//             {/* <Box>
//               <IconButton>
//                 <DownloadOutlinedIcon sx={{ fontSize: '26px', color: colors.greenAccent[500] }} />
//               </IconButton>
//             </Box> */}
//           </Box>
//           <Box height="250px" m="-20px 0 0 0">
//             <LineChart isDashboard={true} />
//           </Box>
//         </Box>
//         {/* 가장밑-2번째 컴포넌트 map*/}
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           padding="30px"
//         >
//           <Typography variant="h5" fontWeight="600" sx={{ marginBottom: '15px' }}>
//             Carbon Intensity Map
//           </Typography>
//           <Link to="/geography">
//             <button>Go to Geography Page</button>
//           </Link>
//           <Box height="200px">
//             <GeographyChart isDashboard={true} />
//           </Box>
//         </Box>
//         {/* ROW 2 */}
//         {/* 리소스 info 자리 */}
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           overflow="auto"
//         >
//           {/* <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom={`4px solid ${colors.primary[500]}`}
//             colors={colors.grey[100]}
//             p="15px"
//           > */}
//           <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//             {/* Resource info */}
//           </Typography>
//           {/* </Box> */}
//           <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//             <ResourceInfo endpoint="/resourceUS" locationName="US" />
//           </Typography>
//           {/* 
//           {mockTransactions.map((transaction, i) => (
//             <Box
//               key={`${transaction.txId}-${i}`}
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               borderBottom={`4px solid ${colors.primary[500]}`}
//               p="15px"
//             >
//               <Box>
//                 <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
//                   {transaction.txId}
//                 </Typography>
//                 <Typography color={colors.grey[100]}>{transaction.user}</Typography>
//               </Box>
//               <Box color={colors.grey[100]}>{transaction.date}</Box>
//               <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
//                 ${transaction.cost}
//               </Box>
//             </Box>
            
//           ))} */}
//         </Box>
//         {/* 리소스 원형 차트 */}
//         <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
//           <Typography variant="h5" fontWeight="600">
//             Resource Chart
//           </Typography>
//           <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
//             <ProgressCircle endpoint="/resourceUS" locationName="US" />
//             <p />
//             <Typography>Currently in use</Typography>
//           </Box>
//         </Box>

//         {/* 터미널 컴포넌트 */}
//         <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
//           <Typography variant="h5" fontWeight="600" sx={{ padding: '30px 30px 0 30px' }}>
//             <Train endpoint={`/sshUS`} locationName={'US'} />
//             {/* <Train endpoint={`/sshUK`} locationName={'UK'} />
//             <Train endpoint={`/sshKR`} locationName={'KR'} /> */}
//           </Typography>
//           <Box height="250px" mt="-20px">
//             {/* <BarChart isDashboard={true} /> */}
//             {/* 터미널 컴포넌트가 들어갈 자리입니다 */}
//           </Box>
//         </Box>

//         {/* 리소스 info 자리 2*/}
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           overflow="auto"
//         >
//           {/* <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom={`4px solid ${colors.primary[500]}`}
//             colors={colors.grey[100]}
//             p="15px"
//           > */}
//           <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//             {/* Resource info */}
//           </Typography>
//           {/* </Box> */}
//           <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//             <ResourceInfo endpoint="/resourceUK" locationName="UK" />
//           </Typography>
//           {/* 
//           {mockTransactions.map((transaction, i) => (
//             <Box
//               key={`${transaction.txId}-${i}`}
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               borderBottom={`4px solid ${colors.primary[500]}`}
//               p="15px"
//             >
//               <Box>
//                 <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
//                   {transaction.txId}
//                 </Typography>
//                 <Typography color={colors.grey[100]}>{transaction.user}</Typography>
//               </Box>
//               <Box color={colors.grey[100]}>{transaction.date}</Box>
//               <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
//                 ${transaction.cost}
//               </Box>
//             </Box>
            
//           ))} */}
//         </Box>
//         {/* 리소스 원형 차트 */}
//         <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
//           <Typography variant="h5" fontWeight="600">
//             Resource Chart
//           </Typography>
//           <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
//             <ProgressCircle endpoint="/resourceUK" locationName="UK" />
//             <p />
//             <Typography>Currently in use</Typography>
//           </Box>
//         </Box>

//         {/* 터미널 컴포넌트 */}
//         <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
//           <Typography variant="h5" fontWeight="600" sx={{ padding: '30px 30px 0 30px' }}>
//             <Train endpoint={`/sshUK`} locationName={'UK'} />
//             {/* <Train endpoint={`/sshUK`} locationName={'UK'} />
//             <Train endpoint={`/sshKR`} locationName={'KR'} /> */}
//           </Typography>
//           <Box height="250px" mt="-20px">
//             {/* <BarChart isDashboard={true} /> */}
//             {/* 터미널 컴포넌트가 들어갈 자리입니다 */}
//           </Box>
//         </Box>

//         {/* 리소스 info 자리  3번째 KR*/}
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           overflow="auto"
//         >
//           {/* <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom={`4px solid ${colors.primary[500]}`}
//             colors={colors.grey[100]}
//             p="15px"
//           > */}
//           <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//             {/* Resource info */}
//           </Typography>
//           {/* </Box> */}
//           <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//             <ResourceInfo endpoint="/resourceKR" locationName="KR" />
//           </Typography>
//           {/* 
//           {mockTransactions.map((transaction, i) => (
//             <Box
//               key={`${transaction.txId}-${i}`}
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               borderBottom={`4px solid ${colors.primary[500]}`}
//               p="15px"
//             >
//               <Box>
//                 <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
//                   {transaction.txId}
//                 </Typography>
//                 <Typography color={colors.grey[100]}>{transaction.user}</Typography>
//               </Box>
//               <Box color={colors.grey[100]}>{transaction.date}</Box>
//               <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
//                 ${transaction.cost}
//               </Box>
//             </Box>
            
//           ))} */}
//         </Box>
//         {/* 리소스 원형 차트 */}
//         <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
//           <Typography variant="h5" fontWeight="600">
//             Resource Chart
//           </Typography>
//           <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
//             <ProgressCircle endpoint="/resourceKR" locationName="KR" />
//             <p />
//             <Typography>Currently in use</Typography>
//           </Box>
//         </Box>

//         {/* 터미널 컴포넌트 */}
//         <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
//           <Typography variant="h5" fontWeight="600" sx={{ padding: '30px 30px 0 30px' }}>
            // <Train endpoint={`/sshKR`} locationName={'KR'} />
            // {/* <Train endpoint={`/sshUK`} locationName={'UK'} />
            // <Train endpoint={`/sshKR`} locationName={'KR'} /> */}
//           </Typography>
//           <Box height="250px" mt="-20px">
//             {/* <BarChart isDashboard={true} /> */}
//             {/* 터미널 컴포넌트가 들어갈 자리입니다 */}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;
