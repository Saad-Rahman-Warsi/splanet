import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import PageHeader from "./PageHeader";
import ContactUs from "./ContactUs";
import BookLearn from "./BookLearn";
import BookSample from "./BookSample";
import BookLabUse from "./BookLabUse";
import Chatbot from "./Chatbot";

function AppRouter(props) {
  return (
    
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<PageHeader rflag={props.rflag} setRFlag={props.setRFlag}/>}>
          <Route index element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs rflag={props.rflag} setRFlag={props.setRFlag}/>} />
          <Route exact path="/Facilities" element={<Facilities rflag={props.rflag} setRFlag={props.setRFlag}/>} />
          <Route exact path="/BookLabUse" element={<BookLabUse rflag={props.rflag} setRFlag={props.setRFlag}/>} />
          <Route exact path="/BookLearn" element={<BookLearn rflag={props.rflag} setRFlag={props.setRFlag}/>} />
          <Route exact path="/BookSample" element={<BookSample rflag={props.rflag} setRFlag={props.setRFlag}/>} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/Chatbot" element={<Chatbot rflag={props.rflag} setRFlag={props.setRFlag}/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;