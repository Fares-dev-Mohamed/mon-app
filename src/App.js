import "./App.css";
import FirstComponent from "./components/MyFirstCompent";
import SecondComponent from "./components/MySecondCompent";
import ThirdComponent from "./components/MyThirdCompent";
function App() {
  return (
    <div className="App">
      <h1 className="text-primary" >My Projet React</h1>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;