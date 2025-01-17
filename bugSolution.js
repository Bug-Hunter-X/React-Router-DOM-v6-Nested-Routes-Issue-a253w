import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Solution: Reorder routes to prioritize the nested route */}
        <Route path="/contact/:id" element={<ContactDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() {return <div>About</div>}
function Contact() {return <div>Contact</div>}
function ContactDetails() {return <div>Contact Details</div>}

export default App;