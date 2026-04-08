import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorpage/ErrorPage";
import BooksDetails from "../pages/bookDetails/BooksDetails";

export const router=createBrowserRouter(
  [
    {
      path:'/',
      element: <MainLayout/>,
      children:[
        {
          index: true,
          element: <Homepage/>
        },
        {
          path: '/books',
          element: <Books/>
        },
        {
          path: '/bookDetails/:bookId',
          loader: ()=> fetch('/booksData.json'),
          element: <BooksDetails/>
        }
      ],
      errorElement: <ErrorPage/>
    }
   
  ]
)