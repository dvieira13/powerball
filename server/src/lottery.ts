export function getRandomNumber(max_number: number): number {
    return Math.floor(Math.random() * max_number) + 1;
}

function sortNumbersAscending(arr: number[]): number[] {
    return arr.slice().sort((a, b) => a - b);
}

export function getBallValues(max_number: number): number[] {
    const values: number[] = [];

    if (max_number < 5) {
        throw new Error("max_number must be at least 5 to generate 5 unique values");
    }

    // generate 5 random numbers between 1 and 69
    while (values.length < 5) {
        const num = Math.floor(Math.random() * max_number) + 1;

        // only add if not already in the array to avoid duplicates
        if (!values.includes(num)) {
            values.push(num);
        }
    }

    return sortNumbersAscending(values);
}

