import '../../styles/components/Header.scss';

const Header = ({title, classCss}) => {
    return (
        <header>
            <h1 className={classCss}>{title}</h1>
        </header>
    );
};

export default Header;

