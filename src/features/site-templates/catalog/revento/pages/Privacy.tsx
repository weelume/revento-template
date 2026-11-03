'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.Privacy
import type {SiteTemplatePageProps} from '../../../types'
import {Shell,useRevento} from '../components/Shell'
import {Banner} from '../components/Sections'

import privacy from '../content/privacy.json'
function Content(){const{t}=useRevento();return <><Banner eyebrow={copy.legalPages} title={copy.privacyPolicy}/><section className="rv-section"><article className="rv-container rv-prose rv-article-body">{privacy.blocks.map(block=><section key={block.heading.en}><h2>{t(block.heading)}</h2>{block.paragraphs.map((paragraph,i)=><p key={i}>{t(paragraph)}</p>)}</section>)}</article></section></>}
export default function Privacy(props:SiteTemplatePageProps){return <Shell {...props}><Content/></Shell>}
