const clear_function = () => console.clear();
Object.defineProperty(globalThis, 'clear', { get: clear_function });



