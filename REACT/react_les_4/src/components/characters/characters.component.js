import {useState, useEffect} from "react";
import {getCharacters} from "../services/api";
import Character from "../character/character.component";

export default function Characters() {

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(value => setCharacters([value.data]))
    },[]);



  return (
    <div>
        <h1>Characters</h1>

        {
            characters.map(value => <Character key={value.id}
                                               person={value}

            />)
        }
    </div>
  );
}