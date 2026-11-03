'use client'
import {motion,useReducedMotion} from 'framer-motion'
import {asset,art} from '../config'

/** 根据原站连续采样：圆环正向 10 秒，星形反向 9 秒；螺旋保持倾角沿横轴往返。 */
export function HeroArtwork(){
 const reduce=useReducedMotion()
 const drift=(seconds:number)=>({duration:reduce?0:seconds,repeat:reduce?0:Infinity,repeatType:'reverse' as const,ease:'easeInOut' as const})
 return <div className="rv-hero-artwork" aria-hidden="true">
  <motion.img className="rv-hero-spiral" src={asset(art.spiral)} alt="" initial={{x:0,rotate:-129.91}} animate={{x:reduce?0:[0,-20],rotate:-129.91}} transition={drift(2)}/>
  <motion.img className="rv-hero-badge" src={asset(art.badge)} alt="" initial={{rotate:0}} animate={{rotate:reduce?0:360}} transition={{duration:reduce?0:10,repeat:reduce?0:Infinity,ease:'linear'}}/>
  <motion.img className="rv-hero-plus" src={asset(art.plus)} alt="" initial={{x:0}} animate={{x:reduce?0:[0,-20]}} transition={drift(3)}/>
  <motion.img className="rv-hero-star" src={asset(art.star)} alt="" initial={{rotate:0}} animate={{rotate:reduce?0:-360}} transition={{duration:reduce?0:9,repeat:reduce?0:Infinity,ease:'linear'}}/>
  <motion.img className="rv-hero-heart" src={asset(art.heart)} alt="" initial={{x:0}} animate={{x:reduce?0:[0,10]}} transition={drift(3)}/>
  <motion.img className="rv-hero-floater" src={asset('BGqpp1YM4qKJdHY9REqeaffeszU.svg')} alt="" initial={{y:0}} animate={{y:reduce?0:[0,-20]}} transition={drift(4)}/>
  <img className="rv-hero-small-star" src={asset(art.smallStar)} alt=""/>
  <img className="rv-hero-crown" src={asset(art.crown)} alt=""/>
 </div>
}
