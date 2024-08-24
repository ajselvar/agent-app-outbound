import { useEffect } from 'react';
import './App.css';
import  "amazon-connect-streams";

function App() {

  useEffect(() => {
    const container = document.getElementById("ccp");
    // eslint-disable-next-line no-undef
    connect.core.initCCP(container, {
      ccpUrl: "https://ajselvar-workshop.awsapps.com/connect/ccp-v2",
      region: 'us-east-1',
      loginPopup: true,
      loginPopupAutoClose: true,
      softphone: {
        allowFramedSoftphone: true,
        allowFramedVideoCall: true,    // optional, default to false
        allowEarlyGum: true
      },
      pageOptions: { //optional
        enableAudioDeviceSettings: true, //optional, defaults to 'false'
        enableVideoDeviceSettings: true, //optional, defaults to 'false'
        enablePhoneTypeSettings: true //optional, defaults to 'true' 
      },
      loginOptions: {                 // optional, if provided opens login in new window
        autoClose: true,              // optional, defaults to `false`
        height: 600,                  // optional, defaults to 578
        width: 400,                   // optional, defaults to 433
        top: 0,                       // optional, defaults to 0
        left: 0                       // optional, defaults to 0
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div id="ccp" style={{ width: "320px", height: "500px" }}></div>
      </header>
    </div>
  );
}

export default App;
