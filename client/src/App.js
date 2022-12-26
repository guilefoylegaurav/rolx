import { Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import LogIn from './pages/Login';
import Profile from './pages/Profile';
import Saved from './pages/Saved';
import SinglePost from './pages/SinglePost';
import UpdateListing from './pages/UpdateListing';
import FixedNav from './widgets/FixedNav';

function App() {
  return (
    <Router>
      <FixedNav />
      <Container maxW="container.md" padding={5} paddingBottom={{base: 10, md: 0}} paddingTop={{base: 8, md: '30px'}}>
        <Stack>
          <Routes>
            <Route path="/" index element={<Home />} /><Route path="/" index element={<Home />} />
            <Route path="/listing/:id" index element={<SinglePost />} />
            <Route path="/addListing" element={< UpdateListing addNew/>} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </Stack>

      </Container>
    </Router>
  );
}

export default App;
