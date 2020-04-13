import React, { useState } from 'react';
import { func } from 'prop-types';

export default function Search({ onSubmit }) {
    const [query, setQuery] = useState("");

    return <div>
        <input type="text" name="query" value={query} onChange={e => setQuery(e.target.value)} />
        <input type="submit" value="Search" onClick={() => onSubmit(query)} />
    </div>
}

Search.propTypes = {
    onSubmit: func.isRequired
}