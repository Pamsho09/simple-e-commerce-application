import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../app/home";
import Layout from "../components/layout";
import Product from "../app/product";
import Cart from "../app/cart";
import ProductForm from "../app/form-product";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        {" "}
        <Home />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },{
    path:'/product-form',
    element: (
      <Layout>
        <ProductForm />
      </Layout>
    )
  }
]);

export const RouterContainer = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
