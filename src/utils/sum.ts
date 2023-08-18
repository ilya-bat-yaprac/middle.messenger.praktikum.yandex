//#TODO: delete this
export function sum(...args: any) {
    if (args.length === 0) {
        throw Error('sum required at least 1 argument')
    }

    return args.reduce((result: number, current: number) => result + current, 0);
}
