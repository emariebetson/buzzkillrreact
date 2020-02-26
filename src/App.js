import React from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import HomeForm from "./components/HomeForm";
import HomeFeatures from "./components/HomeFeatures";
import HomeDownload from "./components/HomeDownload";
import HomeFacts from "./components/HomeFacts";
import HomeLiveFeed from "./components/HomeLiveFeed";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
            <Header>
      </Header>
            <HomeForm>
      </HomeForm>
            <HomeFeatures>
      </HomeFeatures>
            <HomeDownload>
      </HomeDownload>
            <HomeFacts>
      </HomeFacts>
            <HomeLiveFeed>
      </HomeLiveFeed>
            <Footer>
      </Footer>
            <Preloader>
      </Preloader>
    </div>
  );
}

export default App;
