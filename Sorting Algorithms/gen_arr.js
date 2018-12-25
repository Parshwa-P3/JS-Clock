function gen_arr(size, up_lim = 250) {
    let i = 1;
    let arr = [];
    while (i <= size) {
        let n = floor(random(1,up_lim));
        if(!arr.includes(n)) {
            arr.push(n);
            i++;
        }
    }
    return arr;
}
