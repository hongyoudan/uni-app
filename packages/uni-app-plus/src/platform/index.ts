import {
  AddIntersectionObserverArgs,
  AddMediaQueryObserverArgs,
  RemoveIntersectionObserverArgs,
  RemoveMediaQueryObserverArgs,
} from '@dcloudio/uni-api'

export { getBaseSystemInfo } from '../service/api/base/getBaseSystemInfo'
export { requestComponentInfo } from '../service/api/ui/requestComponentInfo'
export { getRealPath } from './getRealPath'
export { operateVideoPlayer } from '../service/api/context/operateVideoPlayer'
export { operateMap } from '../service/api/context/operateMap'

export function addIntersectionObserver(
  args: AddIntersectionObserverArgs,
  pageId: number
) {}
export function removeIntersectionObserver(
  args: RemoveIntersectionObserverArgs,
  pageId: number
) {}
export function addMediaQueryObserver(
  args: AddMediaQueryObserverArgs,
  pageId: number
) {}
export function removeMediaQueryObserver(
  args: RemoveMediaQueryObserverArgs,
  pageId: number
) {}
export function saveImage(
  base64: string,
  dirname: string,
  callback: (error: Error | null, tempFilePath: string) => void
) {}
export function getSameOriginUrl(url: string): Promise<string> {
  return Promise.resolve(url)
}
export const TEMP_PATH = ''