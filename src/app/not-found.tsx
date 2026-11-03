'use client'
import {usePathname} from 'next/navigation'
import NotFound from '../features/site-templates/catalog/revento/pages/NotFound'
export default function Missing(){const path=usePathname(),locale=path.split('/')[1]==='en'?'en':'zh';return <NotFound locale={locale} basePath={locale==='en'?'/en':''}/>}
