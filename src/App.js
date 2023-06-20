import HomeMainPage from './Swiggy/HomeMainPage';
import './App.css';
import HomePage from './Swiggy/HomePage';
import Content from './Swiggy/Content';
import Information from './Swiggy/Information';




function App() {
  return (
    <>
    <div style={{display:"flex"}}>
  
     <HomeMainPage />
     <HomePage>
     </HomePage>
     </div>
    <Content />
    <Information />
    
    </>
  );
}

export default App;

