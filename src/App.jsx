import Header from "./header/header.jsx";
import Home from "./homePage-main/main_page_body.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stories from "./stories/stories.jsx";
function App() {


  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
