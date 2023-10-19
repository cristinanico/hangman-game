
// eslint-disable-next-line react/prop-types
const Options = ({handleChangeInput}) => {

    function handleChange(ev) {
        const input = ev.target.value;
        handleChangeInput(input)
    }

    return (
        <section className="Options">
            <form onSubmit={(ev)=> ev.preventDefault()}>
                <label className="title" htmlFor="word">
                    Escribe aquí la palabra que hay que adivinar:
                </label>
                <input
                    autoFocus
                    autoComplete="off"
                    className="form__input"
                    maxLength="15"
                    type="text"
                    id="word"
                    name="word"
                    onChange={handleChange}
                />
            </form>
        </section>
    )
}

export default Options;