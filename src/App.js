import {React} from 'react';

import Sidemenu from './components/sidemenu/Sidemenu';
import './App.css';
// import Body from './components/body/Body';


function App() {
  return (
    // <Router>
    //   <Route path="/" exact component={body}></Route>
    //   <Route path="/sidemenu" exact component={sidemenu}></Route>
    // </Router>

    <div className="App">
      <Sidemenu />
      {/* <Body/> */}
    </div>
  );
}

export default App;
