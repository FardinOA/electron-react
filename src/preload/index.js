import { contextBridge } from 'electron'
if (!process.contextIsolated) {
  throw new Error('ContextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO: expose the electron functionality to react app
  })
} catch (error) {
  console.log(error)
}
