'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.Team
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'

import {Banner,TeamGrid} from '../components/Sections'
export default function Team(props:SiteTemplatePageProps){return <Shell {...props}><Banner eyebrow={copy.ourTeam} title={copy.meetTheTeam}/><section className="rv-section"><div className="rv-container"><TeamGrid/></div></section></Shell>}
