import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";
import { Create_account } from "./pages/create_account";
import { Home } from './pages/home'
import { Login } from './pages/login'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create_account" element={<Create_account />} />
        <Route path="/feed" element={<Feed />} />
     </Routes >
    </Router>
  );
}

export default App;
