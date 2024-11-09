import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard
          name="Beard Man"
          bio="Sempre com barba, sempre."
          imageUrl="https://placebeard.it/150x150"
        />
      </header>
    </div>
  );
}

export default App;
