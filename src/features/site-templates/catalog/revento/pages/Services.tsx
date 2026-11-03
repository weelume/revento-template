'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.Services
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'

import {Banner,Heading,ServicesGrid,Statement,TestimonialSpotlight,FAQ} from '../components/Sections'
export default function Services(props:SiteTemplatePageProps){return <Shell {...props}><Banner eyebrow={copy.services} title={copy.ourServices}/><section className="rv-section"><div className="rv-container"><Heading eyebrow={copy.digitalMarketing} title={copy.servicesDesignedToDriveRealResults}/><ServicesGrid/></div></section><Statement/><TestimonialSpotlight/><FAQ/></Shell>}
