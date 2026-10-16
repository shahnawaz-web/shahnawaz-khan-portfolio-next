import { sections as S, SubPage } from '@/components/home/HomeSections'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({ title: "Contact – Let's Build Something Amazing", description: 'Tell Shahnawaz Khan about your project and get a reply within 24 hours with next steps. Web apps, SaaS, eCommerce and consulting.', path: '/contact' })

export default function Page() {
  return (
    <SubPage>
      <h1 className="sr-only">Contact Shahnawaz Khan</h1>
      <S.Contact />
    </SubPage>
  )
}
