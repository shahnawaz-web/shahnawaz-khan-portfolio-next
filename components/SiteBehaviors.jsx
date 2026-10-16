'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { projects } from '@/data/projects'
import { FORMSPREE_ENDPOINT } from '@/lib/site'

const $ = (id) => document.getElementById(id)
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Ports every behaviour from the original inline scripts / src/js/* files.
 * Markup is rendered on the server exactly as in the original; this component only attaches behaviour.
 */
export default function SiteBehaviors() {
  const pathname = usePathname()

  /* ---------- Global, delegated behaviour (mounted once) ---------- */
  useEffect(() => {
    let currentProject = null

    const setMenu = (open) => {
      const nav = $('navMenu'), btn = $('menuToggle')
      if (!nav || !btn) return
      nav.classList.toggle('hidden', !open)
      const icon = btn.querySelector('i')
      if (icon) { icon.classList.toggle('bi-x', open); icon.classList.toggle('bi-list', !open) }
      btn.setAttribute('aria-expanded', String(open))
    }
    const setDropdown = (open) => {
      const dd = $('dropdownMenu'); if (!dd) return
      dd.classList.toggle('hidden', !open)
      document.querySelector('[data-action="toggle-dropdown"]')?.setAttribute('aria-expanded', String(open))
    }
    const openProject = (id) => {
      const p = projects.find((x) => x.id === Number(id)); const modal = $('projectModal')
      if (!p || !modal) return
      currentProject = p
      $('modalTitle').innerText = p.title
      const img = $('modalImage'); img.src = p.image; img.alt = p.title
      $('modalDesc').innerText = p.desc
      $('modalLive').href = p.live
      const box = $('modalFeatures'); box.innerHTML = ''
      p.features.forEach((f) => {
        const s = document.createElement('span')
        s.className = 'bg-blue-500/10 text-[12px] py-1 px-4 text-blue-500 font-lg rounded-full border border-blue-500'
        s.textContent = f.trim(); box.appendChild(s)
      })
      $('modalCategory').textContent = p.category
      modal.classList.remove('hidden'); modal.classList.add('flex')
      document.body.classList.add('overflow-hidden')
    }
    const closeProject = () => {
      const m = $('projectModal'); if (!m) return
      m.classList.add('hidden'); m.classList.remove('flex'); document.body.classList.remove('overflow-hidden')
    }
    const openGithub = (name) => {
      const m = $('githubModal'); if (!m) return
      m.classList.remove('hidden'); m.classList.add('flex'); document.body.style.overflow = 'hidden'
      const msg = `Hi Shahnawaz,I visit your portfolio. I'm interested in your ${name}. Can we discuss?`
      const a = $('whatsappLink'); if (a) a.href = `https://wa.me/923077242548?text=${encodeURIComponent(msg)}`
    }
    const closeGithub = () => {
      const m = $('githubModal'); if (!m) return
      m.classList.add('hidden'); m.classList.remove('flex'); document.body.style.overflow = 'auto'
    }
    const simpleModal = (id, open) => {
      const m = $(id); if (!m) return
      if (open) { m.classList.remove('hidden'); m.classList.add('flex') } else m.classList.add('hidden')
    }

    const onClick = (e) => {
      const t = e.target
      if (!(t instanceof Element)) return

      if (t.closest('#menuToggle')) { setMenu($('navMenu')?.classList.contains('hidden')); return }
      if (t.closest('.nav-link')) setMenu(false)

      if (t.closest('[data-action="toggle-dropdown"]')) { setDropdown($('dropdownMenu')?.classList.contains('hidden')); return }
      if (!t.closest('#dropdownMenu')) setDropdown(false)

      if (t.closest('#theme-toggle')) {
        const dark = !document.documentElement.classList.contains('dark')
        document.documentElement.classList.toggle('dark', dark)
        try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
        return
      }

      const svc = t.closest('[data-action="toggle-service"]')
      if (svc) {
        const card = svc.closest('.service-card'); if (!card) return
        const content = card.querySelector('.service-content'), arrow = card.querySelector('.toggle-arrow'), label = card.querySelector('.toggle-text')
        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
          content.style.maxHeight = '0'; arrow.style.transform = 'rotate(0deg)'; label.innerText = 'Show Details'
        } else {
          content.style.maxHeight = content.scrollHeight + 'px'; arrow.style.transform = 'rotate(180deg)'; label.innerText = 'Show Less'
        }
        return
      }

      const faq = t.closest('.faq-btn')
      if (faq) {
        const isOpen = faq.getAttribute('aria-expanded') === 'true'
        document.querySelectorAll('.faq-btn').forEach((b) => {
          b.setAttribute('aria-expanded', 'false')
          if (b.nextElementSibling) b.nextElementSibling.style.maxHeight = null
          const v = b.querySelector('.faq-vertical'); if (v) v.style.transform = 'rotate(0deg)'
        })
        if (!isOpen) {
          faq.setAttribute('aria-expanded', 'true')
          faq.nextElementSibling.style.maxHeight = faq.nextElementSibling.scrollHeight + 'px'
          const v = faq.querySelector('.faq-vertical'); if (v) v.style.transform = 'rotate(90deg)'
        }
        return
      }

      const fb = t.closest('.filter-btn')
      if (fb) {
        const f = fb.getAttribute('data-filter')
        document.querySelectorAll('.project-card').forEach((c) => {
          c.style.display = f === 'all' || c.classList.contains(f) ? 'block' : 'none'
        })
        document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('bg-orange-500'))
        fb.classList.add('bg-orange-500')
        return
      }

      const op = t.closest('[data-open-project]'); if (op) { openProject(op.getAttribute('data-open-project')); return }
      const og = t.closest('[data-github-project]'); if (og) { openGithub(og.getAttribute('data-github-project')); return }
      if (t.closest('[data-action="close-project-modal"]')) { closeProject(); return }
      if (t.closest('[data-action="close-github-modal"]')) { closeGithub(); return }
      if (t.closest('#modalCode')) { if (currentProject?.code) window.open(currentProject.code, '_blank', 'noopener,noreferrer'); return }
      if (t.id === 'projectModal') { closeProject(); return }
      if (t.id === 'githubModal') { closeGithub(); return }

      if (t.closest('#openTermsBtn')) { e.preventDefault(); simpleModal('termsModal', true); return }
      if (t.closest('#closeTermsBtn') || t.closest('#acceptTermsBtn') || t.id === 'termsModal') { simpleModal('termsModal', false); return }
      if (t.closest('#openPrivacyBtn')) { e.preventDefault(); simpleModal('privacyModal', true); return }
      if (t.closest('#closePrivacyBtn') || t.closest('#acceptPrivacyBtn') || t.id === 'privacyModal') { simpleModal('privacyModal', false); return }

      if (t.closest('#scrollTopBtn')) window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' })
    }
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      closeGithub(); closeProject(); simpleModal('termsModal', false); simpleModal('privacyModal', false); setDropdown(false)
    }
    const onScroll = () => { $('scrollTopBtn')?.classList.toggle('hidden', window.scrollY <= 300) }

    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  /* ---------- Per-page behaviour (re-initialised after client navigation) ---------- */
  useEffect(() => {
    const cleanups = []
    // Start after the page has loaded so React has finished hydrating the server markup first
    let timer
    const start = () => { timer = setTimeout(init, 600) }
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
    cleanups.push(() => { clearTimeout(timer); window.removeEventListener('load', start) })
    function init() {

    // Typewriter
    document.querySelectorAll('.typewrite').forEach((el) => {
      let list; try { list = JSON.parse(el.getAttribute('data-type') || 'null') } catch { list = null }
      if (!list || !list.length) return
      if (reduceMotion()) { el.innerHTML = ''; const s = document.createElement('span'); s.className = 'wrap'; s.textContent = list[0]; el.appendChild(s); return }
      const period = parseInt(el.getAttribute('data-period'), 10) || 2000
      let loop = 0, txt = '', del = false, timer
      const tick = () => {
        const full = list[loop % list.length]
        txt = del ? full.substring(0, txt.length - 1) : full.substring(0, txt.length + 1)
        el.innerHTML = ''; const s = document.createElement('span'); s.className = 'wrap'; s.textContent = txt; el.appendChild(s)
        let delta = 200 - Math.random() * 100
        if (del) delta /= 2
        if (!del && txt === full) { delta = period; del = true }
        else if (del && txt === '') { del = false; loop++; delta = 500 }
        timer = setTimeout(tick, delta)
      }
      tick(); cleanups.push(() => clearTimeout(timer))
    })

    // Reveal-on-scroll (skills + author card)
    const revealers = []
    const reveal = (selector, apply, threshold) => {
      const els = document.querySelectorAll(selector); if (!els.length) return
      if (reduceMotion() || !('IntersectionObserver' in window)) { els.forEach(apply); return }
      const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { apply(en.target); io.unobserve(en.target) } }), { threshold })
      els.forEach((el) => io.observe(el)); revealers.push(io)
    }
    reveal('.skill-item', (el) => el.classList.add('show'), 0.15)
    reveal('.author-card', (el) => el.classList.remove('opacity-0', 'translate-y-6'), 0.2)
    cleanups.push(() => revealers.forEach((io) => io.disconnect()))

    // Testimonials slider
    const sw = document.querySelector('.swiper')
    if (sw) {
      let inst, cancelled = false
      Promise.all([import('swiper'), import('swiper/modules')]).then(([{ default: Swiper }, { Navigation, Pagination }]) => {
        if (cancelled) return
        inst = new Swiper(sw, {
          modules: [Navigation, Pagination], loop: true, speed: 600, slidesPerView: 1,
          pagination: { el: '.swiper-pagination', clickable: true },
          navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        })
      })
      cleanups.push(() => { cancelled = true; inst?.destroy(true, true) })
    }

    // Contact form (delegated, so it keeps working even if React re-creates the form element)
    if ($('contactForm')) {
      const counterInitial = $('charCount')?.textContent
      const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      const errIds = ['nameError', 'emailError', 'subjectError', 'messageError', 'termsError']
      const clearErrors = () => {
        errIds.forEach((i) => $(i)?.classList.add('hidden'))
        ;['name', 'email', 'subject', 'message'].forEach((i) => $(i)?.classList.remove('border-red-500', 'input-error'))
      }
      const showError = (id, text) => {
        const er = $(id + 'Error'), inp = $(id)
        er.textContent = text; er.classList.remove('hidden'); inp.classList.add('border-red-500', 'input-error')
        inp.addEventListener('input', () => { $(id + 'Error')?.classList.add('hidden'); $(id)?.classList.remove('border-red-500', 'input-error') }, { once: true })
      }
      const setBusy = (busy) => {
        const b = $('submitBtn')
        b.disabled = busy; b.classList.toggle('opacity-75', busy); b.classList.toggle('cursor-not-allowed', busy)
        $('btnText').textContent = busy ? 'Sending...' : 'Send Message'
        $('btnIcon').classList.toggle('hidden', busy); $('loadingSpinner').classList.toggle('hidden', !busy)
      }
      let hideTimer
      const onInput = (e) => {
        if (e.target.id !== 'message') return
        const n = e.target.value.length, c = $('charCount')
        c.textContent = `${n} / 600`; c.classList.toggle('text-yellow-500', n > 450)
      }
      const onSubmit = async (e) => {
        const form = e.target
        if (form.id !== 'contactForm') return
        e.preventDefault(); clearErrors(); $('successMessage').classList.add('hidden')
        const v = { name: $('name').value, email: $('email').value, subject: $('subject').value, message: $('message').value, terms: $('terms').checked }
        let valid = true
        if (v.name.trim().length < 2) { showError('name', 'Please enter a valid name (minimum 2 characters)'); valid = false }
        if (!validEmail(v.email)) { showError('email', 'Please enter a valid email address'); valid = false }
        if (v.subject === '') { showError('subject', 'Please select a subject'); valid = false }
        if (v.message.trim().length < 10) { showError('message', 'Please enter a message (minimum 10 characters)'); valid = false }
        if (!v.terms) { showError('terms', 'You must agree to the terms and privacy policy'); valid = false }
        if (!valid) return
        setBusy(true)
        try {
          const res = await fetch(form.getAttribute('action') || FORMSPREE_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
          if (!res.ok) throw new Error('Form submission failed')
          const ok = $('successMessage')
          ok.classList.remove('hidden'); ok.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'nearest' })
          resetting = true; form.reset(); resetting = false; if ($('charCount')) $('charCount').textContent = counterInitial
          hideTimer = setTimeout(() => $('successMessage')?.classList.add('hidden'), 5000)
        } catch (err) {
          console.error('Error submitting form:', err)
          alert('There was an error sending your message. Please try again or contact me directly via email or WhatsApp.')
        } finally { setBusy(false) }
      }
      let resetting = false
      const onReset = (e) => { if (e.target.id !== 'contactForm' || resetting) return; clearErrors(); $('successMessage')?.classList.add('hidden'); if ($('charCount')) $('charCount').textContent = counterInitial }
      const onFocusOut = (e) => { if (e.target.id === 'email' && e.target.value && !validEmail(e.target.value)) e.target.classList.add('border-yellow-500') }
      const onFocusIn = (e) => { if (e.target.id === 'email') e.target.classList.remove('border-yellow-500') }
      document.addEventListener('input', onInput); document.addEventListener('submit', onSubmit); document.addEventListener('reset', onReset)
      document.addEventListener('focusout', onFocusOut); document.addEventListener('focusin', onFocusIn)
      cleanups.push(() => {
        clearTimeout(hideTimer)
        document.removeEventListener('input', onInput); document.removeEventListener('submit', onSubmit); document.removeEventListener('reset', onReset)
        document.removeEventListener('focusout', onFocusOut); document.removeEventListener('focusin', onFocusIn)
      })
    }
    } // end init
    return () => cleanups.forEach((fn) => fn())
  }, [pathname])

  return null
}
