import { sections as S, SubPage } from '@/components/home/HomeSections'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({ title: 'About Shahnawaz Khan – Full-Stack Web Developer', description: 'Learn about Shahnawaz Khan, a Full Stack Web Developer in Bahawalpur, Pakistan building scalable SaaS, eCommerce, dashboards and websites with React and Node.js.', path: '/about' })

export default function Page() {
  return (
    <SubPage>
      <h1 className="sr-only">About Shahnawaz Khan</h1>
      <S.About /><S.AboutStats />
    </SubPage>
  )
}
