import { sections as S, SubPage } from '@/components/home/HomeSections'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({ title: 'Skills, Tools & Expertise', description: 'Technical skills, tools and expertise of Shahnawaz Khan: frontend, backend, databases and developer tooling for modern web and SaaS products.', path: '/skills' })

export default function Page() {
  return (
    <SubPage>
      <h1 className="sr-only">Skills, Tools &amp; Expertise</h1>
      <S.Skills /><S.SkillsStats />
    </SubPage>
  )
}
