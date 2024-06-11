import * as React from 'react';
import {useState} from "react";

export default function SearchBarre() {
    const [searchBarre, setSearchBarre] = useState("");
    return (
        <form>
            <label htmlFor="Search">Rechercher un livre</label>
            <input type="search" id="search" required/>
        </form>
    );
};