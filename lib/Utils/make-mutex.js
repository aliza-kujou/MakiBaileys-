"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
const makeMutex = () => {
let task = Promise.resolve()
let taskTimeout
return {
mutex(code) {
task = (async () => {
try {
await task
} catch {
// ignore
}
try {
// execute the current task
const result = await code()
return result
}
finally {
clearTimeout(taskTimeout)
}
})()
return task
},
}
}
const makeKeyedMutex = () => {
const map = {}
return {
mutex(key, task) {
if (!map[key]) {
map[key] = makeMutex()
}
return map[key].mutex(task)
}
}
}
module.exports = {
makeMutex, 
makeKeyedMutex
}