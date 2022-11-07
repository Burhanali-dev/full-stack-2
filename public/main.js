var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");
var input = document.getElementsByClassName("editable");

function updateE(element) {
    //bench press	2	3	15 mins
    // exercise
    let exercise = element.closest('tr').cells[0].innerText
    let sets = element.closest('tr').cells[1].innerText
    let reps = element.closest('tr').cells[2].innerText
    let comment = element.closest('tr').cells[3].innerText
    console.log(comment)


    fetch('update', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'exercise': exercise,
        'sets': sets,
        'reps': reps,
        'comment': comment
      })
    }).then(response => {
      if (response.ok) console.log('exercise updated')
      
    })
}
function create(element) {
  //bench press	2	3	15 mins
  // exercise
  let exercise = element.closest('tr').cells[0].innerText
  let sets = element.closest('tr').cells[1].innerText
  let reps = element.closest('tr').cells[2].innerText
  let comment = element.closest('tr').cells[3].innerText
  console.log(comment)


  fetch('create', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'exercise': exercise,
      'sets': sets,
      'reps': reps,
      'comment': comment
    })
  }).then(response => {
    if (response.ok) console.log('exercise updated')
    window.location.reload()
  })
}
function deleteE(element) {
  //bench press	2	3	15 mins
  // exercise
  let exercise = element.closest('tr').cells[0].innerText
  let sets = element.closest('tr').cells[1].innerText
  let reps = element.closest('tr').cells[2].innerText
  let comment = element.closest('tr').cells[3].innerText
  console.log(comment)

  fetch('delete', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'exercise': exercise,
      'sets': sets,
      'reps': reps,
      'comment': comment
    })
  }).then(response => {
    if (response.ok) console.log('exercise updated')
    window.location.reload()
  })

}


