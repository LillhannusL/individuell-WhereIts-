import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = () => {
    const [eventList, seteventList] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://santosnr6.github.io/Data/events.json')
            .then(response => seteventList(response.data.events))
            .catch(error => setIsError(true))
            .finally(() => setIsLoading(false));
    },[]) 

    return { eventList, isLoading, isError }
}