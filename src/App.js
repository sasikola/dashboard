import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
