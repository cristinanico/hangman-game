import '../styles/components/Instructions.scss';

const Instructions = () => {
  return (
    <section className="instructions">
      <p>
        ¿Serás más listo que tu ordenador? Intenta completar la palabra
        escondida adivinando qué letras tiene pero ¡cuidado! Tendrás que
        conseguirlo antes de que el dibujo complete sus líneas o habrás perdido
        tu oportunidad.
      </p>
      <p>
        Si la letra sugerida está en la palabra, se pintará en las líneas. Si
        por el contrario, tu letra no forma parte de la palabra escondida, ¡se
        irá dibujando el ahorcado!
      </p>
    </section>
  );
};

export default Instructions;
