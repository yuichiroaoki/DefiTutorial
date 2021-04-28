import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ethers } from "ethers";

declare const window: any;

function App() {

  const main = async () => {

    // A Web3Provider wraps a standard Web3 provider, which is
    // what Metamask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const blockNum = await provider.getBlockNumber()
    console.log({blockNum})
    const balance = await provider.getBalance("ethers.eth")
    console.log({ balance })
    // The Metamask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner()

    const ETH = ethers.utils.formatEther(balance)
    console.log({ETH})
    // const [balance, setBalance] = useState<number>(0)
    console.log({ signer, provider })
  }
  main()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
