export function increment(delta = 1) {
    return { type: 'increment', payload: delta };
}
