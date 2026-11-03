'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.Pricing
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'

import {Banner,Heading,PricingCards,Values,Statement,FAQ} from '../components/Sections'
export default function Pricing(props:SiteTemplatePageProps){return <Shell {...props}><Banner eyebrow={copy.pricing} title={copy.pricingPlans}/><section className="rv-section"><div className="rv-container"><Heading eyebrow={copy.digitalMarketingPlans} title={copy.affordablePricingPlansForAllYourDigital}/><PricingCards/></div></section><Values/><Statement/><FAQ/></Shell>}
