const allMatches = [
  {
    "id": 41,
    "homeTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamId": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeamId": 6,
    "homeTeamGoals": 1,
    "awayTeamId": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  }
]
 

const allMatchesInProgressTrue = [
  {
    "id": 41,
    "homeTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamId": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeamId": 6,
    "homeTeamGoals": 1,
    "awayTeamId": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Ferroviária"
    },
    "awayTeam": {
      "teamName": "Avaí/Kindermann"
    }
  }
]

const allMatchesInProgressFalse = [
  {
    id: 1,
    home_team_id: 'São Paulo',
    home_team_goals: '1',
    away_team_id: 'Grêmio',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 2,
    home_team_id: 'Internacional',
    home_team_goals: '1',
    away_team_id: 'Santos',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 3,
    home_team_id: 'Corinthians',
    home_team_goals: '3',
    away_team_id: 'Napoli-SC',
    away_team_goals: '0',
    in_progress: 0,
  },
  {
    id: 4,
    home_team_id: 'Botafogo',
    home_team_goals: '0',
    away_team_id: 'Bahia',
    away_team_goals: '0',
    in_progress: 0,
  },
  {
    id: 5,
    home_team_id: 'Flamengo',
    home_team_goals: '1',
    away_team_id: 'Minas Brasília',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 6,
    home_team_id: 'Cruzeiro',
    home_team_goals: '1',
    away_team_id: 'Real Brasília',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 7,
    home_team_id: 'Palmeiras',
    home_team_goals: '2',
    away_team_id: 'Ferroviária',
    away_team_goals: '2',
    in_progress: 0,
  },
  {
    id: 8,
    home_team_id: 'São José-SP',
    home_team_goals: '0',
    away_team_id: 'Avaí/Kindermann',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 9,
    home_team_id: 'Avaí/Kindermann',
    home_team_goals: '0',
    away_team_id: 'Palmeiras',
    away_team_goals: '3',
    in_progress: 0,
  },
  {
    id: 10,
    home_team_id: 'Bahia',
    home_team_goals: '0',
    away_team_id: 'Internacional',
    away_team_goals: '2',
    in_progress: 0,
  },
  {
    id: 11,
    home_team_id: 'Real Brasília',
    home_team_goals: '1',
    away_team_id: 'Botafogo',
    away_team_goals: '0',
    in_progress: 0,
  },
  {
    id: 12,
    home_team_id: 'Ferroviária',
    home_team_goals: '0',
    away_team_id: 'Corinthians',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 13,
    home_team_id: 'Grêmio',
    home_team_goals: '2',
    away_team_id: 'Cruzeiro',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 14,
    home_team_id: 'Santos',
    home_team_goals: '2',
    away_team_id: 'São Paulo',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 15,
    home_team_id: 'Minas Brasília',
    home_team_goals: '0',
    away_team_id: 'São José-SP',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 16,
    home_team_id: 'Napoli-SC',
    home_team_goals: '0',
    away_team_id: 'Flamengo',
    away_team_goals: '0',
    in_progress: 0,
  },
  {
    id: 17,
    home_team_id: 'Avaí/Kindermann',
    home_team_goals: '2',
    away_team_id: 'Grêmio',
    away_team_goals: '3',
    in_progress: 0,
  },
  {
    id: 18,
    home_team_id: 'Palmeiras',
    home_team_goals: '4',
    away_team_id: 'Cruzeiro',
    away_team_goals: '2',
    in_progress: 0,
  },
  {
    id: 19,
    home_team_id: 'Napoli-SC',
    home_team_goals: '2',
    away_team_id: 'Bahia',
    away_team_goals: '2',
    in_progress: 0,
  },
  {
    id: 20,
    home_team_id: 'Flamengo',
    home_team_goals: '0',
    away_team_id: 'Internacional',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 21,
    home_team_id: 'Ferroviária',
    home_team_goals: '3',
    away_team_id: 'Real Brasília',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 22,
    home_team_id: 'Corinthians',
    home_team_goals: '3',
    away_team_id: 'Botafogo',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 23,
    home_team_id: 'São José-SP',
    home_team_goals: '2',
    away_team_id: 'São Paulo',
    away_team_goals: '3',
    in_progress: 0,
  },
  {
    id: 24,
    home_team_id: 'Minas Brasília',
    home_team_goals: '2',
    away_team_id: 'Santos',
    away_team_goals: '2',
    in_progress: 0,
  },
  {
    id: 25,
    home_team_id: 'Bahia',
    home_team_goals: '0',
    away_team_id: 'Ferroviária',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 26,
    home_team_id: 'Real Brasília',
    home_team_goals: '1',
    away_team_id: 'Avaí/Kindermann',
    away_team_goals: '0',
    in_progress: 0,
  },
  {
    id: 27,
    home_team_id: 'Cruzeiro',
    home_team_goals: '1',
    away_team_id: 'São José-SP',
    away_team_goals: '2',
    in_progress: 0,
  },
  {
    id: 28,
    home_team_id: 'São Paulo',
    home_team_goals: '3',
    away_team_id: 'Flamengo',
    away_team_goals: '0',
    in_progress: 0,
  },
  {
    id: 29,
    home_team_id: 'Internacional',
    home_team_goals: '0',
    away_team_id: 'Corinthians',
    away_team_goals: '4',
    in_progress: 0,
  },
  {
    id: 30,
    home_team_id: 'Botafogo',
    home_team_goals: '0',
    away_team_id: 'Palmeiras',
    away_team_goals: '4',
    in_progress: 0,
  },
  {
    id: 31,
    home_team_id: 'Grêmio',
    home_team_goals: '2',
    away_team_id: 'Minas Brasília',
    away_team_goals: '0',
    in_progress: 0,
  },
  {
    id: 32,
    home_team_id: 'Santos',
    home_team_goals: '5',
    away_team_id: 'Napoli-SC',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 33,
    home_team_id: 'Avaí/Kindermann',
    home_team_goals: '1',
    away_team_id: 'São Paulo',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 34,
    home_team_id: 'Internacional',
    home_team_goals: '3',
    away_team_id: 'Ferroviária',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 35,
    home_team_id: 'Minas Brasília',
    home_team_goals: '1',
    away_team_id: 'Cruzeiro',
    away_team_goals: '3',
    in_progress: 0,
  },
  {
    id: 36,
    home_team_id: 'Bahia',
    home_team_goals: '0',
    away_team_id: 'Flamengo',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 37,
    home_team_id: 'São José-SP',
    home_team_goals: '0',
    away_team_id: 'Real Brasília',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 38,
    home_team_id: 'Santos',
    home_team_goals: '2',
    away_team_id: 'Corinthians',
    away_team_goals: '1',
    in_progress: 0,
  },
  {
    id: 39,
    home_team_id: 'Botafogo',
    home_team_goals: '2',
    away_team_id: 'Napoli-SC',
    away_team_goals: '0',
    in_progress: 0,
  },
  {
    id: 40,
    home_team_id: 'Palmeiras',
    home_team_goals: '4',
    away_team_id: 'Grêmio',
    away_team_goals: '1',
    in_progress: 0,
  },
];

const resultCreateMatches = {
  "id": 1,
  "homeTeamId": 16,
  "homeTeamGoals": 2,
  "awayTeamId": 8,
  "awayTeamGoals": 2,
  "inProgress": true,
}

export { allMatches, allMatchesInProgressTrue, allMatchesInProgressFalse, resultCreateMatches  }