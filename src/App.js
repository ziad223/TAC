import './App.css';
import AboutPage from './AboutPage/AboutPage';
import BlogPage from './BlogPage/BlogPage';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import TopNav from './AboutPage/TopNav/TopNav';
import Footer from './AboutPage/Footer/Footer';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Taxes from './Taxes/Taxes';
import HowItWorks from './HowItWorks/HowItWorks';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <TopNav/>
     <Routes>
      <Route path='/about' element = {<AboutPage/>} />
      <Route path='/blog' element = {<BlogPage/>} />
      <Route path='/taxes' element = {<Taxes/>} />
      <Route path='/how-it-work' element = {<HowItWorks/>} />
      <Route path='*' element = {<NotFoundPage/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
