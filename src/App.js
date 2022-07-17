import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home/Home";
import { Footer, Header } from "@components/organisms";

function App() {
  return (
    <div>
      <Header />

      <main className="mt-24">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
