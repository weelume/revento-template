'use client'
import {pageCopy} from '../content/page-copy'
const copy=pageCopy.Process
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'

import {Banner,Values,Process as WorkingProcess,FeaturedWorks,FAQ} from '../components/Sections'
export default function Process(props:SiteTemplatePageProps){return <Shell {...props}><Banner eyebrow={copy.howWeWork} title={copy.ourWorkingProcess}/><Values/><WorkingProcess/><FeaturedWorks/><FAQ/></Shell>}
