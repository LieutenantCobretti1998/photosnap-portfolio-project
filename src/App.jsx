import Header from "./header/header.jsx";
import Home from "./homePage-main/main_page_body.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stories from "./stories/stories.jsx";
import Features from "./features/features.jsx";
import Pricing from "./pricing/pricing.jsx";
import Story from "./story/story.jsx";
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />}>
                <Route path=":story_id"
                       element={<Story />}
                />
            </Route >
            <Route path="/features" element={<Features/>} />
            <Route path="/pricing" element={<Pricing />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
