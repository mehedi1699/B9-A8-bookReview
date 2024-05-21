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
import ReadBooks from './components/read&wish/ReadBooks.jsx';
import WishList from './components/read&wish/WishList.jsx';
import BookDetails from './components/Books/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Roote></Roote>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        
      },
      {
        path:'/listed',
        loader: ()=> fetch('https://raw.githubusercontent.com/mehedi1699/B9-A8-bookReview/main/public/books.json'),
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>,
            loader: ()=> fetch('https://raw.githubusercontent.com/mehedi1699/B9-A8-bookReview/main/public/books.json')
          },
          {
            path:'wish-list',
            element:<WishList></WishList>
          }
        ]
        
      },
      {
        path:'/pages',
        element:<PagesRead></PagesRead>
      },
      {
        path:`/book/:id`,
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/books.json')
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
