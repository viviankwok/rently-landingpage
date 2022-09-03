import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App h-screen ">
      <NavBar />
      <div className="text-8xl logo flex justify-center pt-10">Rently</div>
      <Login />
    </div>
  );
}

export default App;
