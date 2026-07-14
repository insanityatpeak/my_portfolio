import useSWR from 'swr';

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
}

const fetcher = (url: string): Promise<LeetCodeStats> =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch LeetCode stats');
    return res.json();
  });

export function useLeetCodeStats() {
  const { data, error, isLoading } = useSWR<LeetCodeStats>(
    '/api/leetcode',
    fetcher,
    {
      refreshInterval: 3_600_000,
      revalidateOnFocus: false,
    }
  );

  return {
    stats: data ?? null,
    isLoading,
    isError: !!error,
  };
}
