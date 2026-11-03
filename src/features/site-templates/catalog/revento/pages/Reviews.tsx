'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.Reviews
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'

import {Banner,ReviewsGrid,TestimonialSpotlight,FAQ} from '../components/Sections'
export default function Reviews(props:SiteTemplatePageProps){return <Shell {...props}><Banner eyebrow={copy.testimonialsDemoContent} title={copy.whatOurClientsSay}/><section className="rv-section"><div className="rv-container"><ReviewsGrid/></div></section><TestimonialSpotlight/><FAQ/></Shell>}
