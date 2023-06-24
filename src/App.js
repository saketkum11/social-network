import { Header, MyRoutes } from "./frontend/services";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <MyRoutes />
    </div>
  );
}

export default App;
