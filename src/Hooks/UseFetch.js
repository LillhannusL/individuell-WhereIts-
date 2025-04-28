import axios from "axios";
import { useEffect, useState } from "react";

export const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then(response => setData([...response.data]))
            .catch(error => setIsError(true))
            .finally(() => setIsLoading(false));
    },[url]) 

    return { data, isLoading, isError }
}