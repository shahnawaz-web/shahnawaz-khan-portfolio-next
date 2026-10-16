import { sections as S, SubPage } from '@/components/home/HomeSections'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({ title: 'Projects & Case Studies', description: 'Selected web apps and projects built by Shahnawaz Khan with React, Node.js, JavaScript and API integrations.', path: '/projects' })

export default function Page() {
  return (
    <SubPage>
      <h1 className="sr-only">Projects</h1>
      <S.Projects />
    </SubPage>
  )
}
