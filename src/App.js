import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Post from "./components/Post";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateOutlate from "./components/PrivateOutlate";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  console.log({ isLoggedIn });
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" />} />
        <Route path="/hello" element={<Hello />}>
          <Route path="world" element={<h1>This is world!</h1>} />
        </Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />

        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

        <Route path="/" element={<PrivateOutlate isLoggedIn={isLoggedIn} />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<h1>Pages Not Found</h1>} />

        {/* 
        <Route
          path="/profile"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
