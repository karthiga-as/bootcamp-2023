import App from "./App";

export default function Card(props){
    return (
            <div className="term">
                <dt>
                    <span className="emoji" role="img" aria-label="Tense Biceps">{props.emojiSymbol}</span>
                    <span>{props.emojiName}</span>
                </dt>
                    <dd>{props.emojiMeaning}</dd>
            </div>
    );
}