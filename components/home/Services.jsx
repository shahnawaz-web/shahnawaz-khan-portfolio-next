import Link from 'next/link'

export default function Services() {
  return (
<section id="services" className="services dark:bg-[#050505] relative overflow-hidden pb-16 px-5 sm:px-5 md:px-7 lg:px-10 xl:px-16">{" "}<div className="absolute inset-0 pointer-events-none">
<div className="floating absolute top-0 left-0 w-75 h-75 bg-blue-500/20 blur-3xl rounded-full">
</div>{" "}<div className="floating absolute bottom-0 right-0 w-75 h-75 bg-green-500/20 blur-3xl rounded-full">
</div>
</div>{" "}<div className="flex justify-center items-center flex-col gap-4 space-y-4 pt-20 pb-14">
<h2 className="relative text-4xl sm:text-3xl text-[#1a3263] dark:text-white font-bold after:absolute after:left-30 after:-bottom-5 after:w-[30%] after:h-1 after:bg-green-600 ">{" My "}<span className="text-green-600">Services</span>
</h2>{" "}<h3 className="dark:text-white/80 text-[#1B3C53] text-[21px] font-bold mx-auto text-center">{" How I Can Help? "}</h3>{" "}<p className="text-[#1B3C53] dark:text-white  text-[19px] mx-auto text-center">{" From a single landing page to a full multi-tenant SaaS platform - here's the full range of what I build, end to end. "}</p>
</div>{" "}<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-start gap-9">{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-code-slash text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">{" Custom Web Applications "}</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" A web app built around how your business actually works — not bent to fit someone else's template. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 mt-2 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Requirements discovery mapped to your actual workflow</li>{" "}<li>Full custom build - frontend, backend, and database</li>{" "}<li>Business logic modeled around your rules, not a generic template</li>{" "}<li>Architecture planned to support future features</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Software that fits your process instead of forcing you to adapt to it</li>{" "}<li>No licensing limits or plugin dependencies to work around</li>{" "}<li>A foundation that can grow into new features without a rebuild</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600  my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Build My Custom Application</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-palette text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">Frontend Development</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" Interfaces that load fast, feel intuitive, and guide visitors to the action you want them to take. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Pixel-perfect UI implementation from design files</li>{" "}<li>Reusable, well-structured component architecture</li>{" "}<li>Accessible, mobile-first responsive layouts</li>{" "}<li>Cross-browser and cross-device testing</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>An interface that feels intuitive on the first visit</li>{" "}<li>Consistent experience across every device your audience uses</li>{" "}<li>A frontend that's easy to extend as you add features</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Build a Stunning Interface</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-gear text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">Backend Development</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" The business logic and server architecture behind the scenes, built to stay reliable as you grow. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Server-side architecture and business logic design</li>{" "}<li>Node.js / Express service layer development</li>{" "}<li>Background jobs, queues, and scheduled tasks</li>{" "}<li>Error handling and structured logging</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>A system that holds up during your busiest traffic days</li>{" "}<li>Clear separation of concerns that's easy to hand off or extend</li>{" "}<li>Fewer surprise bugs because logic is tested, not bolted on</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Build My Backend</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-database text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">Database Development</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" A schema designed for your actual queries, not one that starts slowing down the day you get real traffic. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Schema design for SQL and NoSQL (MongoDB, PostgreSQL)</li>{" "}<li>Indexing and query optimization</li>{" "}<li>Data migration and seeding strategies</li>{" "}<li>Backup and recovery planning</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Queries that stay fast as your data grows, not just at launch</li>{" "}<li>A structure that supports new features without a rework</li>{" "}<li>Your data protected with a real backup and recovery plan</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Design My Database</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-plug text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">REST API Development</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" Clean, documented APIs that connect your app to the tools and partners you actually need. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>RESTful API design and versioning</li>{" "}<li>Third-party integrations (payments, email, maps, etc.)</li>{" "}<li>API documentation for your team or external developers</li>{" "}<li>Rate limiting and input validation</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Your systems and third-party tools talking to each other reliably</li>{" "}<li>Documentation that means new developers don't need to ask you first</li>{" "}<li>An API structured to support a mobile app or new client later</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Build My API</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-cloud text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">SaaS Development</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" A complete, multi-tenant SaaS product - auth, billing, and dashboards working together, not bolted on later. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Multi-tenant architecture with data isolation per customer</li>{" "}<li>Subscription billing integration (e.g., Stripe)</li>{" "}<li>User onboarding, roles, and account management</li>{" "}<li>Customer-facing dashboards and usage analytics</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>A product architecture that supports recurring revenue from day one</li>{" "}<li>Customer data kept properly isolated as you onboard more tenants</li>{" "}<li>Billing and access control that don't need to be re-engineered at scale</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Build My SaaS Product</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-grid-1x2 text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">Admin Dashboard Development</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" An internal dashboard that gives your team one place to see and manage what actually matters. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Role-based dashboards for internal teams</li>{" "}<li>User and data management screens (CRUD)</li>{" "}<li>Analytics widgets and reporting views</li>{" "}<li>Activity logs and audit trails</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Your team managing data without needing to touch the database directly</li>{" "}<li>Faster day-to-day operations with everything in one screen</li>{" "}<li>A clear audit trail of who changed what, and when</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Build My Admin Dashboard</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-cart4 text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">E-Commerce Development</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" A store built to actually check out - fast, secure, and designed to turn browsers into buyers. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Product catalog, cart, and checkout flow</li>{" "}<li>Secure payment gateway integration</li>{" "}<li>Order management and customer accounts</li>{" "}<li>Admin panel for products, inventory, and orders</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Fewer abandoned carts with a frictionless checkout</li>{" "}<li>Payment flows customers trust enough to complete</li>{" "}<li>One dashboard to manage products, orders, and inventory</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Launch My Online Store</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-rocket-takeoff text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">MVP Development</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" Validate your idea with real users before investing in every feature on your wish list. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Feature scoping focused on your core value proposition</li>{" "}<li>Rapid build using a proven, production-ready stack</li>{" "}<li>Just enough infrastructure to launch and gather real feedback</li>{" "}<li>A clear path to scale once the idea is validated</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Get in front of real users faster, without overbuilding</li>{" "}<li>Spend your budget testing the idea, not gold-plating features nobody's asked for</li>{" "}<li>A codebase built to extend, not thrown away once you validate</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Build My MVP</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-speedometer2 text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">{"Web Performance & SEO"}</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" A slow site is quietly costing you visitors and search rankings. I fix both at once. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Core Web Vitals optimization (LCP, INP, CLS)</li>{" "}<li>Image compression, lazy loading, and modern formats</li>{" "}<li>Technical SEO: crawlability, semantic markup, structured data</li>{" "}<li>Caching strategy and CDN setup</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Faster load times on both mobile and desktop</li>{" "}<li>Better visibility in search rankings and lower bounce rates</li>{" "}<li>A site that stays fast under real traffic, not just in a demo</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Optimize My Website</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-shield-lock text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">{"Authentication & Security"}</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" Login and access control built right the first time - not patched after something goes wrong. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>JWT and session-based authentication</li>{" "}<li>OAuth / social login integration</li>{" "}<li>Role-based access control (RBAC)</li>{" "}<li>Secure API design (input validation, rate limiting, encryption)</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Users and admins only seeing and doing what they should</li>{" "}<li>A login flow visitors trust with their credentials</li>{" "}<li>Fewer security gaps to worry about as you scale users</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>Secure My Application</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>{" "}{" "}<div className="service-card transition-all duration-700 hover:scale-[1.01] shadow-[4px_4px_0px_rgb(32_170_100)] hover:shadow-[-4px_-4px_0px_rgb(32_170_100)]  text-white rounded-[2em] p-6">
<div className="flex flex-col items-start gap-3 cursor-pointer" data-action="toggle-service">
<div className="flex items-center gap-3">
<div className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white transition-all p-3 duration-500 w-12 h-12 flex justify-center items-center rounded-xl border border-green-600">
<i className="bi bi-cloud-arrow-up text-[23px]">
</i>
</div>{" "}<div>
<h3 className="text-xl text-[#1B3C53] dark:text-white font-bold pb-2">{"Deployment & Maintenance"}</h3>{" "}<p className="text-[#1B3C53] dark:text-white text-[18px]">{" Ongoing care so your site stays live, current, and improving - without you having to think about it. "}</p>
</div>
</div>{" "}<div className="text-green-500 font-medium text-sm flex items-center gap-1">
<span className="toggle-text font-medium text-md">Show Details</span>{" "}<i className="bi bi-chevron-down toggle-arrow transition-transform duration-300">
</i>
</div>
</div>{" "}<div className="service-content max-h-0 overflow-hidden transition-all duration-500 mt-4">
<h4 className="text-green-500 font-medium pb-4">→ What I Offer:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>CI/CD pipeline setup for smooth, repeatable deploys</li>{" "}<li>Hosting and infrastructure configuration</li>{" "}<li>Uptime and error monitoring</li>{" "}<li>Scheduled updates, patches, and improvements</li>
</ul>{" "}<h4 className="text-green-500 mt-2 font-medium pb-4">→ Your Benefits:</h4>{" "}<ul className="list-disc text-[#1B3C53] dark:text-white pl-6 space-y-4 text-lg">
<li>Deployments that don't require you to hold your breath</li>{" "}<li>Issues caught by monitoring before customers report them</li>{" "}<li>One less thing on your plate every month</li>
</ul>{" "}<Link href="/#contact">
<button className="group text-green-600 hover:text-white font-medium bg-transparent hover:bg-green-600 border border-green-600 my-4 py-2.5 ms-6 rounded-[2em] w-[90%] flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.003]">
<span>{"Set Up Deployment & Support"}</span>{" "}<span className="inline-block transition-transform duration-700 group-hover:translate-x-1">→</span>
</button>
</Link>
</div>
</div>
</div>
</section>
  )
}
