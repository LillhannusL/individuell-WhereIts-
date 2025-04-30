import { create } from "zustand"

const useCartStore = create((set) => ({
    counts: {},

    plus: (id) =>
        set((state) => ({
            counts: {
                ...state.counts,
                [id]: (state.counts[id] || 0) + 1
            }
        })),
    minus: (id) => {

        set((state) => {
            const current = state.counts[id] || 0
            
            if(current > 0) {
                return {
                    counts: {
                        ...state.counts,
                        [id]: current - 1,
                    },
                };
            } else {
                return {
                    counts: {
                        ...state.counts, 
                        [id]: 0,
                    },
                };
            }
        });
    },
    reset: (id) => {set({counts : 0 })}
}))

export default useCartStore;