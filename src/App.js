import './App.css';
import Button1 from './components/button1';
import Labelnama from './components/labelnama';
import Labelalamat from './components/labelalamat';
function App() {
  return (
    <div className="App">
     <h1>Profile</h1>
     <Labelnama nama="handogol "/>
     <Labelalamat alamat="jalan santo"/>
     <Button1/>
    </div>
  
  );
}

export default App;