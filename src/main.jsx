import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roote from './components/Roote/Roote.jsx';
import ErrorPage from './components/Pages/ErrorPage.jsx';
import Home from './components/Pages/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesRead from './components/PagesRead/PagesRead.jsx';
import BookDetails from './components/Books/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Roote></Roote>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listed',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pages',
        element:<PagesRead></PagesRead>
      },{
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader: ()=> fetch('../public/books.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
