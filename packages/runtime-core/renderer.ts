import { RendererElement, RendererOptions } from "./componentOptions"

export type RootRenderFunction<HostElement = RendererElement> = (
  message: string,
  container: HostElement,
) => void

export function createRenderer(options: RendererOptions) {
  const { setElementText: hostSetElementText } = options

  const render: RootRenderFunction = (message, container) => {
    hostSetElementText(container, message) // 今回はメッセージを挿入するだけなのでこういう実装になっている
  }

  return { render }
}