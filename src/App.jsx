import { CORE_CONCEPTS } from './data';
import Header from './Components/Header.jsx';
import CoreConcepts from './Components/CoreConcepts.jsx';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import TabButton from './Components/TabButton.jsx';
import { EXAMPLES } from './data';
import { useState } from 'react';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {

  const [selectedTopic, setSelectedTopic] = useState('');
  // this useState will return an array with excatly 2 elements
  // one element will be current data snapshot
  // other one will be a function to change that current data  

  function handleClick(selectedButton) {
    //useState(); WRONG WAY TO USE THIS HOOK
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    // this log will output previsos value this is because Lec 54 9:30
    // when we call the setSelectedTopic function 
  }

  let tabContent = <p>Please select a topic</p>;

  if(selectedTopic){
    tabContent = <div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>;
  }

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
            <TabButton onSelect={() => handleClick('components')} isActive={selectedTopic==='components'}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')} isActive={selectedTopic==='jsx'}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')} isActive={selectedTopic==='props'}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')} isActive={selectedTopic==='state'}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;         