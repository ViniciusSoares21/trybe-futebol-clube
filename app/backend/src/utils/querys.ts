const queryHome = `SELECT T.team_name as name,
SUM(CASE WHEN M.home_team_goals > M.away_team_goals THEN 3 
  WHEN M.home_team_goals = M.away_team_goals THEN 1 ELSE 0 END) as totalPoints,
COUNT(T.id) as totalGames,
SUM(CASE WHEN M.home_team_goals > M.away_team_goals THEN 1 ELSE 0 END ) as totalVictories,
SUM(CASE WHEN M.home_team_goals = M.away_team_goals THEN 1 ELSE 0 END ) as totalDraws,
SUM(CASE WHEN M.home_team_goals < M.away_team_goals THEN 1 ELSE 0 END ) as totalLosses,
SUM(M.home_team_goals) as goalsFavor, 
SUM(M.away_team_goals) as goalsOwn,
SUM(M.home_team_goals - M.away_team_goals) as goalsBalance,
FORMAT(SUM(CASE WHEN M.home_team_goals > M.away_team_goals THEN 3 
  WHEN M.home_team_goals = M.away_team_goals THEN 1 ELSE 0 END) / (COUNT(T.id) * 3) * 100, 2) 
  as efficiency
FROM TRYBE_FUTEBOL_CLUBE.teams as T 
  INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as M  ON T.id = M.home_team_id 
WHERE M.in_progress = 0
GROUP BY T.team_name
ORDER BY SUM(CASE WHEN M.home_team_goals > M.away_team_goals THEN 3 
  WHEN M.home_team_goals = M.away_team_goals THEN 1 ELSE 0 END) DESC, 
  SUM(CASE WHEN M.home_team_goals > M.away_team_goals THEN 1 ELSE 0 END ) DESC,
  SUM(M.home_team_goals - M.away_team_goals) DESC,
  SUM(M.home_team_goals) DESC,
  SUM(M.away_team_goals) ASC;`;

const queryAway = `SELECT T.team_name as name,
SUM(CASE WHEN M.away_team_goals > M.home_team_goals THEN 3
  WHEN M.away_team_goals = M.home_team_goals THEN 1 ELSE 0 END) as totalPoints,
COUNT(T.id) as totalGames,
SUM(CASE WHEN M.away_team_goals > M.home_team_goals THEN 1 ELSE 0 END ) as totalVictories,
SUM(CASE WHEN M.away_team_goals = M.home_team_goals THEN 1 ELSE 0 END ) as totalDraws,
SUM(CASE WHEN M.away_team_goals < M.home_team_goals THEN 1 ELSE 0 END ) as totalLosses,
SUM(M.away_team_goals) as goalsFavor, 
SUM(M.home_team_goals) as goalsOwn,
SUM(M.away_team_goals - M.home_team_goals) as goalsBalance,
FORMAT(SUM(CASE WHEN M.away_team_goals > M.home_team_goals THEN 3 
  WHEN M.away_team_goals = M.home_team_goals THEN 1 ELSE 0 END) / (COUNT(T.id) * 3) * 100, 2) 
  as efficiency
FROM TRYBE_FUTEBOL_CLUBE.teams as T 
  INNER JOIN TRYBE_FUTEBOL_CLUBE.matches as M  ON T.id = M.away_team_id 
WHERE M.in_progress = 0
GROUP BY T.team_name
ORDER BY SUM(CASE WHEN M.away_team_goals > M.home_team_goals THEN 3 
  WHEN M.away_team_goals = M.home_team_goals THEN 1 ELSE 0 END) DESC, 
SUM(CASE WHEN M.away_team_goals > M.home_team_goals THEN 1 ELSE 0 END ) DESC,
SUM(M.away_team_goals - M.home_team_goals) DESC,
SUM(M.away_team_goals) DESC,
SUM(M.home_team_goals) ASC;`;

export { queryHome, queryAway };
