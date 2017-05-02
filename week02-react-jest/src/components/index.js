
import ReactDOM from 'react-dom';
import App from './components/App';
import Address from './components/Address';
import './index.css';
import Elfheader from './components/Elfheader';
import addresses from './address-list'



var address =
{

    firstName : 'unknown',
    lastName : 'unknown'
};

ReactDOM.render(
    <div>
    <Elfheader/>
        <ElfMenu/>

  </div>,

  document.getElementById('root')
);
