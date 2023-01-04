fetch('https://theathletic.com/nba/team/grizzlies/schedule/')
  .then(response => response.json())
  .then(schedule => {
    for (const game of schedule) {
        const dateCell = document.createElement('td');
        dateCell.textContent = game.date;
        const matchupCell = document.createElement('td');
        matchupCell.textContent = `${game.awayTeam} @ ${game.homeTeam}`;
        const resultCell = document.createElement('td');
        resultCell.textContent = game.result;
        const timeCell = document.createElement('td');
        timeCell.textContent = game.time;
        const tvCell = document.createElement('td');
        tvCell.textContent = game.tv;
        const row = document.createElement('tr');
        row.appendChild(dateCell);
        row.appendChild(matchupCell);
        row.appendChild(resultCell);
        row.appendChild(timeCell);
        row.appendChild(tvCell);
        document.getElementById('schedule-table').appendChild(row);
      }      
  });
