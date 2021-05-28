import './App.css';
import SearchForm from "./components/searchForm"
import Header from "./components/header"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
    </div>
  );
}

export default App;
