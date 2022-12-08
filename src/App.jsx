
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { ProductsList } from './Components/ProductsList';
import './App.css'
import ProductListing from './Components/ProductListing';


function App() {
  return (
    <div className="App">
      <> 
        <Header />
        <ProductsList />
        <Footer />
      </> 
   </div>

  );
}

export default App;
