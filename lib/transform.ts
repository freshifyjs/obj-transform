export function pickFields<T extends Record<string, any>, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
    return Object.fromEntries(keys.map((key) => [key, obj[key]])) as Pick<T, K>;
}

export function pickFieldsFromArray<T extends Record<string, any>, K extends keyof T>(arr: readonly T[], keys: readonly K[]): Pick<T, K>[] {
    return arr.map((item) => pickFields(item, keys));
}

export function omitFields<T extends Record<string, any>, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K> {
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}

export function omitFieldsFromArray<T extends Record<string, any>, K extends keyof T>(arr: readonly T[], keys: readonly K[]): Omit<T, K>[] {
    return arr.map((item) => omitFields(item, keys));
}
