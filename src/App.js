import { ToastContainer } from "react-toastify";
import { Header, MyRoutes } from "./frontend/services";
function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <MyRoutes />
    </div>
  );
}

export default App;
