import { useEffect } from 'react';
import './App.css';
import  "amazon-connect-streams";

function App() {

  const connectUrl = "https://ajselvar-workshop.awsapps.com/connect";

  useEffect(() => {
    const container = document.getElementById("ccp");
    // eslint-disable-next-line no-undef
    connect.agentApp.initApp(
      "ccp",
      "ccp-container",
      connectUrl + "/ccp-v2/",
      { style: "width:400px; height:600px;" }
    );

    // eslint-disable-next-line no-undef
    connect.agentApp.initApp(
      "customerprofiles",
      "customerprofiles-container",
      connectUrl + "/customerprofiles-v2/",
      { style: "width:400px; height:600px;" }
    );

    // eslint-disable-next-line no-undef
    connect.agentApp.initApp(
      "wisdom",
      "wisdom-container",
      connectUrl + "/wisdom-v2/",
      { style: "width:400px; height:600px;" }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <main style={{display: 'flex'}}>
          <div id="ccp-container"></div>
          <div id="customerprofiles-container"></div>
          <div id="wisdom-container"></div>
        </main>
      </header>
    </div>
  );
}

export default App;
