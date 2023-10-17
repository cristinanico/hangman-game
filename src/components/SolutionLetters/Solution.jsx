import '../../styles/components/Letters.scss';

const Solution = ({classCss, title, render}) => {
    return (
        <div className={classCss}>
              <h2 className="title">{title}</h2>

              <ul className="letters">
                {render}
              </ul>
        </div>
    );
};

export default Solution;

