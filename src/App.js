import { Route, Routes } from "react-router-dom";
import { Profile } from "./page/Profile";
import { Board } from "./page/Board";
import Index from "./page/Index";
import NotFound from "./page/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
