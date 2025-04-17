import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HooksApp} from "./HooksApp.jsx";
import {CounterApp} from "./01-useState/CounterApp.jsx";
import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook.jsx";
import {SimpleForm} from "./02-useEffect/SimpleForm.jsx";
import {FormWithCustomHook} from "./02-useEffect/FormWithCustomHook.jsx";
import {MultipleCustomHooks} from "./03-examples/MultipleCustomHooks.jsx";
import {FocusScreen} from "./04-useRef/FocusScreen.jsx";
import {Layout} from "./05-useLayoutEffect/Layout.jsx";
import {Memorize} from "./06-memos/Memorize.jsx";
import {MemoHook} from "./06-memos/MemoHook.jsx";
import {CallBackHook} from "./06-memos/CallBackHook.jsx";
import {Padre} from "./07-tarea-memo/Padre.jsx";

// import './08-useReducer/intro-reducer.js'
import {TodoApp} from "./08-useReducer/TodoApp.jsx";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <TodoApp />
  // </StrictMode>,
)
