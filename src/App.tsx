import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { HomePage } from './pages/homePage/HomePage';
import { setupStore } from './store/store';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
