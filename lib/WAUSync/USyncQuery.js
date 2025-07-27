"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
const WABinary_1 = require("../WABinary")
const Protocols_1 = require("./Protocols")
class USyncQuery {
constructor() {
this.protocols = []
this.users = []
this.context = 'interactive'
this.mode = 'query'
}
withMode(mode) {
this.mode = mode
return this
}
withContext(context) {
this.context = context
return this
}
withUser(user) {
this.users.push(user)
return this
}
parseUSyncQueryResult(result) {
if (result.attrs.type !== 'result') {
return
}
const protocolMap = Object.fromEntries(this.protocols.map((protocol) => {
return [protocol.name, protocol.parser]
}))
const queryResult = {
list: [],
sideList: [],
errors: []
}
const usyncNode = WABinary_1.getBinaryNodeChild(result, 'usync')
const errorNode = WABinary_1.getBinaryNodeChild(usyncNode, 'error')
if (errorNode) {
const code = errorNode.attrs.code
const retryAfter = parseInt(errorNode.attrs['retry-after'] || '30')
return new Promise(res => {
setTimeout(() => {
res({
list: [],
sideList: [],
errors: [{ code, retryAfter, node: usyncNode }]
})
}, retryAfter * 1000)
})
}
const resultNode = WABinary_1.getBinaryNodeChild(usyncNode, 'result')
if (!resultNode) {
return {
list: [],
sideList: [],
errors: [{ message: 'No result node', node: usyncNode }]
}
}
const listNode = WABinary_1.getBinaryNodeChild(usyncNode, 'list')
if (Array.isArray(listNode?.content) && typeof listNode !== 'undefined') {
queryResult.list = listNode.content.map((node) => {
const id = node?.attrs?.jid
const data = Array.isArray(node?.content) ? Object.fromEntries(node.content.map((content) => {
const protocol = content.tag
const parser = protocolMap[protocol]
if (parser) {
return [protocol, parser(content)]
}
else {
return [protocol, null]
}
}).filter(([, b]) => b !== null)) : {}
return { ...data, id }
})
}
const sideListNode = WABinary_1.getBinaryNodeChild(usyncNode, 'side_list')
if (sideListNode && Array.isArray(sideListNode.content)) {
for (const node of sideListNode.content) {
try {
const jid = node.attrs?.jid
if (!jid) throw new Error('Missing jid')
queryResult.sideList.push({
jid,
phash: node.attrs.phash,
ts: node.attrs.ts ? parseInt(node.attrs.ts) : undefined,
expectedTs: node.attrs.expectedTs ? parseInt(node.attrs.expectedTs) : undefined
})
} catch (e) {
queryResult.errors?.push?.({
type: 'sideListParseError',
node,
error: e.message
})
}
}
}
return queryResult
}
withLIDProtocol() {
this.protocols.push(new Protocols_1.USyncLIDProtocol()) 
return this
}
withDeviceProtocol() {
this.protocols.push(new Protocols_1.USyncDeviceProtocol())
return this
}
withContactProtocol() {
this.protocols.push(new Protocols_1.USyncContactProtocol())
return this
}
withStatusProtocol() {
this.protocols.push(new Protocols_1.USyncStatusProtocol())
return this
}
withBotProfileProtocol() {
this.protocols.push(new Protocols_1.USyncBotProfileProtocol())
return this
}
withDisappearingModeProtocol() {
this.protocols.push(new Protocols_1.USyncDisappearingModeProtocol())
return this
}
}
module.exports = {
USyncQuery
}