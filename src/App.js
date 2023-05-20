import { MyRoutes } from "./frontend/services";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="flex">
      <MyRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
