export default function Notes(props){
    return (
        <div className="note">
            <h1>{props.noteTitle}</h1>
            <p>{props.noteContent}</p>
        </div>
    );
}