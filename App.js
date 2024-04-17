import store from './Store/store';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import Top from './Screens/Top';

let persistor = persistStore(store)
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Top />
      </PersistGate>
    </Provider>
  );
}