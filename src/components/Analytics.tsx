import { useEffect } from 'react'
import { install } from 'ga-gtag'

const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
const gtagId = process.env.NEXT_PUBLIC_GTAG_ID

let mixpanelInitialized = false

export const initAnalytics = async (): Promise<void> => {
  return new Promise<void>(async (resolve) => {
    if (
      mixpanelToken !== '' &&
      mixpanelToken !== undefined &&
      mixpanelInitialized === false
    ) {
      const mixpanel = (await import('mixpanel-browser')).default
      mixpanel.init(mixpanelToken)
      mixpanelInitialized = true
    }

    resolve()
  })
}

export const Analytics = () => {
  useEffect(() => {
    if (mixpanelToken) {
      initAnalytics()
    }

    if (gtagId) {
      install(gtagId)
    }
  }, [])
  return null
}

export enum AnalyticsEvent {
  NavClick = 'nav.click'
}

export const track = async (
  eventName: AnalyticsEvent,
  data: object
) => {
  if (!mixpanelInitialized) {
    await initAnalytics()
  }

  if (mixpanelInitialized) {
    const mixpanel = (await import('mixpanel-browser')).default
    mixpanel.track(eventName, data)
  }
}
