import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Category from './components/category/Category';
import Featured from './components/featured/Featured';
import Recent from './components/recent/Recent';
import Stay from './components/stay/Stay';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Category />
      <Featured />
      <Recent />
      <Stay />
    </div>
  );
}

export default App;
