"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
const WABinary_1 = require("../../WABinary")
class USyncDeviceProtocol {
constructor() {
this.name = 'devices'
}
getQueryElement() {
return {
tag: 'devices',
attrs: {
version: '2',
},
}
}
getUserElement(user) {
const { phash, ts, expectedTs } = user || {}
if (!phash && !ts && !expectedTs) {
return null
}
const attrs = {}
if (phash) attrs.phash = phash
if (ts) attrs.ts = ts.toString()
if (expectedTs) attrs.expectedTs = expectedTs.toString()
return {
tag: 'devices',
attrs
}
}
parser(node) {
const deviceList = []
let keyIndex = undefined
if (node.tag === 'devices') {
WABinary_1.assertNodeErrorFree(node)
const deviceListNode = WABinary_1.getBinaryNodeChild(node, 'device-list')
const keyIndexNode = WABinary_1.getBinaryNodeChild(node, 'key-index-list')
if (Array.isArray(deviceListNode?.content)) {
for (const { tag, attrs } of deviceListNode.content) {
const id = +attrs.id
const keyIndex = +attrs['key-index']
if (tag === 'device') {
deviceList.push({
id,
keyIndex,
isHosted: !!(attrs['is_hosted'] && attrs['is_hosted'] === 'true')
})
}
}
}
if (keyIndexNode?.tag === 'key-index-list') {
keyIndex = {
timestamp: +keyIndexNode.attrs['ts'],
signedKeyIndex: keyIndexNode?.content,
expectedTimestamp: keyIndexNode.attrs['expected_ts'] ? +keyIndexNode.attrs['expected_ts'] : undefined
}
}
}
return {
deviceList,
keyIndex
}
}
}
module.exports = {
USyncDeviceProtocol
}