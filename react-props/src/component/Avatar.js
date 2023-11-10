export default function Avatar(props){
    return (
        <img className="circle-img" src={props.src} alt={props.alt} />
    );
}