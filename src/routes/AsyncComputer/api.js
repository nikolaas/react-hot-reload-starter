export const api = {
    sum: async (a, b) => {
        /* eslint-disable no-console, no-unused-vars */
        console.log(`Sum request ${a} + ${b}`);
        // emulate request to backend
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(a + b);
                // reject(new Error('Some backend error'));
            }, 500);
        });
    },
};
