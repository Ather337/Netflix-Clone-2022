import AddStudent from "./pages/addStudent";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";

import "./App.css";
import "./assets/css/variables.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App py-3">
      <Header />
      <AddStudent />
      <Footer />
    </div>
  );
}
export default App;
