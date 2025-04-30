import { useState, useEffect } from "react"

export const useLocalStorageCart = () => {
    const [tickets, setTickets] = useState(() => {
        const stored = localStorage.getItem('tickets')
        return JSON.parse(stored) || []
    });

    useEffect(() => {
        localStorage.setItem('tickets', JSON.stringify(tickets))
    }, [tickets]);

    const addTickets = (eventWithQuantity) => {
        setTickets(prev => {
            const exists = prev.find(e => e.id === eventWithQuantity.id)
            if(exists) {
                return prev.map(e =>
                    e.id === eventWithQuantity.id 
                    ? {...e, quantity: e.quantity + eventWithQuantity.quantity}
                    : e
                );
            } else {
                return [...prev, eventWithQuantity]
            }
        })
    }

    const removeTickets = (id) => {
        setTickets(prev => prev.filter(e => e.id !== id))
    }

    

    return {tickets, addTickets, removeTickets};
}
