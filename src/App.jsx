import { CORE_CONCEPTS } from './data';
import Header from './Components/Header.jsx';
import CoreConcepts from './Components/CoreConcepts.jsx';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import TabButton from './Components/TabButton.jsx';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Comcepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
            <menu>
              <TabButton>Components</TabButton>
            </menu>
        </section>
      </main>
    </div>
  );
}

export default App;