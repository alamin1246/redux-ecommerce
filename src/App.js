import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Items from "./Items";
import AddItem from "./AddItem";
import Cart from "./Cart";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import Footer from "./Footer";

function App() {
  const persistConfig = {
    key: "root",
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return (
    <div className="App">
      {/* <h1>Redux E-commerce</h1> */}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Items />} exact />
            <Route path="/add-item" element={<AddItem />} exact />
            <Route path="/cart" element={<Cart />} exact />
          </Routes>
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
