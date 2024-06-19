import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ConfigPage } from './pages/ConfigPage';


function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path='' element={ConfigPage} />
      </Routes>
    </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
