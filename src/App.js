import Joke from "./Joke";
import Jokes from "./Jokes";

function App() {
  const jokeElements = Jokes.map(joke => {
    return (
      <Joke 
        /* number = {joke.number} 
        setup={joke.setup} 
        closer={joke.closer} */
        joke={joke}
      />
    )
  });
  return (
    <div className="App">
      {jokeElements}
    </div>
  );
}

export default App;