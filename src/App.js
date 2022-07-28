import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className='bg-slate-200 h-screen'>
      <p className='text-orange-500'>HELLO</p>
      <Spline scene="https://prod.spline.design/0j-He-n7S2unukca/scene.splinecode" />
    </div>
  );
}

export default App;
