import {pageCopy} from './page-copy'
const copy=pageCopy.WorkDetail
const positioning=copy.toPositionLuxeglowAsAHighEnd
const vision=copy.luxeglowSVisionWasToCaterTo
const identity={...positioning,en:positioning.en.replace('To position ','')}
const combined={zh:vision.zh+positioning.zh,en:vision.en+' '+positioning.en}
/** 原站八个案例复用同一组正文，保留各段顺序；客户、素材和统计由各案例数据提供。 */
export const workArticle={
  objective:[copy.toEstablishLuxeglowANewLuxurySkincare2],
  challenges:[copy.enteringASaturatedSkincareMarketWithNumerous,copy.buildingTrustAndCredibilityAsANew,copy.reachingTheTargetAudienceEffectivelyAcrossMultiple],
  solutions:[positioning,vision,identity,combined],
  strategy:[identity,combined,positioning,vision],
}
