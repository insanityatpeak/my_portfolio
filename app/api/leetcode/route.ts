import { NextResponse } from 'next/server';

const LEETCODE_API = 'https://leetcode.com/graphql';

const QUERY = `
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

interface SubmissionStat {
  difficulty: string;
  count: number;
}

function findCount(stats: SubmissionStat[], difficulty: string): number {
  return stats.find((s) => s.difficulty === difficulty)?.count ?? 0;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username =
    searchParams.get('username') ||
    process.env.NEXT_PUBLIC_LEETCODE_USERNAME?.split('leetcode.com/u/')[1]?.replace('/', '') ||
    'priyanshu_rawat_1729';

  try {
    const res = await fetch(LEETCODE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: QUERY, variables: { username } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'LeetCode API error' }, { status: 502 });
    }

    const json = await res.json();

    if (!json.data?.matchedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const { profile, submitStats } = json.data.matchedUser;
    const acStats: SubmissionStat[] = submitStats.acSubmissionNum;
    const totalStats: SubmissionStat[] = submitStats.totalSubmissionNum;

    const totalSolved = findCount(acStats, 'All');
    const totalSubmits = findCount(totalStats, 'All');

    return NextResponse.json({
      totalSolved,
      easySolved: findCount(acStats, 'Easy'),
      mediumSolved: findCount(acStats, 'Medium'),
      hardSolved: findCount(acStats, 'Hard'),
      ranking: profile.ranking,
      acceptanceRate: totalSubmits > 0 ? Number(((totalSolved / totalSubmits) * 100).toFixed(2)) : 0,
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
