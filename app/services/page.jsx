import { sections as S, SubPage } from '@/components/home/HomeSections'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({ title: 'Web Development Services', description: 'Custom web applications, websites and technical consulting by Shahnawaz Khan: my development process, frequently asked questions and client testimonials.', path: '/services' })

export default function Page() {
  return (
    <SubPage>
      <h1 className="sr-only">Web Development Services</h1>
      <S.Services /><S.ProcessIntro /><S.ProcessSteps /><S.ServicesCta /><S.Faq /><S.Testimonials /><S.TrustBadges />
    </SubPage>
  )
}
