export const composeList = (data) => {
    let groups = [[], [], []];
    let groupHeight = [0, 0, 0]; // groups의 높이를 체크

    if (data === undefined) return;

    for (let i = 0; i < data.length; i++) {
        const width = data[i].width;
        const height = data[i].height;
        const ratio = height / width;

        const minValue = Math.min(...groupHeight); // groupHeight 배열중 최소값을 할당
        const minIndex = groupHeight.indexOf(minValue); // 배열중 가장낮은 값의 위치를 할당

        groups[minIndex].push(data[i]);
        groupHeight[minIndex] = groupHeight[minIndex] + ratio;
    }


    return groups;
}