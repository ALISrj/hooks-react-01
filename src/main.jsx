import React from "react";
import {createRoot} from 'react-dom/client'
import './index.css'

import {MainApp} from "./09-use-context/MainApp.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        <MainApp/>

    </BrowserRouter>
)
