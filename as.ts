// base
type StatusBase = 'error' | 'success' | 'warnning' | 'danger'
// 如果實際上需要 list 的話，這兩行就有點重工，可以改用 as const 寫法
const statusListBase: StatusBase[] = ['error', 'success', 'warnning', 'danger']

// as const
const statusList = ['error', 'success', 'warnning', 'danger'] as const
type Status = typeof statusList[number]
let currentStatus: Status = 'success'


// 
type Data = {
  title: string
  number: number
}

function demo() {
  const res = {
    data: {
      title: 'demo-title',
      number: 123,
    }
  }
  const data = res.data as Data
  return data
}
