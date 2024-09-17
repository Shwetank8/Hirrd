import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from './layouts/appLayout'
import LandingPage from "./pages/landing";
import Onboarding from './pages/onboarding';
import JobListing from './pages/jobListing';
import JobPage from './pages/job';
import PostJob from './pages/postJob';
import SaveJob from './pages/saveJob';
import MyJob from './pages/myJob';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from './components/protected-route';

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children:
        [
            {
                path:'/',
                element:<LandingPage />
            },
            {
              path:'/onboarding',
              element:(
                <ProtectedRoute>
                    <Onboarding />
                </ProtectedRoute>
              ),
            },
            {
              path:'/jobs',
              element:(
                <ProtectedRoute>
                    <JobListing />
                </ProtectedRoute>
              ),
            },
            {
              path:'/job/:id',
              element:(
                <ProtectedRoute>
                    <JobPage />
                </ProtectedRoute>
              ),
            },
            {
              path:'/post-job',
              element:(
                <ProtectedRoute>
                    <PostJob />
                </ProtectedRoute>
              ),
            },
            {
              path:'/saved-jobs',
              element:(
                <ProtectedRoute>
                    <SaveJob />
                </ProtectedRoute>
              ),
            },
            {
              path:'/my-jobs',
              element:(
                <ProtectedRoute>
                    <MyJob />
                </ProtectedRoute>
              ),
            },
        ]
    }
])

export default function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme' >
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}
