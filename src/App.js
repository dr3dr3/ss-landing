import './App.css';
import LatestChange from './latestChange.js';

function App() {
  return (
    <div className="App">
      <main>
        <div class="intro">Hello, I'm André</div>
        <div class="tagline">Sharing <a target="_blank" href="http://localhost:3000/revealmd/index.html">stories</a> about DevOps and Product Management</div>
        <div class="icons-social">
          <a href="https://github.com/dr3dr3">
                    <i class="fab fa-github" aria-hidden="true" title="Github"></i>
                    <span class="sr-only">Github</span>
                </a>
                <a href="https://linkedin.com/in/andredreyer">
                    <i class="fab fa-linkedin" aria-hidden="true" title="LinkedIn"></i>
                    <span class="sr-only">LinkedIn</span>
                </a>
            </div>
        <div class="build">BUILD-PLACEHOLDER</div>
        <LatestChange />
      </main>
    </div>
  );
}

export default App;
