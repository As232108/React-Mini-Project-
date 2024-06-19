import React, { useState } from 'react'
import { useEffect } from 'react'

const Fetch_data_API_dispaly = () => {
    const [data, setdata] = useState(null)
    useEffect = (() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => setdata(json))
    }, [])
    return (
        <div>
            {
                data? (
                    <div>
                        <h1>Title:{data.title}</h1>
                        <h1>Title:{data.title}</h1>
                    </div>
                ) : (
                    <p>
                        Loding...
                    </p>
                )
            }
        </div>
    )
}

export default Fetch_data_API_dispaly