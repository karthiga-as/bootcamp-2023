import {createRoot} from "react-dom/client";

const root =createRoot(document.getElementById("root"));

function Card(props){
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

root.render(
  <div>
    <h1 className="my-style">My Contacts</h1>
    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="beyonce_img" phone="+123 456 789" email="b@beyonce.com"/>
    <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" alt="jack_img" phone="+987 654 321" email="jack@nowhere.com"/>
    <Card name="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" alt="Chuck_img" phone="+918 372 574" email="gmail@chucknorris.com"/>
  </div>
);
