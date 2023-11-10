import Avatar from "./Avatar";

export default function Card(props){
console.log(props.id)
    return (
        <div className="card">           
            <div className="top">
                <p>{props.id}</p>
                <h2 className="name">{props.name}</h2>
                <Avatar src={props.img} alt={props.alt}/>              
            </div>
            <div className="bottom">
                <div className="info">
               
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                </div>        
            </div>
      </div>
    );
  }