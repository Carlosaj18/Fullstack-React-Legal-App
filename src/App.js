import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProviderContext } from "./Contexto/CartProviderContext";
import { ArrayDataProviderContext } from "./Contexto/ArrayDataProviderContext";
import Hamburger from "./components/Hamburger/Hamburger";
import NavSideBar from "./components/NavSideBar/NavSideBar";
import NavBar from "./components/NavBar/NavBar";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import LayoutHome from "./components/LayoutHome/LayoutHome";
import LayoutTemplates from "./components/LayoutTemplates/LayoutTemplates";
import LayoutMyDocuments from "./components/LayoutMyDocuments/LayoutMyDocuments";
import LayoutServices from "./components/LayoutServices/LayoutServices";
import ServicioDetailContainer from "./components/ServicioDetailContainer/ServicioDetailContainer";
import DocumentDetailContainer from "./components/DocumentDetailContainer/DocumentDetailContainer";
import ItemCategoryContainer from "./components/ItemCategoryContainer/ItemCategoryContainer";
import ContainerShoppingCart from "./components/ContainerShoppingCart/ContainerShoppingCart";
import ContainerCheckout from "./components/ContainerCheckout/ContainerCheckout";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import PreviewCart from "./components/PreviewCart/PreviewCart";
import userImg from "./images/userimg.jpg";
import "./App.css";

function App() {
  const [filterText, setFilterText] = useState("");
  const [buttonFilter, setButtonFilter] = useState(false);
  const [previewCartWidget, setPreviewCartWidget] = useState(false);
  const [notificationWidget, setNotificationWidget] = useState(false);
  const user = {
    name: "Carlos Jaramillo",
    imageUrl: userImg,
    imageSize: 60,
  };

  return (
    <ArrayDataProviderContext>
      <CartProviderContext>
        <BrowserRouter>
          <div className="container">
            <Hamburger />
            <NavSideBar />
            <main>
              <header>
                <NavBar
                  notificationWidget={notificationWidget}
                  setNotificationWidget={setNotificationWidget}
                  previewCartWidget={previewCartWidget}
                  setPreviewCartWidget={setPreviewCartWidget}
                  buttonFilter={buttonFilter}
                  setButtonFilter={setButtonFilter}
                  setFilterText={setFilterText}
                  filterText={filterText}
                  user={user}
                />
              </header>
              <HeaderContainer title={`Hi, ${user.name}`} />
              <Routes>
                <Route
                  path="/"
                  element={
                    <LayoutHome
                      documentTitle={filterText}
                      buttonFilter={buttonFilter}
                    />
                  }
                />
                <Route
                  path="/document/my-documents"
                  element={
                    <LayoutMyDocuments
                      documentTitle={filterText}
                      buttonFilter={buttonFilter}
                    />
                  }
                />
                <Route
                  path="/service/my-services"
                  element={<LayoutServices documentTitle={filterText} />}
                />
                <Route
                  path="/my-templates"
                  element={
                    <LayoutTemplates
                      documentTitle={filterText}
                      buttonFilter={buttonFilter}
                    />
                  }
                />
                <Route path="/law-upgrade" />
                <Route path="/dashboard" />

                {/** Detal View */}
                <Route
                  path="/document/detail/:id"
                  element={<DocumentDetailContainer />}
                />
                <Route
                  path="/document/category/detail/:id"
                  element={<DocumentDetailContainer />}
                />
                <Route
                  path="/service/detail/:id"
                  element={<ServicioDetailContainer />}
                />
                <Route
                  path="/document/category/:categoryId"
                  element={<ItemCategoryContainer />}
                  documentTitle={filterText}
                  buttonFilter={buttonFilter}
                />
                <Route
                  path="/document/category"
                  documentTitle={filterText}
                  buttonFilter={buttonFilter}
                  element={<ItemCategoryContainer />}
                />
                <Route
                  path="/orderDetail/:orderId"
                  element={
                    <OrderDetail
                      documentTitle={filterText}
                      buttonFilter={buttonFilter}
                    />
                  }
                />

                <Route
                  path="/shoping-cart"
                  element={<ContainerShoppingCart />}
                />
                <Route path="/checkout" element={<ContainerCheckout />} />
                <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
              </Routes>
              <PreviewCart
                previewCartWidget={previewCartWidget}
                setPreviewCartWidget={setPreviewCartWidget}
              />
            </main>
          </div>
          <div
            className={previewCartWidget ? "overlay active" : "overlay"}
          ></div>
        </BrowserRouter>
      </CartProviderContext>
    </ArrayDataProviderContext>
  );
}

export default App;
