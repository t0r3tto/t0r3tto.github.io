export function loadMatomo() {
  if (typeof window === 'undefined') return

  const _paq = (window as any)._paq = (window as any)._paq || []
  _paq.push(['setDocumentTitle', document.domain + '/' + document.title])
  _paq.push(['setCookieDomain', '*.toretto.dev'])
  _paq.push(['trackPageView'])
  _paq.push(['enableLinkTracking'])

  const u = '//toretto.dev/matomo/'
  _paq.push(['setTrackerUrl', u + 'matomo.php'])
  _paq.push(['setSiteId', '1'])

  const d = document
  const g = d.createElement('script')
  const s = d.getElementsByTagName('script')[0]
  g.async = true
  g.src = u + 'matomo.js'
  if (s.parentNode) {
    s.parentNode.insertBefore(g, s)
  }
}