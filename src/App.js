import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Add from "./pages/Add";
import UpdateBook from "./pages/UpdateBook";
import {BrowserRouter, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container">
          <div className="raw">
            <div className="col-lg-8 offset-lg-2">
              <Routes>
                <Route path="/" exact element={<Main/>}></Route>
                <Route path="/add" element={<Add/>}></Route>
                <Route path="/update/:id" element={<UpdateBook/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
