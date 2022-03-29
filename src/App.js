import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';

import data from './misc/data.json';

function App() {
  const cards = data.map(items => {
    return(
      <Card
        {...items}
      />
    )
  });

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"></link>
      <Navbar />
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
