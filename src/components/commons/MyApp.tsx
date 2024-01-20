import { AniqueThemeAutoSetup } from "@qinetik/anique"

export default function MyApp(props: { children: any }) {

  return (
    <>
      <AniqueThemeAutoSetup />
      {props.children}
    </>
  )
}
