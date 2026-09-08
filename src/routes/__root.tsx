import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

const SITE_URL = 'https://roaring-figolla-f25c05.netlify.app'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title:
          'Fouzia Kousar | Digital Marketing Specialist, Shopify Expert & eBay Consultant',
      },
      {
        name: 'description',
        content:
          'Fouzia Kousar is a Digital Marketing Specialist, Shopify Expert and eBay Consultant helping businesses grow through Shopify, Meta Ads, e-commerce marketing and social media.',
      },
      {
        name: 'keywords',
        content:
          'Digital Marketing Specialist, Shopify Expert, Shopify Developer, eBay Consultant, eBay Expert, Meta Ads Expert, Social Media Marketing, E-commerce Marketing, Shopify Store Development',
      },
      { name: 'author', content: 'Fouzia Kousar' },
      { name: 'theme-color', content: '#0b0b0c' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL },
      {
        property: 'og:title',
        content:
          'Fouzia Kousar | Digital Marketing Specialist, Shopify Expert & eBay Consultant',
      },
      {
        property: 'og:description',
        content:
          'Helping e-commerce brands grow, sell and scale through Shopify, Meta Ads, eBay and e-commerce marketing strategy.',
      },
      { property: 'og:image', content: `${SITE_URL}/og-cover.svg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'Fouzia Kousar | Digital Marketing Specialist, Shopify Expert & eBay Consultant',
      },
      {
        name: 'twitter:description',
        content:
          'Helping e-commerce brands grow, sell and scale through Shopify, Meta Ads, eBay and e-commerce marketing strategy.',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,450;0,9..144,600;0,9..144,700;1,9..144,500&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
