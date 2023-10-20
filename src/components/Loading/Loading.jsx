import '../../styles/components/Loading.scss';

// eslint-disable-next-line react/prop-types
const Loading = ({isLoading}) => {

    //return <p>EH!!! EL LOADING!</p>

    if(isLoading){
        return (
            <span className="loading" />
        )
    } else {
        return null;
    }
  
}

export default Loading;

