import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/pages/Intro';
import NavBar from './components/NavBar';
import ProjectHome from './components/pages/ProjectHome';

function App() {
  return (
    <div className="top-header">
      <NavBar></NavBar>
      <Intro></Intro>
      <ProjectHome />
    </div>
  );
}

export default App;
