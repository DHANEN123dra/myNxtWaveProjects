import {Chrono} from 'react-chrono'
import ProjectTimeLine from '../ProjectTimelineCard'
import CourseTimeline from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getItem = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimeLine data={each} />
    }
    return <CourseTimeline data={each} />
  }

  return (
    <div className="time-line-con">
      <div className="chrono-container">
        <div className="HeaderContainer">
          <h1 className="Heading">
            My Journey of <br />
            <span className="CCBPHeading">CCBP 4.0</span>{' '}
          </h1>
        </div>

        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(each => getItem(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
