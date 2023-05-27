
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Layout/>}>
      <Route index element={<Home/>}
      />
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={
      <Contact/>
      }/>
      <Route path='blogs'element={<Blog/>}/>
      <Route path='blog/:id'element={<SingleBlog/>}/>
      <Route path='compare-product'element={<CompareProduct/>}/>
      <Route path='wishlist'element={<Wishlist/>}/>
      <Route path='login'element={<Login/>}/>
      <Route path='forgotpassword'element={<Forgotpassword/>}/>
      <Route path='signup'element={<Signup/>}/>
      <Route path='resetpassword'element={<Resetpassword/>}/>
      <Route path='product/:id'element={<SingleProduct/>}/>
       <Route path='store' element={
      <OurStore/>
      }/>
      </Route>
      

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
