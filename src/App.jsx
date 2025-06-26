import ChatbotComponent from "./Components/Chatbot/ChatbotComponents";
import AboutPage from "./Pages/AboutPage";
import Contact from "./Pages/Contact";
import Cources from "./Pages/Cources";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App =() =>{
  return(
    <div>
   <Router>
    <Routes>
        <Route path="/"element={<HomePage/>}/>
        <Route path="/about"element={<AboutPage/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/cources"element={<Cources/>}/>
      
    </Routes>
   </Router>
   <ChatbotComponent/>
    </div>
  )
}
export default App;