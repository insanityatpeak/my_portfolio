import useSWR from 'swr';

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
}

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const GET_USER_STATS_QUERY = `
  query getUserStats($username: String!) {
    matchedUser(username: $username) {
      profile {
        ranking
      }
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
        totalSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

export async function fetchLeetCodeStats(username?: string): Promise<LeetCodeStats | null> {
  let user = username || process.env.NEXT_PUBLIC_LEETCODE_USERNAME || 'priyanshu_rawat_1729';
  
  if (user.includes('leetcode.com/u/')) {
    user = user.split('leetcode.com/u/')[1].replace('/', '');
  }

  try {
    const response = await fetch(LEETCODE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_USER_STATS_QUERY,
        variables: { username: user },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode stats');
    }

    const data = await response.json();

    if (!data.data || !data.data.matchedUser) {
      return null;
    }

    const matchedUser = data.data.matchedUser;
    const acStats = matchedUser.submitStats.acSubmissionNum;
    const totalStats = matchedUser.submitStats.totalSubmissionNum;

    const findCount = (stats: any[], difficulty: string) => 
      stats.find((item) => item.difficulty === difficulty)?.count || 0;

    const totalSolved = findCount(acStats, 'All');
    const easySolved = findCount(acStats, 'Easy');
    const mediumSolved = findCount(acStats, 'Medium');
    const hardSolved = findCount(acStats, 'Hard');
    const ranking = matchedUser.profile.ranking;

    const totalAc = totalSolved;
    const totalSubmits = findCount(totalStats, 'All');
    const acceptanceRate = totalSubmits > 0 ? (totalAc / totalSubmits) * 100 : 0;

    return {
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      ranking,
      acceptanceRate: Number(acceptanceRate.toFixed(2)),
    };
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error);
    return null;
  }
}

export function useLeetCodeStats(username?: string) {
  let user = username || process.env.NEXT_PUBLIC_LEETCODE_USERNAME || 'priyanshu_rawat_1729';
  if (user.includes('leetcode.com/u/')) {
    user = user.split('leetcode.com/u/')[1].replace('/', '');
  }
  
  const { data, error, isLoading } = useSWR(
    user ? ['leetcodeStats', user] : null,
    ([_, u]) => fetchLeetCodeStats(u),
    {
      refreshInterval: 60000,
      revalidateOnFocus: false,
    }
  );

  return {
    stats: data,
    isLoading,
    isError: error,
  };
}
