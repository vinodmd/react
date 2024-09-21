
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/Coreconcepts"
import TabButtton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent] = useState()
  function handleClick(selectedTab){
    console.log(selectedTab);
    setTabContent(selectedTab);
}

  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
        <h2>Core Concepts!</h2>
        <ul>
        {CORE_CONCEPTS.map((item) => (<CoreConcepts key={item.title} {...item}/>))}
        </ul>
      </section>
      <section id ="examples">
        <h2>Examples</h2>
        <menu>
          <TabButtton isSelected={tabContent === "components"} onClick={() => handleClick("components")} label="Components"></TabButtton>
          <TabButtton isSelected={tabContent === "jsx"} onClick={() => handleClick("jsx")} label="JSX"></TabButtton>
          <TabButtton isSelected={tabContent === "props"} onClick={() => handleClick("props")} label="Props"></TabButtton>
          <TabButtton isSelected={tabContent === "state"} onClick={() => handleClick("state")} label="States"></TabButtton>
        </menu>
        { ! tabContent ? (<p>Please select tab to see information.</p>): <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>{EXAMPLES[tabContent].code}</pre>
        </div>}
      </section>
      </main>
    </div>
  );
}

export default App;
