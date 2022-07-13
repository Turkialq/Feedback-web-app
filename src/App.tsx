import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import Post from "./components/Post";



function App() {

  return (
    <FeedbackProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
                <Header title='feedBack' />
                <FeedbackForm />
                <FeedbackStates />
                <FeedbackList />
                <AboutIconLink />

              </>
            }>
            </Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />

          </Routes>

        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
