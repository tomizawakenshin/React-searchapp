import { useRef , useState} from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fechData, setFechData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const URL = `https://pixabay.com/api/?key=43287810-5101094149b82625188693b45&q= ${ref.current.value}&image_type=photo`
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFechData(data.hits);
        console.log(data.hits);
      });

  }
  return <div className='container'>
    <h1>My Pixabay</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='text' placeholder='画像を探す' ref = {ref}/>
    </form>
    <ImageGallery fechData = {fechData}/>
  </div>
}

export default App;
