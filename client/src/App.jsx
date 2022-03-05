import { useState } from 'react';
import {Footer, Navbar, Services, Transactions, Welcome} from './components/index';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-min-screen">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <Navbar />
          <Welcome />
      </div>

      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App
