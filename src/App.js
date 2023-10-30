import './App.css';
import LatestChange from './latestChange.js';

function App() {
  return (
    <div className="App">
      <main>
        <div className="intro">Hello, I'm André</div>
        <div className="tagline">Sharing <a href="http://localhost:3000/revealmd/index.html">stories</a> about DevOps and Product Management</div>
        <div className="icons-social">
          <a href="https://github.com/dr3dr3">
                    <i className="fab fa-github" aria-hidden="true" title="Github"></i>
                    <span className="sr-only">Github</span>
                </a>
                <a href="https://linkedin.com/in/andredreyer">
                    <i className="fab fa-linkedin" aria-hidden="true" title="LinkedIn"></i>
                    <span className="sr-only">LinkedIn</span>
                </a>
            </div>
        <div className="build">BUILD-PLACEHOLDER</div>
        <LatestChange />
      </main>
    </div>
  );
}

export default App;
