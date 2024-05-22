import { contextBridge, ipcRenderer } from 'electron'
if (!process.contextIsolated) {
  throw new Error('ContextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // expose the electron functionality to react app
    passData: (...args) => ipcRenderer.invoke('passData', ...args)
  })
} catch (error) {
  console.log('error in preload', error)
}
