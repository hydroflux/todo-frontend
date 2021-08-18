export const baseURL = 'http://localhost:3000/to_dos/'

export function patchToDo(to_do){
    fetch( `${baseURL}${to_do.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ to_do })
      })   
}


export function postToDo(to_do){
  fetch( baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ to_do })
  })
}


export function deleteToDo(id){
  fetch( `${baseURL}${id}`, { method: 'DELETE' })
}