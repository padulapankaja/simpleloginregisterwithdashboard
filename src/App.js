import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedindexRoutes from './routes/protected'

class App extends React.Component {

  render() {
    return (
      <div className="App" >
         <Router>
         <Switch>
            {ProtectedindexRoutes.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  key={key}
                  component={prop.component}
                  exact={prop.exact ? true : false}
                />
              );
            })}

          </Switch>
        </Router> 

      </div>
    );
  }
}
export default App;
