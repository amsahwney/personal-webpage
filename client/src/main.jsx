import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './components/Homepage.jsx'
import Landing from './components/Landing.jsx'
import About from './components/About.jsx'


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
      }
    ]
  }
]

const router = createBrowserRouter(routes)
createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)


//ADDITIONAL ROUTES TO ADD
      // ,{
      //   path: "gallery",
      //   element: <Gallery />
      // },
      // {
      //   path: "gallery/:id",
      //   element: <Artpieces />
      // },
      // {
      //   path: "letters",
      //   element: <LetterForm/>
      // }

//Routes for admin? Receiving letters page. 