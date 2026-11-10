import Script from 'next/script'
import 'swiper/css/bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './globals.css'
import './legacy.css'
import './extras.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProjectModal from '@/components/home/ProjectModal'
import GithubModal from '@/components/home/GithubModal'
import SiteBehaviors from '@/components/SiteBehaviors'
import { SITE_URL } from '@/lib/site'
import { SpeedInsights } from '@vercel/speed-insights/next'
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#86efac' }

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Shahnawaz Khan | Full-Stack Web & SaaS Developer in Pakistan', template: '%s | Shahnawaz Khan' },
  description: 'Build better business websites, SaaS products, and custom web applications with Shahnawaz Khan. Explore projects, development services, and performance optimization.',
  authors: [{ name: 'Shahnawaz Khan' }],
  creator: 'Shahnawaz Khan',
  robots: { index: true, follow: true },
  icons: { icon: '/assets/images/icons/shahnawaz-khan-web-developer-favicon.webp', apple: '/shahnawaz-khan-web-portfolio-favican.webp' },
  appleWebApp: { capable: true, title: 'Shahnawaz Khan', statusBarStyle: 'black-translucent' },
  other: { 'geo.region': 'PK-BA', 'geo.placename': 'Bahawalpur', 'geo.position': '29.4;71.6', ICBM: '29.4, 71.6', 'msapplication-TileColor': '#0e101b' },
}

// Light is the default for first-time visitors; a saved choice wins. Runs before paint (no flash).
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}`
const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '1452435199226479'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="scroll-smooth  dark:bg-black bg-[#dee7f7]  text-gray-900 dark:text-white transition duration-300 ">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        {children}
        <Footer />
        <ProjectModal />
        <GithubModal />
        <SiteBehaviors />
        {PIXEL && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL}');fbq('track','PageView');`}</Script>
            <noscript><img height="1" width="1" style={{ display: 'none' }} alt="" src={`https://www.facebook.com/tr?id=${PIXEL}&ev=PageView&noscript=1`} /></noscript>
          </>
        )}
      </body>
    </html>
  )
}
