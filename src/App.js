import './App.css';
import Tabs from './components/Tabs'

function App() {

  const tabs = [
    {
      title: "Tab 1",
      content: "Tab 1 content :)"
    },
    {
      title: "Tab 2",
      content: "Tab 2 content :)"
    },
    {
      title: "Tab 3",
      content: "Tab 3 content :)"
    },
    {
      title: "Tab 4",
      content: "Tab 4 content :)"
    }
  ]

  return (
    <div className="App">
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
