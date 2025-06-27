import { useState } from "react";
import ChatbotComponent from "./Components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./Components/DeveloperInfo/DeveloperInfoPopup";
import AboutPage from "./Pages/AboutPage";
import Contact from "./Pages/Contact";
import Cources from "./Pages/Cources";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App =() =>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Ritesh Bhuimbar"
          studentPhotoUrl="/images/ritesh.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

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
    </>
  )
}
export default App;
