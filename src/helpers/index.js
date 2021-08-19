export const toDoURL = 'http://localhost:3000/to_dos/'

export function patchToDo(to_do){
    fetch( `${toDoURL}${to_do.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ to_do })
      })   
}


export function postToDo(to_do, user){
  fetch( toDoURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
      // Every request to the back-end needs to include an authorization header after adding auth
    },
    body: JSON.stringify({ to_do: {...to_do, user_id: user.id} })
  })
}


export function deleteToDo(id){
  fetch( `${toDoURL}${id}`, { method: 'DELETE' })
}