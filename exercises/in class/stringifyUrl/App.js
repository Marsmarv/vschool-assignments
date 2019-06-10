function stringifyUrl(url, query) {
return url+'?color='+query.color+'&species='+query.species
}

const url = "http://localhost:8080/monkeys"
const query = {
  color: "black",
  species: "howler"
}

// console.log(stringifyUrl(url, query))

let url2 = 'http://localhost:8080/monkeys?color=black&species=howler'

function getQuery() {
  const third = url2.split('?')
  const fourth = third[1].split('&') 
  const fifth = fourth[0].split('=')
  
  const first = url2.split('&')
  const second = first[1].split('=')
  
  //  second, fifth 

  const result = {
    color: fifth[1],
    species: second[1]
  }
  return result
}

console.log(getQuery())