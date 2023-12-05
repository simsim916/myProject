'use strict';

const students = {
    '김수미': '체함',
    '전예원': '지각함',
    '최문석': '피나옴',
    '백승현': '대따큼',
    '임시운': '멍~멍~',
    '김수빈': '여자아님',
    '이정혁': '으하하하',
    '봉민지': '번쩍~ 뺀질',
};

const students2 = [
    '김창민', '이지현', '주용현', '이혜나',
    '임명건', '장근정', '김수옥', '조아라',
];

/* 
   students 객체를 가공해서 두 개의 배열로 분리. ( 단, 두 개의 배열은 크기가 미리 할당되어 있어야함 )
   첫 번째 배열에는 키를 저장.
   두 번째 배열에는 값을 저장.
   반환할 때에는 하나의 배열로 반환. 그 하나의 배열에는 앞의 두 배열이 요소로 포함.
*/

function separateStudents(object) {
    let key = [],
        value = [];
    let num = 0;
    for (let i in object){
        key[num]=i;
        value[num]=object[i];
        num++;
    }
    return [key,value]
}

const [studentsKey, studentsValue] = (separateStudents(students))

/* ========================================================== */

const studentsName = {},
    studentsCharacter = {};
for (let i = 0; i < studentsKey.length ; i++){
    studentsName[studentsKey[i]] = i+1;
    studentsCharacter[students2[i]] = studentsValue[i]
}
console.log(studentsName);
console.log(studentsCharacter);
