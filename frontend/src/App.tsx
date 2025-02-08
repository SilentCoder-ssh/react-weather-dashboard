import { useState } from 'react'
import './shared/style/App.css'
import Head from './shared/components/head';
import Nav from './shared/components/nav';
import Footer from './shared/components/footer';
import Current from './shared/components/current';


function App() {
  const [] = useState(0)

  return (
    <>
      <Head />
      <Nav />
      <Current />
      <Footer />
    </>
  );
}

export default App
 