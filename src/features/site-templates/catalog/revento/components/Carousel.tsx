'use client'
import {useEffect,useRef,useState,type ReactNode} from 'react'
import {motion,useInView,useReducedMotion} from 'framer-motion'
import {useRevento} from './Shell'
import {text} from '../config'
export function Carousel<T>({items,renderItem,label,slidesPerView='responsive',axis='x'}:{items:readonly T[];renderItem:(item:T,focusable:boolean)=>ReactNode;label:string;slidesPerView?:'responsive'|1;axis?:'x'|'y'}) {
  const {t}=useRevento(),ref=useRef<HTMLDivElement>(null),visible=useInView(ref,{amount:.1}),reduce=useReducedMotion(),dragged=useRef(false)
  const [width,setWidth]=useState(0),[index,setIndex]=useState(items.length),[jump,setJump]=useState(true),[hover,setHover]=useState(false),[focus,setFocus]=useState(false)
  useEffect(()=>{const node=ref.current;if(!node)return;const observer=new ResizeObserver(entries=>setWidth(entries[0].contentRect.width));observer.observe(node);return()=>observer.disconnect()},[])
  const perView=axis==='y'||slidesPerView===1?1:width>=1050?3:width>=680?2:1,gap=24,step=axis==='y'?(width>=680?500:660):(width-gap*(perView-1))/perView+gap
  const move=(direction:number)=>{setJump(false);setIndex(current=>current+direction)}
  useEffect(()=>{if(!visible||reduce||hover||focus||items.length<=1)return;const timer=window.setInterval(()=>{if(!document.hidden){setJump(false);setIndex(current=>current+1)}},4000);return()=>window.clearInterval(timer)},[visible,reduce,hover,focus,items.length])
  if(!items.length)return null
  const copies=[...items,...items,...items]
  return <div ref={ref} className={`rv-carousel${axis==='y'?' rv-vertical-carousel':''}`} tabIndex={0} role="region" aria-roledescription={t(text('轮播','carousel'))} aria-label={label} onKeyDown={event=>{if(event.key===(axis==='y'?'ArrowDown':'ArrowRight')){event.preventDefault();move(1)}else if(event.key===(axis==='y'?'ArrowUp':'ArrowLeft')){event.preventDefault();move(-1)}}} onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)} onFocusCapture={()=>setFocus(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFocus(false)}}>
    <div className="rv-carousel-window" style={axis==='y'?{height:step-gap}:undefined}>
    {/* 手势层只负责短距离拖拽与回弹，内容层保持当前分页偏移，避免释放时从零点长距离回跳。 */}
    <motion.div className="rv-carousel-gesture" onDragStartCapture={event=>event.preventDefault()} drag={items.length>1&&axis==='x'?'x':false} dragConstraints={{left:0,right:0}} dragElastic={.12} dragMomentum={false} onPointerDownCapture={()=>{dragged.current=false}} onDragStart={()=>{dragged.current=true}} onClickCapture={event=>{if(dragged.current&&event.detail>0){event.preventDefault();event.stopPropagation()}}} onDragEnd={(_,info)=>{if(Math.abs(info.offset.x)>65)move(info.offset.x<0?1:-1)}}>
    <motion.div className="rv-carousel-track" style={axis==='y'?{flexDirection:'column'}:undefined} animate={axis==='y'?{y:-index*step}:{x:-index*step}} transition={{duration:reduce||jump?0:.65,ease:[.22,1,.36,1]}} onAnimationComplete={()=>{
      // 三份相同内容在不可见边界归位，避免首尾出现空白或反向长距离移动。
      if(index>=items.length*2){setJump(true);setIndex(index-items.length)}else if(index<items.length){setJump(true);setIndex(index+items.length)}
    }}>
      {copies.map((item,i)=>{const active=i>=index&&i<index+perView;return <div key={i} className="rv-slide" style={{width:width?(width-gap*(perView-1))/perView:undefined,height:axis==='y'?step-gap:undefined}} aria-hidden={!active}>{renderItem(item,active)}</div>})}
    </motion.div></motion.div></div>
    {items.length>1&&<div className="rv-carousel-controls"><button type="button" onClick={()=>move(-1)} aria-label={t(text('上一组','Previous'))}>←</button><span className="rv-visually-hidden" aria-live="polite">{((index%items.length)+items.length)%items.length+1} / {items.length}</span><button type="button" onClick={()=>move(1)} aria-label={t(text('下一组','Next'))}>→</button></div>}
  </div>
}
