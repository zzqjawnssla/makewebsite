import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//npm install react-bootstrap bootstrap@5.1.3
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import NaveBar from "./component/NaveBar";
import {useState} from "react";
import PrivateRoute from "./route/PrivateRoute";


        // 전체상품페이지, 로그인, 상세페이지
      // 전체 상품 페이지에서는 전페 상품
      // 로그인 페이지에서는 로그인
      // 상품디테일을 눌렀으나 로그인이 안되어있으면 로그인페이지로
      // 로그인이 되어있으면 상품디테일 페이지로
      // 로그아웃 버튼 클릭하면 로그아웃 되면서 다시 로그인 페이지로
      // 우측상단에 로그인하면 로그인으로, 로그아웃하면 로그아웃으로
      // 상품을 검색할 수 있다.
    //json-server --watch db.json --port 5000 : 만약 실행 안되면 앞에 npx 붙여서 실행



function App() {
    const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <NaveBar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setIsLogin={ setIsLogin }/>} />
        <Route path="/product/:id" element={<PrivateRoute isLogin={ isLogin }/>} />
      </Routes>
    </div>
  );
}

export default App;
