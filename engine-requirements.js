const major = parseInt(process.versions.node.split('.')[0], 10)
if (major < 20) {
  console.error(
    `\n❌ ¡Ups! Tu versión de Node.js es demasiado antigua...\n` +
    `   Se requiere: Node.js v20 o superior\n` +
    `   Actual: v${process.versions.node}\n\n` +
    `   🚀 ¡Actualiza ahora para no quedarte atrás!\n`
  )
  process.exit(1)
}