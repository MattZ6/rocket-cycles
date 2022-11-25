import { LoadingStyles as Styles } from './styles'

export function Loading() {
  // TODO: Improve loading skeletons

  return (
    <Styles.Container>
      <Styles.SkeletonTitle />
      <Styles.SkeletonTextBlock />
      <Styles.SkeletonTextBlock />
      <Styles.SkeletonTextBlock />
      <Styles.SkeletonTextBlock />
    </Styles.Container>
  )
}
