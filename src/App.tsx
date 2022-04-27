import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/pages/Intro';
import NavBar from './components/pages/NavBar';
import ProjectHome from './components/pages/ProjectHome';

function App() {
  return (
    <div className="top-header">
      <NavBar />
      <Intro />
      <ProjectHome />
    </div>
  );
}

export default App;
