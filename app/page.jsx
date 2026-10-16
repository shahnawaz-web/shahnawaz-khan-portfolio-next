import HeroSection from '@/components/home/HeroSection'
import { sections as S } from '@/components/home/HomeSections'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, SOCIALS, OG_IMAGE } from '@/lib/site'
import { homeSchemas } from '@/lib/schema'

export const metadata = {
  title: { absolute: 'Shahnawaz Khan | Full-Stack Web & SaaS Developer in Pakistan' },
  description: 'Full Stack Developer helping businesses build scalable SaaS, eCommerce, dashboards & websites with React, Node.js & API integration | Bahawalpur, Pakistan',
  keywords: ['full stack developer in Pakistan', 'React and Node.js developer', 'web developer in Bahawalpur', 'freelance web developer in Pakistan', 'Shahnawaz Khan Web Developer', 'ecommerce website', 'SaaS product development', 'JavaScript full stack', 'responsive web design expert', 'custom web application developer'],
  alternates: { canonical: SITE_URL + '/' },
  openGraph: {
    type: 'website', url: SITE_URL + '/', siteName: 'Shahnawaz Khan Portfolio', locale: 'en_US',
    title: 'Shahnawaz Khan | Full Stack Web Developer for Scalable Web Apps',
    description: 'Full Stack Web Developer helping businesses build fast, scalable, and user-focused web applications using React, Node.js, and MongoDB. Delivering high-performance digital solutions that drive growth.',
    images: [{ url: OG_IMAGE, width: 1360, height: 714, alt: 'Shahnawaz Khan - Full Stack Web Developer Portfolio' }],
  },
  twitter: { card: 'summary_large_image', site: '@shahnawaz_code', creator: '@shahnawaz_code', title: 'Shahnawaz Khan - Full-Stack Web Developer | React & Node.js Specialist', description: 'Full Stack Web Developer from Bahawalpur, Pakistan with experience in React, Node.js, and other modern Web Technologies. Helping businesses build high-performance, user-centric digital products.', images: [OG_IMAGE] },
}

export default function Home() {
  return (
    <>
      {homeSchemas().map((s, i) => <JsonLd key={i} data={s} />)}
      <div className="hero"><HeroSection /></div>
      <main id="main-content" className="pt-0 ">
        <S.About /><S.AboutStats /><S.Projects /><S.Skills /><S.SkillsStats /><S.Services />
        <S.ProcessIntro /><S.ProcessSteps /><S.ServicesCta /><S.Faq /><S.Testimonials /><S.TrustBadges />
        <S.BlogCta /><S.Contact />
      </main>
    </>
  )
}
