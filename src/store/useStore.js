import { create } from 'zustand';

// Define el store
const useStore = create((set) => ({

    items: [], // Estado inicial es un array vacío

    // Función para agregar un objeto al array
    addItem: (item) => set((state) => ({
        items: [...state.items, item],
    })),

    // Función para eliminar un objeto del array por un índice
    removeItem: (index) => set((state) => ({
        items: state.items.filter((_, i) => i !== index),
    })),

    // Función para actualizar un objeto en el array por un índice
    updateItem: (index, newItem) => set((state) => ({
        items: state.items.map((item, i) =>
            i === index ? newItem : item
        ),
    })),
    setItems: (item) => set((state) => ({
        items: item,
    })),
}));

export default useStore;
