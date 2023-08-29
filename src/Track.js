import React, { useState } from "react";
import SearchResults from "./SearchResults";

function Track() {
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [ID, setID] = useState("");

    return (
        <div>
            <p>{name}</p>
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    )
}

export default Track;