// 陣列
let arr: string[] = ['a', 'b']
let arr2: string[][] = [['a', 'b'], ['c']]

// 元組
let tuple: [number, string, boolean] = [1, 'aaa', true] // 固定順序

// 二維元組
let tuple2: [string, string][] = [['aaa', 'bbb'], ['cc', 'd']]

// type
type A = number | string
let a1: A = 123
let a2: A = '123'

// interface
interface todoListInterface {
  title: string
  status: string
}

// 擴充-01 todoListInterface
interface todoListInterface {
  detail: string
  other?: string // 選填
}

const obj: todoListInterface = {
  title: 'demo-title',
  status: 'done',
  detail: '測試測試'
}

// 擴充-02(繼承) todoListInterface
interface todoListInterface_2 extends todoListInterface {
  detail: string
  other?: string // 選填
}

const obj2: todoListInterface = {
  title: 'demo-title',
  status: 'done',
  detail: '測試測試'
}

// 擴充-03 todoListInterface
const obj3: todoListInterface & { day: string } = {
  title: 'demo-title',
  status: 'done',
  detail: '測試測試',
  day: '2022-08-11'
}

// function
function demoAdd (a: number, b: number): number { // 指定回傳的型態為 number
  return a + b
}
console.log(demoAdd(77, 123))
