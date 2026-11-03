'use client'
import Link from 'next/link'
import {asset,text} from '../config'
import {works} from '../content/data'
import {Carousel} from './Carousel'
import {useRevento} from './Shell'
/** 原站精选展示为五帧，其中第三个案例重复出现；下方作品列表只有四个独立案例。 */
export function WorkShowcase(){const{t,href}=useRevento(),slides=[works[0],works[1],works[2],works[2],works[3]];return <section className="rv-section"><div className="rv-container"><Carousel items={slides} axis="y" label={t(text('作品纵向展示','Vertical project showcase'))} renderItem={(work,focusable)=><Link className="rv-work-showcase" href={href('work/'+work.slug)} tabIndex={focusable?0:-1}><div><h2>{t(work.title)}</h2><h3>{t(works[0].title)}</h3><p>{t(work.summary)}</p></div><img src={asset(work.image)} alt={t(work.title)}/></Link>}/></div></section>}
