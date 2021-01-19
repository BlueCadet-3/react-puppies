import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
// Import the following components
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";

export default function App() {
  const [user, setUser] = useState({});

return (
  <main className="App">
    {user ? (
      <>
        <NavBar />
        <Switch>
          <Route path="/orders/new">
            <NewOrderPage />
          </Route>
          <Route path="/orders">
            <OrderHistoryPage />
          </Route>
          <Redirect to="/orders" />
        </Switch>
      </>
    ) : (
      <AuthPage />
    )}
  </main>
);
}
