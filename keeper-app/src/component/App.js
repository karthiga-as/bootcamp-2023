import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notesQA from "../notes";

export default function App(){
    return (
        <div>
            <Header className="header"></Header>
            {notesQA.map(note => (
                <Notes
                    key={note.key}
                    noteTitle={note.title}
                    noteContent={note.content}
                />
            ))}
            
            <Footer className="footer"></Footer>
        </div>
    );
}