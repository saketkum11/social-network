import { ToastContainer } from "react-toastify";
import { Header, MyRoutes } from "./frontend/services";
function App() {
  return (
    <div>
      <Header />
      <MyRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
