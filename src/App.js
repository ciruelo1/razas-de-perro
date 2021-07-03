import React, { Fragment, Suspense }from 'react';
import Header from "./components/Header";
import TabPanels from "./components/TabPanels";
import Footer from "./components/Footer";

const App = () => (
  <Fragment>
    <Suspense fallback={
      <div>Loading...</div>
      }
    >
      <Header />
      <TabPanels />
      <Footer />
    </Suspense>
  </Fragment> 
);

export default App;
