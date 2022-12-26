import { Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AddListing from './pages/AddListing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Saved from './pages/Saved';
import FixedNav from './widgets/FixedNav';

function App() {
  return (
    <Router>
      <FixedNav />
      <Container maxW="container.xl" padding={5}>
        <Stack>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/addListing" element={< AddListing />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>
        </Stack>

      </Container>
    </Router>
  );
}

export default App;
