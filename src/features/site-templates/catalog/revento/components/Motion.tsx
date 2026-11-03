'use client'
import {useEffect, useRef, useState, type ReactNode} from 'react'
import {motion, useInView, useReducedMotion} from 'framer-motion'
/** 原站各页容器的入场初态均为向下 50px；图片不沿用其他模板的横移缩放。 */
export function Reveal({children,kind='rise',delay=0,className=''}:{children:ReactNode;kind?:'rise'|'image'|'team'|'quote';delay?:number;className?:string}) {
  const reduce=useReducedMotion()
  const ref=useRef<HTMLDivElement>(null)
  const visible=useInView(ref,{once:true,amount:.12})
  const from={rise:{y:50},image:{y:50},team:{y:50},quote:{y:50}}[kind]
  // 显式绑定当前节点的可见状态，切页与视口变化后仍由本次挂载驱动动画。
  return <motion.div ref={ref} className={className} initial={reduce?false:{...from,opacity:0}} animate={visible||reduce?{x:0,y:0,scale:1,opacity:1}:{...from,opacity:0}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}
export function EnterTitle({children,hero=false}:{children:string;hero?:boolean}) {
  const reduce=useReducedMotion()
  const ref=useRef<HTMLHeadingElement>(null)
  const visible=useInView(ref,{once:true,amount:.12})
  const Tag=hero?motion.h1:motion.h2
  return <Tag ref={ref} className={hero?'rv-hero-title':'rv-title'} initial={reduce?false:{opacity:0,y:50}} animate={hero||visible||reduce?{opacity:1,y:0}:{opacity:0,y:50}} transition={{duration:reduce?0:.7,ease:[.22,1,.36,1]}}>{children}</Tag>
}
export function Count({value,suffix=''}:{value:number;suffix?:string}) {
  const ref=useRef<HTMLSpanElement>(null),visible=useInView(ref,{once:true,amount:.5}),reduce=useReducedMotion()
  const [count,setCount]=useState(0)
  useEffect(()=>{if(!visible)return;let frame=0;const start=performance.now();const tick=(now:number)=>{const progress=reduce?1:Math.min((now-start)/1800,1);setCount(Math.round(value*(value%1?10:1)*(1-Math.pow(1-progress,3)))/(value%1?10:1));if(progress<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[visible,value,reduce])
  return <span ref={ref} className="rv-count" aria-label={`${value}${suffix}`}>{count}{suffix}</span>
}
