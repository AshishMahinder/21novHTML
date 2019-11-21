const data = [1,2,3,4,5,6,7];

function replace (list){

    const [ , , ...arr] = list;
    return arr;
};

console.log(replace(data));