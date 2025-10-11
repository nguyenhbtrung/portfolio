import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from './theme'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import MainLayout from './pages/MainLayout'

export default function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' ? true : false);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode ? true : false);
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />} >
              <Route index element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>

      {/* 🔔 Toastify Config */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme={theme.palette.mode === 'dark' ? 'dark' : 'light'}
        toastStyle={{
          borderRadius: '10px',
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0 4px 12px rgba(255,255,255,0.1)'
              : '0 4px 12px rgba(0,0,0,0.1)',
        }}
      />
    </ThemeProvider>
  )
}
