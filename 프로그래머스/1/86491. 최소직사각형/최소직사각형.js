function solution(sizes) {
    var x = [], y = [];
    
    for (let size of sizes) {
        if (size[0] > size[1]) {
            x.push([size[0]]);
            y.push([size[1]]);
        } else {
            x.push([size[1]]);
            y.push([size[0]]);
        }
    }
    
    return Math.max(...x)*Math.max(...y)
}