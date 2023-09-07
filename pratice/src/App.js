import Container from "./components/container";
import Jordan from  "./assets/img/Air-Jordan-Logo.png";
import Shoes from  "./assets/img/shoes.png";
import "./styles/sass/main.scss";

function App() {
  return ( 
    <div>
      <img id="Jordan" src={Jordan}/>
      <img id="Shoes" src={Shoes}/>
      <Container/>
    </div>
  );
}

export default App;