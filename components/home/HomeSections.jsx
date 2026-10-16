import About from './About'
import AboutStats from './AboutStats'
import Projects from './Projects'
import Skills from './Skills'
import SkillsStats from './SkillsStats'
import Services from './Services'
import ProcessIntro from './ProcessIntro'
import ProcessSteps from './ProcessSteps'
import ServicesCta from './ServicesCta'
import Faq from './Faq'
import Testimonials from './Testimonials'
import TrustBadges from './TrustBadges'
import BlogCta from './BlogCta'
import Contact from './Contact'

export const sections = { About, AboutStats, Projects, Skills, SkillsStats, Services, ProcessIntro, ProcessSteps, ServicesCta, Faq, Testimonials, TrustBadges, BlogCta, Contact }

/** Subpage wrapper: header is fixed, so offset content. */
export function SubPage({ children }) {
  return <main id="main-content" className="pt-[72px]">{children}</main>
}
