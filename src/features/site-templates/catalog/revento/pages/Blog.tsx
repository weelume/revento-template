'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.Blog
import {useState} from 'react'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useRevento} from '../components/Shell'
import {Banner,Heading,FAQ} from '../components/Sections'
import {Reveal} from '../components/Motion'
import {Carousel} from '../components/Carousel'
import {asset} from '../config'
import reference from '../content/reference.json'
function Content(){const{t,href}=useRevento(),[count,setCount]=useState(4);return <><Banner eyebrow={copy.blogs} title={copy.blogsAndInsights} description={copy.driveImpactThroughTransformativeDigitalSolutionsCrafted}/><section className="rv-section"><div className="rv-container"><Carousel items={reference.articles.slice(0,3)} slidesPerView={1} label={t(copy.featuredArticles)} renderItem={(article,focusable)=><div className="rv-featured-article"><div><h2>{t(article.title)}</h2><p>{t(copy.useAnalyticsDrivenInsightsToCreateMeasurable)}</p><Link className="rv-button rv-dark-button" tabIndex={focusable?0:-1} href={href('blog/'+article.slug)}>{t(copy.readFullBlog)}</Link></div><img src={asset(article.images[0])} alt={t(article.title)}/></div>}/></div></section><section className="rv-section"><div className="rv-container"><Heading eyebrow={copy.blogs} title={copy.allBlogsAndArticles}/><div className="rv-blog-grid">{reference.articles.slice(0,count).map((article,i)=><Reveal key={article.slug} delay={i%2*.1}><Link className="rv-blog-card" draggable={false} href={href('blog/'+article.slug)}><div className="rv-image-wrap"><img src={asset(article.images[0])} alt={t(article.title)} loading="lazy"/></div><div className="rv-article-meta"><span>{article.author}</span><time>{article.date}</time></div><h3>{t(article.title)}</h3><p>{t(copy.turnDataInsightsIntoFocusedMeasurableMarketing)}</p></Link></Reveal>)}</div>{count<reference.articles.length&&<button className="rv-button rv-dark-button rv-load-more" onClick={()=>{setCount(value=>Math.min(value+4,reference.articles.length));console.debug('[revento:blog] 展开文章',{visible:Math.min(count+4,reference.articles.length),total:reference.articles.length})}}>{t(copy.loadMore)}</button>}</div></section><FAQ/></>}
export default function Blog(props:SiteTemplatePageProps){return <Shell {...props}><Content/></Shell>}
