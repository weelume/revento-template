'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.About
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {asset,art} from '../config'
import {Shell,useRevento} from '../components/Shell'
import {Banner,Heading,Values,TeamGrid,TestimonialSpotlight} from '../components/Sections'
import {demoFigures} from '../content/data'
import {Reveal,Count} from '../components/Motion'
function Content(){const{t,href}=useRevento();return <><Banner eyebrow={copy.aboutUs} title={copy.discoverBrand}/><section className="rv-section"><div className="rv-container"><Reveal><h2 className="rv-large-copy">{t(copy.atBrandWeBelieveThatEveryBrand)}</h2></Reveal><div className="rv-two-column"><img className="rv-rounded-image" src={asset(art.mission)} alt={t(copy.brandMissionAndCreativeCollaboration)}/><div className="rv-prose"><h2>{t(copy.ourMissionAndVision)}</h2><p>{t(copy.atBrandWeAreMoreThanA)}</p><p>{t(copy.withATeamOfSeasonedExpertsAnd)}</p><p>{t(copy.withYearsOfExperienceAndATrack)}</p><Link className="rv-button rv-dark-button" href={href('contact')}>{t(copy.getInTouch)}</Link><div className="rv-about-count"><Count value={demoFigures.about.campaigns} suffix="+"/><p>{t(copy.successfulCampaignsDemoFigures)}</p></div></div></div></div></section><section className="rv-section rv-dark-section"><div className="rv-container"><Heading eyebrow={copy.aboutUs2} title={copy.whyChooseBrand}/><div className="rv-about-photos"><img src={asset(art.aboutA)} alt={t(copy.brandCollaboration)}/><img src={asset(art.aboutB)} alt={t(copy.creativeResearch)}/></div><div className="rv-about-metrics">{demoFigures.about.metrics.map(({value,suffix,label})=><div key={String(value)}><Count value={Number(value)} suffix={String(suffix)}/><h3>{t(label)}</h3><p>{t(copy.referenceSiteDemoFiguresNotAPerformance)}</p></div>)}</div></div></section><Values/><section className="rv-section"><div className="rv-container"><Heading eyebrow={copy.ourTeam} title={copy.meetOurTeam}/><TeamGrid compact/></div></section><TestimonialSpotlight/></>}
export default function About(props:SiteTemplatePageProps){return <Shell {...props}><Content/></Shell>}
