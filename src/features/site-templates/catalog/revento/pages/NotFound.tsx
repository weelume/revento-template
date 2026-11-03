'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.NotFound
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useRevento} from '../components/Shell'
import {asset,art} from '../config'
function Content(){const{t,href}=useRevento();return <section className="rv-section" style={{paddingTop:150}}><div className="rv-container rv-not-found"><img src={asset(art.notFound)} alt="404"/><h1>{t(copy.sorryPageNotFound)}</h1><p>{t(copy.itLooksLikeThePageYouRe)}</p><Link className="rv-button rv-dark-button" href={href()}>{t(copy.backToHome)}</Link></div></section>}
export default function NotFound(props:SiteTemplatePageProps){return <Shell {...props} hideCTA><Content/></Shell>}
