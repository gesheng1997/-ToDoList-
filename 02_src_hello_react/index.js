//引入React核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
import App from './App';


//渲染App组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);