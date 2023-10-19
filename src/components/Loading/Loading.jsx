import '../../styles/components/Loading.scss';

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

