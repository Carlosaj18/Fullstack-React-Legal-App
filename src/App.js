import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hamburger from "./components/Hamburger/Hamburger";
import NavSideBar from "./components/NavSideBar/NavSideBar";
import NavBar from "./components/NavBar/NavBar";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import ItemCategoryContainer from "./components/ItemCategoryContainer/ItemCategoryContainer";
import DocumentDetailContainer from "./components/DocumentDetailContainer/DocumentDetailContainer";
import LayoutHome from "./components/LayoutHome/LayoutHome";
import LayoutMyDocuments from "./components/LayoutMyDocuments/LayoutMyDocuments";
import LayoutServices from "./components/LayoutServices/LayoutServices";
import ServicioDetailContainer from "./components/ServicioDetailContainer/ServicioDetailContainer";
import PreviewCart from "./components/PreviewCart/PreviewCart";

function App() {
  const [filterText, setFilterText] = useState("");
  const [buttonFilter, setButtonFilter] = useState(false);
  const [previewCart, setPreviewCart] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const contexto = createContext([]);
  const Provider = contexto.Provider;

  /*let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }*/

  return (
    <Provider value={{ cart: [] }}>
      <BrowserRouter>
        <div className="container">
          <Hamburger />
          <NavSideBar />
          <main>
            <header>
              <NavBar
                previewCart={previewCart}
                setPreviewCart={setPreviewCart}
                buttonFilter={buttonFilter}
                setButtonFilter={setButtonFilter}
                onFilterTextChange={setFilterText}
                filterText={filterText}
              />
            </header>
            <HeaderContainer title="Hi, Carlos" />
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
              {/** Detal View */}
              <Route
                path="/service/detail/:id"
                element={<ServicioDetailContainer />}
              />
              <Route
                path="/document/detail/:id"
                element={<DocumentDetailContainer />}
              />
              <Route
                path="/document/category/:categoryId"
                element={<ItemCategoryContainer />}
              />
              <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
            </Routes>
            <PreviewCart
              previewCart={previewCart}
              setPreviewCart={setPreviewCart}
            />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export {contexto} ;
export default App;
