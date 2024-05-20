import './styles/globalStyle.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/LoginPage/Login";
import MainPage from "./components/pages/MainPage";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
