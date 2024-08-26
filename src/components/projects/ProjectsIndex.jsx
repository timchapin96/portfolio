import OlympicMedalsAPI from './OlympicMedalsAPI'
import TeachTokyo from './TeachTokyo'
import TokyoMaps from './TokyoMaps'

export default function ProjectsIndex ({ projectRefs }) {
  return (
    <div className='projects-container'>
      <TeachTokyo />
      <TokyoMaps />
      <OlympicMedalsAPI />
    </div>
  )
}
