import Home from "./components/Home/Home";
import Provider from "./context/context";

const App = ()=>{
  
  return(
    <Provider>
      <Home/>
    </Provider>
  )
}

export default App;
