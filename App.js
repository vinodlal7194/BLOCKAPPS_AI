import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from './components/Register';
import Profile from './components/Profile';
import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'; 
import {Provider} from 'react-redux';

const App = () =>  {
  
  const Drawer = createDrawerNavigator();
  const store = createStore(reducers,compose(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Profile" component={Profile} initialParams={{ refresh: 0 }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
