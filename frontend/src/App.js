
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import one from './Components/Assets/1.png';
import two from './Components/Assets/2.png';
import three from './Components/Assets/3.png';
import four from './Components/Assets/4.png';
// import women_banner from './Components/Assets/banner_women.png'
// import kid_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Fast' element={<ShopCategory banner={one} category="fast"/>}/>
        <Route path='/Ice' element={<ShopCategory banner={four} category="ice"/>}/>
        <Route path='/Pastry' element={<ShopCategory banner={two} category="pastry"/>}/>
        <Route path='/Drinks' element={<ShopCategory banner={three} category="drinks"/>}/>
        {/* <Route path='/About' element={<ShopCategory banner={breadcrumb} category=""/>}/> */}
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

        </Route>
       
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
