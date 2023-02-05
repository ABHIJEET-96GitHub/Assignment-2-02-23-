import Header from './Header';
import InputQuery from './InputQuery';
import SubHeading from './SubHeading';
import SubmitButton from './SubmitButton';

function App(){
    return(
        <div className="App">
        <Header />
        <header className="App header">
            <SubHeading />
            <p>
            Edit <code>src/App.js</code> and save to reload
            </p>
        </header>
        <label>Text Entry</label>
        <InputQuery />
        <SubmitButton />
        </div>
    );
}
export default App;