import { Button, HTag, P } from '../components'

export default function Home(): JSX.Element {
  return (
    <>
      <HTag>Home</HTag>
      <HTag tag="h3">Title</HTag>

      <Button>Default</Button>
      <Button appearance="primary" arrow="down">Primary</Button>
      <Button arrow="right">Primary</Button>

      <P>16</P>
      <P size="s">14</P>
      <P size="l">18</P>
    </>
  )
}
