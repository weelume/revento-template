'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.WorkDetail
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useRevento} from '../components/Shell'
import {Banner,TestimonialSpotlight} from '../components/Sections'
import {Reveal,Count} from '../components/Motion'
import {asset} from '../config'
import {works} from '../content/data'
import reference from '../content/reference.json'
import {workArticle} from '../content/work-article'
function Content({index}:{index:number}){
 const{t}=useRevento(),work=works[index],detail=reference.workDetails[work.slug as keyof typeof reference.workDetails]
 return <><Banner eyebrow={copy.worksDetails} title={copy.luxeglowSkincareCampaignLaunch} description={copy.toEstablishLuxeglowANewLuxurySkincare}/>
 <section className="rv-section"><div className="rv-container">
  <dl className="rv-work-meta"><div><dt>{t(copy.clientName)}</dt><dd>{work.client}</dd></div><div><dt>{t(copy.industry)}</dt><dd>{t(work.industry)}</dd></div><div><dt>{t(copy.duration)}</dt><dd>{work.duration} {t(copy.weeks)}</dd></div></dl>
  <Reveal kind="image"><img className="rv-detail-cover" src={asset(work.image)} alt={t(work.title)}/></Reveal>
  <article className="rv-prose rv-article-body">
   <section><h2>{t(copy.objective)}</h2>{workArticle.objective.map((paragraph,i)=><p key={i}>{t(paragraph)}</p>)}</section>
   <section><h2>{t(copy.challenges)}</h2><ul>{workArticle.challenges.map(paragraph=><li key={paragraph.en}>{t(paragraph)}</li>)}</ul></section>
   {detail.images.slice(1).map(image=><img className="rv-rounded-image" src={asset(image)} alt={t(work.title)} key={image} loading="lazy"/>)}
   <section><h2>{t(copy.solutions)}</h2>{workArticle.solutions.map((paragraph,i)=><p key={i}>{t(paragraph)}</p>)}</section>
   <section><h2>{t(copy.strategy)}</h2>{workArticle.strategy.map((paragraph,i)=><p key={i}>{t(paragraph)}</p>)}</section>
  </article>
  <h2 className="rv-title">{t(copy.resultsHeading)}</h2><p className="rv-form-note">{t(copy.theFollowingAreReferenceSiteDemoFigures)}</p>
  <div className="rv-about-metrics">{work.metrics.map(metric=><div key={metric.label.en}><Count value={metric.value} suffix={metric.suffix}/><h3>{t(metric.label)}</h3></div>)}</div>
 </div></section><TestimonialSpotlight/></>
}
function Detail(props:SiteTemplatePageProps & {index:number}){return <Shell {...props}><Content index={props.index}/></Shell>}
export const BrandBoost=(props:SiteTemplatePageProps)=><Detail {...props} index={0}/>
export const EcomPro=(props:SiteTemplatePageProps)=><Detail {...props} index={1}/>
export const Luxury=(props:SiteTemplatePageProps)=><Detail {...props} index={2}/>

export const Growth=(props:SiteTemplatePageProps)=><Detail {...props} index={3}/>

export const Power=(props:SiteTemplatePageProps)=><Detail {...props} index={4}/>
export const Elevation=(props:SiteTemplatePageProps)=><Detail {...props} index={5}/>
export const Market=(props:SiteTemplatePageProps)=><Detail {...props} index={6}/>
export const Vision=(props:SiteTemplatePageProps)=><Detail {...props} index={7}/>
