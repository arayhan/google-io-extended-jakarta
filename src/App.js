import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home/Home";
import { Header } from "@components/organisms";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
