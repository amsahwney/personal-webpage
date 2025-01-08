import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Landing from './Components/Landing.jsx'
import Homepage from './Components/Homepage.jsx'
import About from './Components/About.jsx'
import Gallery from './Components/Gallery.jsx'
import LetterForm from './Components/LetterForm.jsx'

const routes = [
  { 
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Landing /> 
      },
      {
        path: "home",
        element: <Homepage />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
          path: "letters",
          element: <LetterForm/>
      }

    ]
  }
]

const router = createBrowserRouter(routes)
createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)


//ADDITIONAL ROUTES TO ADD
      
      // {
      //   path: "gallery/:id",
      //   element: <Artpieces />
      // },


//Routes for admin? Receiving letters page. 