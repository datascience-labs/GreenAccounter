import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Calendar from './scenes/calendar/calendar';
import Footer from "./components/Footer";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isLoggedIn && <Sidebar isSidebar={isSidebar} />}
          <main className="content"
          style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
>
            {isLoggedIn && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              {/* <Route path="/form" element={<Form onLogin={handleLogin} />} /> */}
              <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/form" />} />
              <Route path="/team" element={isLoggedIn ? <Team /> : <Navigate to="/form" />} />
              <Route
                path="/contacts"
                element={isLoggedIn ? <Contacts /> : <Navigate to="/form" />}
              />
              <Route
                path="/invoices"
                element={isLoggedIn ? <Invoices /> : <Navigate to="/form" />}
              />
              <Route path="/bar" element={isLoggedIn ? <Bar /> : <Navigate to="/form" />} />
              <Route path="/pie" element={isLoggedIn ? <Pie /> : <Navigate to="/form" />} />
              <Route path="/line" element={isLoggedIn ? <Line /> : <Navigate to="/form" />} />
              <Route path="/faq" element={isLoggedIn ? <FAQ /> : <Navigate to="/form" />} />
              <Route
                path="/calendar"
                element={isLoggedIn ? <Calendar /> : <Navigate to="/form" />}
              />
              <Route
                path="/geography"
                element={isLoggedIn ? <Geography /> : <Navigate to="/form" />}
              />
            </Routes>
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// 기존코드 0711 기준

// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Topbar from './scenes/global/Topbar';
// import Sidebar from './scenes/global/Sidebar';
// import Dashboard from './scenes/dashboard';
// import Team from './scenes/team';
// import Invoices from './scenes/invoices';
// import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';

// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { ColorModeContext, useMode } from './theme';
// import Calendar from './scenes/calendar/calendar';

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/geography" element={<Geography />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;
