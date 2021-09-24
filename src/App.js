import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Pets from './Pages/Pets';
import MetaMask from './DAppModules/WalletConnection/config';
function App() {
  return (
    <>
      <Header />
      {/* //<MetaMask/> */}
      <h1>HADAS</h1>
      <Pets/>
      </>
  );
}

export default App;
