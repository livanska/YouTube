import { Provider } from 'react-redux';
import './App.css';
import { store } from "./state/store";
import { RootRouter } from './router/RootRouter';

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}

export default App;
