'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.Article
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useRevento} from '../components/Shell'
import {Banner,FAQ} from '../components/Sections'
import {Reveal} from '../components/Motion'
import {asset} from '../config'
import reference from '../content/reference.json'
function Content({index}:{index:number}){const{t,href}=useRevento(),article=reference.articles[index];return <><Banner eyebrow={copy.referenceSiteDemoArticle} title={article.title} description={copy.theFollowingIsAHistoricalDemoArticle}/><section className="rv-section"><div className="rv-container"><div className="rv-article-meta"><span>{article.author}</span><time>{article.date}</time></div><Reveal kind="image"><img className="rv-detail-cover" src={asset(article.images[0])} alt={t(article.title)}/></Reveal><article className="rv-prose rv-article-body">{article.body.map((block,i)=><section key={block.heading.en}><h2>{t(block.heading)}</h2>{block.paragraphs.map((paragraph,j)=><p key={j}>{t(paragraph)}</p>)}{i===3&&article.images[1]&&<img className="rv-rounded-image" src={asset(article.images[1])} alt={t(article.title)} loading="lazy"/>}</section>)}</article>{article.images[2]&&<img className="rv-detail-cover" src={asset(article.images[2])} alt={t(copy.articleIllustration)} loading="lazy"/>}<Link className="rv-button rv-dark-button rv-back" href={href('blog')}>{t(copy.backToBlog)}</Link></div></section><section className="rv-section"><div className="rv-container"><h2 className="rv-title">{t(copy.readMoreBlogs)}</h2><div className="rv-blog-grid">{reference.articles.filter(item=>item.slug!==article.slug).slice(0,2).map(item=><Link className="rv-blog-card" href={href('blog/'+item.slug)} key={item.slug}><div className="rv-image-wrap"><img src={asset(item.images[0])} alt={t(item.title)} loading="lazy"/></div><h3>{t(item.title)}</h3></Link>)}</div></div></section><FAQ/></>}
function Detail(props:SiteTemplatePageProps & {index:number}){return <Shell {...props}><Content index={props.index}/></Shell>}
export const ROI=(props:SiteTemplatePageProps)=><Detail {...props} index={0}/>
export const Boost=(props:SiteTemplatePageProps)=><Detail {...props} index={1}/>
export const Targeted=(props:SiteTemplatePageProps)=><Detail {...props} index={2}/>
export const Impact=(props:SiteTemplatePageProps)=><Detail {...props} index={3}/>
export const Unlock=(props:SiteTemplatePageProps)=><Detail {...props} index={4}/>
export const Smart=(props:SiteTemplatePageProps)=><Detail {...props} index={5}/>
export const Results=(props:SiteTemplatePageProps)=><Detail {...props} index={6}/>
export const Insights=(props:SiteTemplatePageProps)=><Detail {...props} index={7}/>
