import {} from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
// import Loader from "./components/ui/Loader";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/home";
import Challenges from "./pages/challenges";
import CreateChallenge from "./pages/challenges/create";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/new" element={<CreateChallenge />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
