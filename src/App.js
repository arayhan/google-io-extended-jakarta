import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "@pages/Home/Home";
import Speakers from "@pages/Speakers/Speakers";
import { Footer, Header } from "@components/organisms";

function App() {
  return (
    <div>
      <Header />

      <main className="mt-24">
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<Home />}
          />
          <Route
            path={ROUTES.SPEAKERS}
            element={<Speakers />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
