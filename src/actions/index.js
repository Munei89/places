export const increment = (n) => {
  return {
    type:'INCREMENT',
    number:n
  }
}
export const decrement = (n) => {
    return {
      type:'DECREMENT',
    number:n
  }
  
  }

  export const saveplace = (p) => {
    return {
      type:'SAVEPLACES',
    places:p
  }
}

export const favouritise = (f) => {
  return {
    type:'FAVOURITISE',
  fav:f
}
}