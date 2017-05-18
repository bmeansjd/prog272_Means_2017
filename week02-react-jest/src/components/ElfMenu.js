/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import Address from './Address';
import AddressChanger from './AddressChanger';
import SmallNumbers from './SmallNumbers';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import '../css/App.css';




class ElfMenu extends Component {

    render() {
        return (
            <Router>

                <div>
                    <div className="App">
                        <ul>
                            <li><Link to="/">AddressShow</Link></li>
                            <li><Link to="/edit">AdressEdit</Link></li>
                            <li><Link to="/small">SmallNumbers</Link></li>
                        </ul>
                    </div>

                    <<Route path='/small' component={SmallNumbers}/>
                    <Route exact path="/" component={Address}/>
                    <Route path="/edit" component={AddressChanger}/>

                </div>

            </Router>
        );
    }
}

/*this is needed for week 07

<Router> <=== MOVES ===<
<div>
    <div className='App'>
        <ul>
            <li><Link to='/'>AddressShow</Link></li>
            <li><Link to='/edit'>AdressEdit</Link></li>
            <li><Link to='/small'>SmallNumbers</Link></li>
        </ul>
    </div>
    <Route exact path='/' component={Address}/>      <=== MOVES ===<
<Route path='/edit' component={AddressChanger}/> <=== MOVES ===<
<Route path='/small' component={SmallNumbers}/>  <=== MOVES ===<
</div>
</Router> <=== MOVES ===<

export default ElfMenu;
//In the above code I've imported React and the classes I want to display, as well as the react-router code. As mentioned above, the class comes from react router.

//We'll focus only on the render method, since the rest of the code in our file stays the same throughout this exercise.

//Let's write code to display the simple menu shown in the screenshots visible above. Don't fuss over the fact that the menu looks funky at this point. We can fix that later by adding some CSS. Right now, just focus on getting things working:
*/


export default ElfMenu;
