import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Hamburger from "./components/Hamburger/Hamburger";
import NavSideBar from "./components/NavSideBar/NavSideBar";
import NavBar from "./components/NavBar/NavBar";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCategoryContainer from "./components/ItemCategoryContainer/ItemCategoryContainer";
import SideBar from "./components/SideBar/SideBar";
import DocumentDetailContainer from "./components/DocumentDetailContainer/DocumentDetailContainer";

function App() {
  const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
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
            <Route path="/" element={<ItemListContainer data={data}/>} />
            <Route
              path="/document/detail/:id"
              element={<DocumentDetailContainer />}
            />
            <Route
              path="/document/category"
              element={<ItemCategoryContainer />}
            />
            {/**  <Route path="/document/category/:categoryId" element={<ItemCategoryContainer />} /> */}
            <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
          </Routes>
          <SideBar />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
