const answer = [
    { cate : "E" },
    { cate : "E" },
    { cate : "I" },
    { cate : "S" },
    { cate : "N" },
    { cate : "N" },
    { cate : "F" },
    { cate : "F" },
    { cate : "T" },
    { cate : "J" },
    { cate : "J" },
    { cate : "J" }
];

const mbti = function(answer) {
    let result = ""
    let e = 0, i = 0, n = 0, s = 0, f = 0, t = 0, j = 0, p = 0;
    answer.forEach(({ cate }, index) => {
        if(index<3) {
            cate === 'E' ? e++ : i++;
        }else if(index<6) {
            cate === 'N' ? n++ : s++;
        }else if(index<9) {
            cate === 'F' ? f++ : t++;
        }else if(index<12) {
            cate === 'J' ? j++ : p++; 
        }
    });
    result = e > i ? 'E' : 'I';
    result += n > s ? 'N' : 'S';
    result += f > t ? 'F' : 'T';
    result += j > p ? 'J' : 'P';
    console.log(result);
    return result;
}

mbti(answer);