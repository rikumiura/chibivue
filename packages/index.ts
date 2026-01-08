export type Options = {
    render: () => string
}

export type App = {
    mount: (selector: string) => void
}

export const createApp = (options: Options): App => {
  return {
    mount: selector => {
      const root = document.querySelector(selector)
      if (root) {
        root.innerHTML = options.render()
      }
    },
  }
}


// import { createApp } from 'vue'

// const app = createApp({
//   render() {
//     return 'Hello world.'
//   },
// })

// app.mount('#app')