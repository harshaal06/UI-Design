import './App.css';
import menu from './menu.png';
import info from './info.png';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='w-75 mx-auto'>
          <div className='border border-bottom-0 border-end-0 border-black border-2 d-flex justify-content-end'>
            <div className='mx-2 bg-dark-subtle px-2 py-1 rounded text-white'>1 hr</div>
            <div className='mx-2 bg-primary px-2 py-1 rounded text-white'>8 hr</div>
            <div className='mx-2 bg-secondary px-2 py-1 rounded text-white'>24 hr</div>
            <div className='mx-2 rounded'><img src={menu} className='icon-h'/></div>
            <div className='mx-2 rounded'><img src={info} className='icon-h'/></div>
          </div>
          <div className='mt-3 fs-7 ps-2'>Cycle Status</div>
          <div className='border-bottom border-black border-2 mx-4 bg-yellow d-flex'>
            <div className='p-3 bg-success wth-col'></div>
            <div className='p-3 bg-success wth-col'></div>
          </div>
          <ul className='time-for'>
            <li>08:53:48</li>
            <li>10:00:00</li>
            <li>11:00:00</li>
            <li>12:00:00</li>
            <li>13:00:00</li>
            <li>14:00:00</li>
            <li>15:00:00</li>
            <li>16:00:00</li>
            <li>16:53:56</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
