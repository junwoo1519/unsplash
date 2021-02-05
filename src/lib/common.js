export const composeList = (list) => {
    let group1 = [];
    let group2 = [];
    let group3 = [];

    for (let i = 0; i < list.length; i++) {
        if (i % 3 === 0) {
            group1.push(list[i]);
        }
        if (i % 3 === 1) {
            group2.push(list[i]);
        }
        if (i % 3 === 2) {
            group3.push(list[i]);
        }
    }

    return [group1, group2, group3];
}