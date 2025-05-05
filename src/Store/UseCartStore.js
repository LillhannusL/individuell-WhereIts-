import { create } from 'zustand';

const useCartStore = create((set) => ({
    // antal biljetter per id
    counts: {},
    // antal biljetter i kundvagnen
    tickets: JSON.parse(localStorage.getItem('tickets')) || [],

    // sätter ett värde för ett visst id
    setCount: (id, value) =>
        set((state) => {
            const newCounts = {
                ...state.counts,
                [id]: value,
            };
            localStorage.setItem('counts', JSON.stringify(newCounts));
            return { counts: newCounts };
        }),

    // lägger till 1 biljett 
    plus: (id) =>
        set((state) => {
            const newCounts = {
                ...state.counts,
                [id]: (state.counts[id] || 0) + 1,
            };
            localStorage.setItem('counts', JSON.stringify(newCounts));

            return { counts: newCounts };
        }),

    // tar bort 1 biljett, men inte under 0
    minus: (id) => {
        set((state) => {
            const current = state.counts[id] || 0;
            const newCounts = {
                ...state.counts,
                ...(current > 0 ? { [id]: current - 1 } : {})
            };

            localStorage.setItem('counts', JSON.stringify(newCounts));

            return { counts: newCounts };
        });
    },

    // lägger till i kundvagnen, eller ökar quantity om de finns redan
    addTickets: (eventWithQuantity) =>
        set((state) => {
            const exists = state.tickets.find((e) => e.id === eventWithQuantity.id)
            const newTickets = exists ?
                state.tickets.map((e) =>
                    e.id === eventWithQuantity.id
                        ? { ...e, quantity: e.quantity + eventWithQuantity.quantity }
                        : e
                    )
                : [...state.tickets, eventWithQuantity]

            localStorage.setItem('tickets', JSON.stringify(newTickets))

            return { tickets: newTickets}
        }),

    // tar bort från kundvagnen 
    removeTickets: (id) => 
        set((state) => {
            const newTickets = state.tickets.filter((e) => e.id !== id)

            localStorage.setItem('tickets', JSON.stringify(newTickets))

            return { tickets : newTickets }
        }),


        // uppdaterar quantity eller tar bort om 0
        updateTicketQuantity: (id, newQuantity) =>
            set((state) => {
              let updatedTickets;
          
              if (newQuantity <= 0) {
                updatedTickets = state.tickets.filter((ticket) => ticket.id !== id);
              } else {
                updatedTickets = state.tickets.map((ticket) =>
                  ticket.id === id ? { ...ticket, quantity: newQuantity } : ticket
                );
              }
          
              localStorage.setItem('tickets', JSON.stringify(updatedTickets));
          
              return { tickets: updatedTickets };
            }),

        // nollställer counts
        reset: () => 
            set(() => {
                const emptyCounts = {}

                localStorage.setItem('counts', JSON.stringify(emptyCounts))

                return { counts : emptyCounts }
            }),

        // syncar counts(events) och tickets(orders)
        syncCountsandTickets: () =>
            set((state) => {
                const newCounts = {}
                state.tickets.forEach((ticket) => {
                    newCounts[ticket.id] = ticket.quantity
                });
                localStorage.setItem('counts', JSON.stringify(newCounts))
                return { counts: newCounts}
            }),

        clearCart: () => {
            localStorage.removeItem('tickets')
            localStorage.removeItem('counts')
            set({ tickets: [], counts: {}})
        }
}));

export default useCartStore;
