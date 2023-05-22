import { ToastContainer } from "react-toastify";
import { MyRoutes } from "./frontend/services";
function App() {
  return (
    <div className="flex">
      <MyRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
