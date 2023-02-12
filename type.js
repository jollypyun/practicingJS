const number = 1 // primitive  type
const num2 = number

console.log(num2)

const person = {
    name: 'Max'
}
const secondPerson = person
person.name = 'maun'

console.log(secondPerson)
/*
    number, string, boolean 등을 기본형 자료 타입 -> 재할당하거나 변수를 다른 변수를 저장할 때마다 값을 복사

    객체, 배열 : 참조형 타입 -> 복사하는 개념이 아니다. 객체는 메모리에 저장되고 상수는 메모리에 있는 주소를 가리키는 포인터를 저장. 그렇기에 다른 변수가 참조형 타입은 복사할 때 포인터가 값이나 객체가 아닌 포인터가 복사된다.
*/


// 변경할 수 없는 방법으로 복사하는 방법 -> 포인터가 아닌 객체를 복사하는 법 : 스프레드 연산자 -> 프로퍼티를 복사
const newPerson = {
    name: 'Tom'
}

const copyPerson = {
    ...newPerson
}

newPerson.name = 'Jerry'

console.log(copyPerson)
// 이 경우에는 포인터를 복사한 것이 아닌 실제 복사본을 생성하였다.