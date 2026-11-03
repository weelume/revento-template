'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.ServiceDetail
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useRevento} from '../components/Shell'
import {Banner} from '../components/Sections'
import {Reveal} from '../components/Motion'
import {asset} from '../config'
import {services} from '../content/data'
import serviceImages from '../content/service-images.json'
import serviceContent from '../content/service-content.json'
function Content({index}:{index:number}) {
  const{t,href}=useRevento(),service=services[index],images=serviceImages as Record<string,string>
  const paragraphs=serviceContent[service.slug as keyof typeof serviceContent]
  if(!paragraphs||paragraphs.length!==service.stages.length||!images[service.slug])throw new Error('服务内容或封面配置不完整：'+service.slug)
  return <><Banner eyebrow={copy.ourServices} title={service.title} description={service.summary}/>
    <section className="rv-section"><div className="rv-container">
      <Reveal kind="image"><img className="rv-detail-cover" src={asset(images[service.slug])} alt={t(service.title)}/></Reveal>
      <article className="rv-prose rv-article-body">{service.stages.map((stage,i)=><section key={stage.en}><h2>{t(stage)}</h2><p>{t(paragraphs[i])}</p>{(i===2||i===6)&&<ul><li>{t(copy.agreeOnBusinessGoalsAndRelevantMetrics)}</li><li>{t(copy.planAroundRealAudienceAndContentInsights)}</li><li>{t(copy.executeTheAgreedScopeAndRecordResults)}</li><li>{t(copy.reviewRegularlyAndValidateImprovements)}</li></ul>}</section>)}</article>
      <Link className="rv-button rv-dark-button" href={href('service')}>{t(copy.allServices)}</Link>
    </div></section></>
}
function Detail(props:SiteTemplatePageProps & {index:number}){return <Shell {...props}><Content index={props.index}/></Shell>}
export const Search=(props:SiteTemplatePageProps)=><Detail {...props} index={0}/>
export const ContentMarketing=(props:SiteTemplatePageProps)=><Detail {...props} index={1}/>
export const Social=(props:SiteTemplatePageProps)=><Detail {...props} index={2}/>
export const Email=(props:SiteTemplatePageProps)=><Detail {...props} index={3}/>
export const Influencer=(props:SiteTemplatePageProps)=><Detail {...props} index={4}/>
export const Analytics=(props:SiteTemplatePageProps)=><Detail {...props} index={5}/>
