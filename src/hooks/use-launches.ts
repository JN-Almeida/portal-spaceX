import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_LAUNCHES_LIST } from '@/graphql/queries'

export function useLaunches(limit: number = 20) {
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMoreData, setHasMoreData] = useState(true)
  
  const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES_LIST, {
    variables: { limit, offset: 0 },
    notifyOnNetworkStatusChange: true,
  })

  const launches = data?.launches || []

  const loadMore = async () => {
    if (loading || isLoadingMore || !hasMoreData) return
    
    setIsLoadingMore(true)
    
    try {
      await fetchMore({
        variables: {
          offset: launches.length,
          limit: limit
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev
          
          const prevLaunches = prev?.launches || []
          const newLaunches = fetchMoreResult?.launches || []
          
          if (newLaunches.length < limit || newLaunches.length === 0) {
            setHasMoreData(false)
          }
          
          if (!Array.isArray(prevLaunches)) {
            console.warn('prev.launches is not an array:', prevLaunches)
            return {
              launches: newLaunches
            }
          }

          return {
            launches: [...prevLaunches, ...newLaunches]
          }
        }
      })
    } catch (err) {
      console.error('Error loading more launches:', err)
    } finally {
      setIsLoadingMore(false)
    }
  }

  return {
    launches,
    loading,
    error,
    loadMore,
    isLoadingMore,
    hasMoreData
  }
}
