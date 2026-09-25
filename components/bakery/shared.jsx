'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {ArrowRight,Menu,X,MessageCircle,Heart,Truck,CalendarDays} from 'lucide-react';
import {business,faqs} from '@/data/business';
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from '@/components/ui/accordion';
export const Img=({name,alt,...props})=><img src={'/images/'+name+'.webp'} alt={alt||name.replaceAll('-',' ')} {...props}/>;
export const Button=({href,children,secondary=false,...props})=><Link className={'btn '+(secondary?'secondary':'')} href={href} {...props}>{children}<ArrowRight size={16}/></Link>;
export function PageHead({label,title,children}){return <div className="pagehead"><div className="eyebrow">{label}</div><h1>{title}</h1>{children&&<p>{children}</p>}</div>}
export function Trust(){return <div className="trust"><span><CalendarDays size={18}/>Pre-order 2 days ahead</span><span><Heart size={18}/>Freshly baked with love</span><span><Truck size={18}/>Delivery across Karachi</span></div>}
const links=[['Home','/'],['Gallery','/gallery'],['Menu','/menu'],['Custom Orders','/order'],['About','/about'],['Testimonials','/testimonials'],['Contact','/contact']];
export function Brand(){return <Link href="/" className="brand brand-row"><span className="logo-window"><Img name="profile" alt="Baked by Afshan floral logo" loading="lazy"/></span><span>Baked by Afshan<small>HANDCRAFTED • WITH LOVE</small></span></Link>}
export function Shell({children}){
  const [open,setOpen]=useState(false);
  const path=usePathname();
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="topbar">A little love. A little sweetness. Made just for you in Karachi.</div>
    <header className="header">
      <div className="wrap nav">
        <Brand/>
        <Button href="/order">Order now</Button>
        <button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(o=>!o)}>
          {open?<X size={26}/>:<Menu size={26}/>}
        </button>
      </div>
    </header>
    <nav aria-label="Main navigation" className={'navlinks '+(open?'open':'')} aria-hidden={!open}>
      {links.map(([name,url])=><Link key={url} href={url} className={path===url?'active':''} aria-current={path===url?'page':undefined} onClick={()=>setOpen(false)}>{name}</Link>)}
      <div className="nav-cta-mobile"><Button href="/order" onClick={()=>setOpen(false)}>Order now</Button></div>
    </nav>
    {open&&<div className="nav-backdrop" onClick={()=>setOpen(false)} aria-hidden="true"/>}
    <main id="main" key={path} className="route-enter">{children}</main>
    <Footer/>
    <a className="float-contact" aria-label={business.phone?'Chat on WhatsApp':'Contact Baked by Afshan on Facebook'} title={business.phone?'WhatsApp':'Message on Facebook'} href={business.phone?'https://wa.me/'+business.phone.replace(/\D/g,''):business.facebook} target="_blank" rel="noreferrer"><MessageCircle size={25}/></a>
  </>
}
export function Footer(){const [state,setState]=useState('');const [busy,setBusy]=useState(false);async function submit(e){e.preventDefault();setBusy(true);setState('');try{const r=await fetch('/api/newsletter',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:new FormData(e.currentTarget).get('email')})});const d=await r.json();if(!r.ok)throw Error(d.error);setState('You\u2019re on the list. Thank you!');}catch{setState('Could not subscribe. Please try again.')}finally{setBusy(false)}}return <footer className="footer"><div className="wrap"><div className="footer-grid"><div><Brand/><p style={{marginTop:24}}>Handmade happiness in every slice.<br/>Custom cakes &amp; thoughtful gifts,<br/>made with love in Karachi.</p><a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><span className="serif text-2xl" aria-hidden="true">f</span></a>{business.instagram&&<a href={business.instagram}>Instagram</a>}</div><div><h4>Explore</h4>{links.slice(1,5).map(([n,u])=><Link key={u} href={u}>{n}</Link>)}</div><div><h4>Let&apos;s celebrate</h4><Link href="/contact">Contact &amp; enquiries</Link><Link href="/testimonials">Customer stories</Link><p>Karachi, Sindh, Pakistan<br/>Pre-orders: 2 days ahead<br/>Delivery available</p><p>Collection times by arrangement.</p></div><div><h4>A sweet little note</h4><p>Sign up for seasonal treats and news from our kitchen.</p><form className="newsletter" onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" placeholder="Your email address" required maxLength={254}/><button aria-label="Subscribe" disabled={busy}>{busy?'…':<ArrowRight size={20}/>}</button></form><p role="status" className="fine">{state||'By subscribing, you agree to receive baking news.'}</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Baked by Afshan. All rights reserved.</span><span>Thoughtfully made. Beautifully shared. ♡</span></div></div></footer>}
export function FAQ(){return <div className="faq"><div className="eyebrow">A FEW HELPFUL DETAILS</div><h2>Before we <em>bake.</em></h2><Accordion type="single" collapsible>{faqs.map(([q,a],i)=><AccordionItem value={'q'+i} key={q}><AccordionTrigger className="text-base py-6 text-left">{q}</AccordionTrigger><AccordionContent className="text-base leading-7 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div>}
export function CTA(){return <section className="quote-band"><div className="eyebrow">YOUR OCCASION, BEAUTIFULLY BAKED</div><h2>Let&apos;s make something<br/><em>worth celebrating.</em></h2><p>A birthday, a thank you, an unforgettable &ldquo;I do&rdquo;.</p><Button href="/order">Create your celebration</Button></section>}
