import { useState } from 'react'
import './shared/style/App.css'
import Head from './shared/components/head';
import Nav from './shared/components/nav';
import Footer from './shared/components/footer';


function App() {
  const [] = useState(0)

  return (
    <>
      <Head />
      <Nav />

      <Footer />
    </>
  );
}

export default App
 