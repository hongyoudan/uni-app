import { ComponentPublicInstance } from 'vue'
import {
  API_SWITCH_TAB,
  API_TYPE_SWITCH_TAB,
  defineAsyncApi,
  SwitchTabOptions,
  SwitchTabProtocol,
} from '@dcloudio/uni-api'
import { getCurrentPageVm, invokeHook } from '@dcloudio/uni-core'
import { getCurrentPagesMap, removePage } from '../../../framework/setup/page'
import { navigate } from './utils'
import { ON_HIDE } from '@dcloudio/uni-shared'

function removeNonTabBarPages() {
  const curTabBarPageVm = getCurrentPageVm()
  if (!curTabBarPageVm) {
    return
  }
  const pagesMap = getCurrentPagesMap()
  const keys = pagesMap.keys()
  for (const routeKey of keys) {
    const page = pagesMap.get(routeKey) as ComponentPublicInstance
    if (!page.__isTabBar) {
      removePage(routeKey)
    } else {
      page.$.__isActive = false
    }
  }
  if (curTabBarPageVm.__isTabBar) {
    curTabBarPageVm.$.__isVisible = false
    invokeHook(curTabBarPageVm, ON_HIDE)
  }
}

function getTabBarPageId(url: string) {
  const pages = getCurrentPagesMap().values()
  for (const page of pages) {
    const $page = page.$page
    if ($page.path === url) {
      ;(page as ComponentPublicInstance).$.__isActive = true
      return $page.id
    }
  }
}

export const switchTab = defineAsyncApi<API_TYPE_SWITCH_TAB>(
  API_SWITCH_TAB,
  ({ url }, { resolve, reject }) => {
    return (
      removeNonTabBarPages(),
      navigate(API_SWITCH_TAB, url, getTabBarPageId(url))
        .then(resolve)
        .catch(reject)
    )
  },
  SwitchTabProtocol,
  SwitchTabOptions
)