import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Nav from './Components/Navb';
import Hero from './Components/Hero';
import Guarantees from './Components/Guarantees';
import RecommendedDestinations from './Components/RecommendedDestinations';
import Blogs from './Components/Blogs';
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Guarantees />
      <RecommendedDestinations/>
      <Blogs/>
    </div>
  );
}

export default App;
