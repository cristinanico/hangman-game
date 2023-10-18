import '../../styles/components/Form.scss';

const Form = ({onChange, value, onSubmit}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};


export default Form;