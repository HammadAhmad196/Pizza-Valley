import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>

       <Route path="/" exact component={HomeScreen} />
       <Route path="/cart" exact component={Cartscreen} />
       <Route path="/register" exact component={Registerscreen} />
       <Route path="/login" exact component={Loginscreen} />
       <Route path="/orders" exact component={OrdersScreen} />
  
      </BrowserRouter>
    </div>
  );
}
 
export default App;
