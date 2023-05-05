import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LottoGenerator from './LottoGenerator/LottoGenerator';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LottoGenerator />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;