import './App.css';
import { CodeBlock, monokai } from "react-code-blocks";

const code='def Cras mi pede, malesuada in,\nimperdiet et, commodo vulputate,\njusto. In blandit ultrices enim.\n\tLorem ipsum dolor sit amet\n\tconsectetuer adipiscing elit.';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='codigo'>
        <CodeBlock
        text={code}
        language='python'
        showLineNumbers={true}
        theme={monokai}
        startingLineNumber={1}
        codeBlock={{lineNumbers: true}}
        wrapLines/>
      </div>
      </header>
    
    </div>
  );
}


export default App;
