import { Button, HTag } from '../components'

export default function Home(): JSX.Element {
  return (
    <>
      <HTag>Home</HTag>
      <HTag tag="h3">Title</HTag>

      <Button>Default</Button>
      <Button appearance="primary" arrow="down">Primary</Button>
      <Button arrow="right">Primary</Button>
    </>
  )
}
