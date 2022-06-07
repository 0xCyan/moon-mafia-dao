import { useAddress, useMetamask } from "@thirdweb-dev/react";

const App = () => {

  // Third web hooks!
  const address = useAddress();
  const connectWithMetamask = useMetamask();

  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to Moon Mafia DAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect Wallet or Die Trying
        </button>
      </div>
    );
  }

  return (
    <div className="landing">
      <h1>Wallet Connected, You Live to See Another Day!</h1>
    </div>
  );
}

export default App;