import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hamburger from "./components/Hamburger/Hamburger";
import NavSideBar from "./components/NavSideBar/NavSideBar";
import NavBar from "./components/NavBar/NavBar";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import ItemCategoryContainer from "./components/ItemCategoryContainer/ItemCategoryContainer";
import DocumentDetailContainer from "./components/DocumentDetailContainer/DocumentDetailContainer";
import LayoutHome from './components/LayoutHome/LayoutHome';
import LayoutMyDocuments from './components/LayoutMyDocuments/LayoutMyDocuments'
import LayoutServices from "./components/LayoutServices/LayoutServices";
import ServicioDetailContainer from "./components/ServicioDetailContainer/ServicioDetailContainer"

function App() {
  const [searchDocumentTitle, setSearchDocumentTitle] = useState("");

  const childToParent = (childdata) => {
    setSearchDocumentTitle(childdata);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Hamburger />
        <NavSideBar />
        <main>
          <header>
            <NavBar childToParent={childToParent}/>
          </header>
          <HeaderContainer title="Hi, Carlos" />
          <Routes>
            <Route path="/" element={<LayoutHome documentTitle={searchDocumentTitle}/>} />
            <Route path="/document/my-documents" element={<LayoutMyDocuments documentTitle={searchDocumentTitle}/>} />
            <Route path="/service/my-services" element={<LayoutServices documentTitle={searchDocumentTitle}/>} />

            {/** Detal View */}
            <Route path="/service/detail/:id" element={<ServicioDetailContainer />} />
            <Route path="/document/detail/:id" element={<DocumentDetailContainer />} />
            <Route path="/document/category/:categoryId" element={<ItemCategoryContainer />} /> 
            <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
