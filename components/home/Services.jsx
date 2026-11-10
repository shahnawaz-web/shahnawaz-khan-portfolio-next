import Link from 'next/link'

export default function Services() {
  return (
<section id="services" className="services dark:bg-[#050505] relative overflow-hidden pb-16 px-5 sm:px-5 md:px-7 lg:px-10 xl:px-16">{" "}<div className="absolute inset-0 pointer-events-none">
<div className="floating absolute top-0 left-0 w-75 h-75 bg-blue-500/20 blur-3xl rounded-full">
</div>{" "}<div className="floating absolute bottom-0 right-0 w-75 h-75 bg-green-500/20 blur-3xl rounded-full">
</div>
</div>{" "}<div className="flex justify-center items-center flex-col gap-4 space-y-4 pt-20 pb-14">
<h2 className="relative text-4xl sm:text-3xl text-[#1a3263] dark:text-white font-bold after:absolute after:left-30 after:-bottom-5 after:w-[30%] after:h-1 after:bg-green-600 ">{" My "}<span className="text-green-600">Services</span>
</h2>{" "}<h3 className="dark:text-white/80 text-[#1B3C53] text-[21px] font-bold mx-auto text-center">{" Digital Solutions That Move Your Business Forward "}</h3>{" "}<p className="text-[#1B3C53] dark:text-white  text-[19px] mx-auto text-center">{"Explore my web development services, designed around your business goals, performance, security, and long-term growth. "}</p>
</div>{" "}<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-start gap-9">
  {" "}
  <div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)] text-white rounded-[2em] p-6">
  <div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
    <div className="flex items-center gap-3">
      <div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
        <i className="bi bi-graph-up-arrow text-[23px]"></i>
      </div>
      <div>
        <h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">
          Business Website Growth
        </h3>
        <p className="text-[#1B3C53] dark:text-white text-[18px]">
          Turn your website into a powerful business asset that attracts visitors, builds trust, and generates qualified leads.
        </p>
      </div>
    </div>

    <div className="text-green-500 font-medium text-sm flex items-center gap-1">
      <span className="toggle-text font-medium text-md">Show Details</span>
      <i className="bi bi-chevron-down toggle-arrow transition-transform duration-300"></i>
    </div>
  </div>

  <div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
    <h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Website redesign and modern UI/UX development</li>
      <li>Conversion-focused landing pages and user journeys</li>
      <li>Technical SEO and search engine optimization</li>
      <li>Website speed and Core Web Vitals improvements</li>
      <li>Mobile-first responsive development</li>
    </ul>

    <h4 className="text-green-500 mt-6 font-medium pb-4">→ Your Benefits:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>A professional online presence that builds customer trust</li>
      <li>Better user experience across mobile, tablet, and desktop</li>
      <li>Improved visibility and opportunities to attract organic traffic</li>
      <li>Clear calls to action that encourage inquiries and conversions</li>
    </ul>

    <Link href="/#contact">
      <button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
        <span>Grow Your Business Online</span>
        <span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
      </button>
    </Link>
  </div>
</div>
<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)] text-white rounded-[2em] p-6">
  <div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
    <div className="flex items-center gap-3">
      <div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
        <i className="bi bi-cloud-check text-[23px]"></i>
      </div>
      <div>
        <h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">
          SaaS & MVP Development
        </h3>
        <p className="text-[#1B3C53] dark:text-white text-[18px]">
          Transform your product idea into a secure, scalable web application designed to solve real business problems.
        </p>
      </div>
    </div>

    <div className="text-green-500 font-medium text-sm flex items-center gap-1">
      <span className="toggle-text font-medium text-md">Show Details</span>
      <i className="bi bi-chevron-down toggle-arrow transition-transform duration-300"></i>
    </div>
  </div>

  <div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
    <h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Full-stack SaaS and MVP application development</li>
      <li>Secure authentication and role-based access control</li>
      <li>REST API development and third-party integrations</li>
      <li>Admin dashboards and business management systems</li>
      <li>Database architecture and backend development</li>
      <li>Deployment, testing, and application optimization</li>
    </ul>

    <h4 className="text-green-500 mt-6 font-medium pb-4">→ Your Benefits:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Turn your idea into a working product faster</li>
      <li>Build a reliable foundation for future product growth</li>
      <li>Manage users, data, and business operations efficiently</li>
      <li>Protect application resources with secure access controls</li>
      <li>Reduce complexity through maintainable architecture</li>
    </ul>

    <Link href="/#contact">
      <button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
        <span>Build Your SaaS Product</span>
        <span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
      </button>
    </Link>
  </div>
</div>
<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)] text-white rounded-[2em] p-6">
  <div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
    <div className="flex items-center gap-3">
      <div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
        <i className="bi bi-cart-check text-[23px]"></i>
      </div>
      <div>
        <h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">
          E-Commerce Development & Growth
        </h3>
        <p className="text-[#1B3C53] dark:text-white text-[18px]">
          Build powerful online stores that deliver seamless shopping experiences, simplify store management, and turn visitors into paying customers.
        </p>
      </div>
    </div>

    <div className="text-green-500 font-medium text-sm flex items-center gap-1">
      <span className="toggle-text font-medium text-md">Show Details</span>
      <i className="bi bi-chevron-down toggle-arrow transition-transform duration-300"></i>
    </div>
  </div>

  <div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
    <h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Custom e-commerce website and online store development</li>
      <li>Product catalogs, categories, filters, and search functionality</li>
      <li>Shopping cart, checkout, and payment gateway integration</li>
      <li>Inventory, order, and product management systems</li>
      <li>Customer accounts and order tracking functionality</li>
      <li>Shipping, email, and third-party API integrations</li>
      <li>E-commerce SEO, speed, and conversion optimization</li>
    </ul>

    <h4 className="text-green-500 mt-6 font-medium pb-4">→ Your Benefits:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Launch and manage your online business professionally</li>
      <li>Deliver a smooth shopping experience across all devices</li>
      <li>Simplify product, inventory, and order management</li>
      <li>Make purchasing easier with streamlined checkout experiences</li>
      <li>Build customer trust through reliable and secure functionality</li>
      <li>Create a scalable online store ready for business growth</li>
    </ul>

    <Link href="/#contact">
      <button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
        <span>Build Your Online Store</span>
        <span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
      </button>
    </Link>
  </div>
</div>
<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)] text-white rounded-[2em] p-6">
  <div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
    <div className="flex items-center gap-3">
      <div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
        <i className="bi bi-diagram-3 text-[23px]"></i>
      </div>
      <div>
        <h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">
          Business Automation & Workflow Systems
        </h3>
        <p className="text-[#1B3C53] dark:text-white text-[18px]">
          Eliminate repetitive tasks, streamline daily operations, and connect your business processes with intelligent custom software solutions.
        </p>
      </div>
    </div>

    <div className="text-green-500 font-medium text-sm flex items-center gap-1">
      <span className="toggle-text font-medium text-md">Show Details</span>
      <i className="bi bi-chevron-down toggle-arrow transition-transform duration-300"></i>
    </div>
  </div>

  <div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
    <h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Custom business management and workflow automation systems</li>
      <li>CRM and lead management solutions</li>
      <li>Automated email, notification, and follow-up workflows</li>
      <li>Appointment booking and scheduling systems</li>
      <li>Invoice, reporting, and data management automation</li>
      <li>Third-party API integrations and system connectivity</li>
      <li>Admin dashboards, user management, and role-based access</li>
    </ul>

    <h4 className="text-green-500 mt-6 font-medium pb-4">→ Your Benefits:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Reduce repetitive manual work and operational overhead</li>
      <li>Save valuable time through automated business processes</li>
      <li>Manage customers, employees, and operations centrally</li>
      <li>Minimize human errors and improve workflow consistency</li>
      <li>Get better visibility into business activities and performance</li>
      <li>Scale business operations with organized digital systems</li>
    </ul>

    <Link href="/#contact">
      <button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
        <span>Automate Your Business</span>
        <span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
      </button>
    </Link>
  </div>
</div>
<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)] text-white rounded-[2em] p-6">
  <div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
    <div className="flex items-center gap-3">
      <div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
        <i className="bi bi-speedometer2 text-[23px]"></i>
      </div>
      <div>
        <h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">
          Web App Optimization & Maintenance
        </h3>
        <p className="text-[#1B3C53] dark:text-white text-[18px]">
          Improve your existing application with better performance, stronger security, and reliable long-term maintenance.
        </p>
      </div>
    </div>

    <div className="text-green-500 font-medium text-sm flex items-center gap-1">
      <span className="toggle-text font-medium text-md">Show Details</span>
      <i className="bi bi-chevron-down toggle-arrow transition-transform duration-300"></i>
    </div>
  </div>

  <div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
    <h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Core Web Vitals and website performance optimization</li>
      <li>Technical troubleshooting and bug fixing</li>
      <li>Application security and vulnerability improvements</li>
      <li>API, database, and backend performance optimization</li>
      <li>Code refactoring and architecture improvements</li>
      <li>Ongoing maintenance, updates, and technical support</li>
    </ul>

    <h4 className="text-green-500 mt-6 font-medium pb-4">→ Your Benefits:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Faster loading and smoother application experiences</li>
      <li>More reliable systems with fewer technical issues</li>
      <li>Improved security and reduced operational risks</li>
      <li>Better maintainability and easier future development</li>
      <li>Less downtime and more dependable application performance</li>
    </ul>

    <Link href="/#contact">
      <button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
        <span>Optimize Your Application</span>
        <span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
      </button>
    </Link>
  </div>
</div>
<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)] text-white rounded-[2em] p-6">
  <div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
    <div className="flex items-center gap-3">
      <div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
        <i className="bi bi-plug text-[23px]"></i>
      </div>
      <div>
        <h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">
          API & Third-Party Integrations
        </h3>
        <p className="text-[#1B3C53] dark:text-white text-[18px]">
          Connect your applications, automate data exchange, and extend business functionality with secure, reliable, and scalable API integrations.
        </p>
      </div>
    </div>

    <div className="text-green-500 font-medium text-sm flex items-center gap-1">
      <span className="toggle-text font-medium text-md">Show Details</span>
      <i className="bi bi-chevron-down toggle-arrow transition-transform duration-300"></i>
    </div>
  </div>

  <div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
    <h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Custom REST API development and integration</li>
      <li>Third-party API integration and data synchronization</li>
      <li>Secure authentication and authorization using JWT and OAuth</li>
      <li>Payment gateway and transaction API integration</li>
      <li>Email, SMS, maps, and cloud service integrations</li>
      <li>Webhooks and automated event-driven workflows</li>
      <li>API documentation, testing, and troubleshooting</li>
      <li>API security, error handling, and performance optimization</li>
    </ul>

    <h4 className="text-green-500 mt-6 font-medium pb-4">→ Your Benefits:</h4>
    <ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
      <li>Connect different business applications seamlessly</li>
      <li>Eliminate repetitive manual data entry and transfers</li>
      <li>Improve communication between systems and services</li>
      <li>Enable secure and reliable data exchange</li>
      <li>Extend application functionality without rebuilding existing systems</li>
      <li>Build flexible integrations that support future business growth</li>
    </ul>

    <Link href="/#contact">
      <button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
        <span>Connect Your Applications</span>
        <span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
      </button>
    </Link>
  </div>
</div>
  
</div>
</section>
  )
}
