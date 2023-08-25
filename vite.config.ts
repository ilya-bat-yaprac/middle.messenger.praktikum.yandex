// @ts-ignore
import { defineConfig } from 'vite'

export default defineConfig(({ command }: any) => {
    if (command === 'serve') {
        return {
            // serve specific config
        }
    } else {
        return {
            // build specific config
        }
    }
})
