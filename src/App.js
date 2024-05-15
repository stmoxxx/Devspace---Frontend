import Header from "./components/header/Header";
import './styles/globalStyle.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PostItem from "./components/post/PostItem";
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <PostItem/>
        </BrowserRouter>
    );
}

export default App;
