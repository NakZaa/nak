import { Experience } from '@/lib/schemas'
import { Card, CardContent } from './ui/card'
import TimelineItem from './timelineItem'

interface Props {
  experience: Experience[]
}

export default function Timeline({ experience }: Props) {
  return (
    <Card>
      <CardContent className='p-0'>
        <ul className='ml-10 border-l'>
          {experience.map((exp, id) => (
            <TimelineItem key={id} experience={exp} />
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
