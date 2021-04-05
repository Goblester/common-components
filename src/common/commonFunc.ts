export const ChangeValueOnKeyPress = (directory: 'up' | 'down', items: any[], valueProp: string, value: any) => {
    debugger;
    const newIndex = items.reduce((acc, cur, ind) => {
        if (cur[valueProp] === value) {
            if (directory === 'up') {
                return ind - 1;
            }
            return ind + 1;
        }
        return acc;
    }, -2);

    if (newIndex === items.length || newIndex === -2) {
        return 0;
    } else if (newIndex  < 0) {
        return items.length - 1;
    }

    return newIndex;

}