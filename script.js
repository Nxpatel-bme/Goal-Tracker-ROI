function getROIMultiplier(goalType) {
  switch (goalType) {
    case 'academic': return 3;
    case 'fitness': return 2;
    case 'volunteering': return 1.5;
    case 'creative': return 1.8;
    default: return 2;
  }
}

function addTime() {
  const goal = document.getElementById('goalName').value.trim();
  const time = parseFloat(document.getElementById('timeSpent').value);
  const goalType = document.getElementById('goalType').value;

  if (!goal || isNaN(time)) {
    alert("Please enter a goal and time spent.");
    return;
  }

  const key = `goal_${goal}`;
  let total = parseFloat(localStorage.getItem(key)) || 0;
  total += time;
  localStorage.setItem(key, total);

  const roiScore = (total * getROIMultiplier(goalType)).toFixed(1);

  document.getElementById('output').innerHTML = `
    <p><strong>Goal:</strong> ${goal}</p>
    <p><strong>Type:</strong> ${goalType.charAt(0).toUpperCase() + goalType.slice(1)}</p>
    <p><strong>Total Time:</strong> ${total} hrs</p>
    <p><strong>ROI Score:</strong> ${roiScore}</p>
  `;

  document.getElementById('timeSpent').value = '';
}
