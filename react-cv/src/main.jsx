import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Accueil from './components/accueil/Accueil';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';

import Root from './Root';






const router = createBrowserRouter([
    {   path: "/",
        element: <Root />,
  
        children: [

            {
                path: "/accueil",
                element: <Accueil />,

            },

                            {
                    path: "/experience",
                    element: <Experience />,

                },
                {
                    path: "/portfolio",
                    element: <Portfolio />,

                },
                {
                    path: "/contact",
                    element: <Contact />,

                },
            ]
        }

        ]);

        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
            
                <RouterProvider router={router} />
            </React.StrictMode>,
        )





