import { careerSchema, educationSchema } from '@/lib/schemas'
import Timeline from './timeline'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import careerData from '@/data/career.json'
import educationData from '@/data/education.json'

export default function Experience() {
  const career = careerSchema.parse(careerData).career
  const education = educationSchema.parse(educationData).education

  return (
    <Tabs defaultValue='work'>
      <TabsList className='mb-2 grid w-full grid-cols-2'>
        <TabsTrigger value='work'>Work</TabsTrigger>
        <TabsTrigger value='education'>Education</TabsTrigger>
      </TabsList>
      <TabsContent value='work'>
        <Timeline experience={career}></Timeline>
      </TabsContent>
      <TabsContent value='education'>
        <Timeline experience={education}></Timeline>
      </TabsContent>
    </Tabs>
  )
}