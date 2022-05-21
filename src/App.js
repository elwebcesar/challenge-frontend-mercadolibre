import React, { useState } from 'react';
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.scss';

import HeaderDoom from './components/head/HeaderDoom';
import Home from './components/Home';
import SetItem from './components/SetItem';
import SetSearch from './components/SetSearch';

export default function App() {

  const [querySearch, setQuerySearch] = useState(null)
  
  return (
    <main>
      <BrowserRouter>
        <HeaderDoom />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/items" element={<SetSearch />} />
          <Route path="/items/:id" element={<SetItem />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}