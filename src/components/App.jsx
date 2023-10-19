import { useState, useEffect } from 'react';
// import viteLogo from '/vite.svg'
import callToApi from '../services/api'; // Importamos el servicio que acabamos de crear
/* carpetas */
import Loading from './Loading/Loading';
import Instructions from './Instructions';
import Options from './Options';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Dummy from './DummyError/Dummy';
import Solution from './SolutionLetters/Solution';
import Form from './Form/Form';
/* css */
import '../styles/App.scss';
import '../styles/Reset.scss';
import '../styles/components/Form.scss';
import '../styles/components/Footer.scss';
import '../styles/components/Instructions.scss';
/* react-router-dom */
import { Route, Routes} from 'react-router-dom';

function App() {
  let [numberOfErrors, setNumberOfErrors] = useState(0);
  const [word, setWord] = useState('');
  const [lastLetter, setLastLetter] = useState('');
  const [userLetters, setuserLetters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setWord(response.word);
      setIsLoading(true)
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  const handleChangeInput = (input) => {
    setWord(input)

    if(userLetters !== ''){
      console.log('patata');
      setLastLetter('');
      setuserLetters([]);
    }
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    // console.log(wordLetters);

    return wordLetters // todas las letras buscadas por el user
      .map((letter, index) => {
        const exist = userLetters.includes(letter.toLowerCase());
        return (
          <li key={index} className="letter">
            {exist ? letter : ''}
          </li>
        );
      });
  };

  const renderErrorLetters = () => {
    const noExist = userLetters.filter(
      (letter) => word.includes(letter) === false
    );

    if (noExist.length !== numberOfErrors) {
      setNumberOfErrors(noExist.length);
    }

    return noExist.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
    });
  };

  /*   const handleClick = () => {
    setNumberOfErrors(++numberOfErrors);
    console.log(numberOfErrors);
  }; */

  const handleInput = (ev) => {
    // console.log(ev.target.value);
    const letterValue = ev.target.value.toLowerCase();
    const regex = /[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]/;

    if (letterValue === '' || regex.test(letterValue)) {
      setLastLetter(letterValue);
    }
    if (
      letterValue !== '' &&
      regex.test(letterValue) &&
      !userLetters.includes(letterValue)
    ) {
      setuserLetters([letterValue, ...userLetters]);
    }
    /* OTRA OPCIÓN
      // const validLetters = 'abcdefghijklmnopqrstuvwxyzáéíóúüABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÜ'

      if(validLetters.includes(letterValue)){
        setLastLetter(letterValue);
      } 
    */
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <div className="page">
        <Header title="Juego del ahorcado" classCss="header__title" />
        <Loading loading={isLoading} />
         <main className="main">
          <Routes>
            {/* main */}
            <Route 
                path="/"
                element={
                  <>
                      <section>
                        <Solution
                          classCss="solution"
                          title="Solución: "
                          render={renderSolutionLetters()}
                        />
                        <div className="error">
                          <h2 className="title">Letras falladas:</h2>
                          <ul className="letters">{renderErrorLetters()}</ul>
                        </div>

                        <Form onChange = {handleInput} value = {lastLetter} onSubmit = {handleSubmit}/>
                      </section>

                      
                  </>
                }>
            </Route>
            <Route 
              path="/instructions"
              element={<Instructions/>}>
            </Route>
            <Route 
              path="/options"
              element={<Options handleChangeInput={handleChangeInput} />}>
            </Route>
          </Routes>
          <Dummy classCss={`dummy error-${numberOfErrors}`} />
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
