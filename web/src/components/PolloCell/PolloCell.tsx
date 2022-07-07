import type { FindPolloQuery, FindPolloQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPolloQuery($id: Int!) {
    pollo: pollo(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPolloQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  pollo,
}: CellSuccessProps<FindPolloQuery, FindPolloQueryVariables>) => {
  return <div>{JSON.stringify(pollo)}</div>
}
