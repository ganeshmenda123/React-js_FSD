import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
//import {trainee,a} from './person';
import Menu from './menu';
import Contact from './contact';
import Service from './Service';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import Student from './student';
import Trainees from './trainees';
import Count from './count';
import Events from './events';
import Hooks from './hooks';
import From1 from './from1';
import From from './from';
import Products1 from './products1';
import Newproduct from './newproduct';
import Categories from './categories';
function App() {
  return (
    <div className='App'>
      {/* <About/>
      <Home/>
      <Service/>
      <Contact/> */}
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About  />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Service' element={<Service />} />
          <Route path='trainees' element={<Trainees/>} />
          <Route path='count' element={<Count/>} />
          <Route path='events' element={<Events/>}/>
          <Route path='hooks' element={<Hooks/>}/>
          <Route path='from' element={<From/>}/>
          <Route path='from1' element={<From1/>}/>
          <Route path='products1' element={<Products1/>}/>
          <Route path='newproduct' element={<Newproduct/>}/>
          <Route path='categories' element={<Categories/>}/>
          {/* <Route path='student' element={<Student name='ganesh' />} /> */}
        </Routes>
      </BrowserRouter>
    </div> 
  );
}
export default App
