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
    minus: (id) =>
        set((state) => ({
            counts: {
                ...state.counts,
                [id]: Math.max((state.counts[id] || 1) - 1, 1),
            },
        })),
    }));

export default useCartStore;