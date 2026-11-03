'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.Work
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'

import {Banner,FeaturedWorks,FAQ} from '../components/Sections'
import {WorkShowcase} from '../components/WorkShowcase'
export default function Work(props:SiteTemplatePageProps){return <Shell {...props}><Banner eyebrow={copy.ourWorks} title={copy.ourLovedProjects}/><WorkShowcase/><FeaturedWorks grid/><FAQ/></Shell>}
