import React from 'react';

const fetchData = user => {
  return fetch(`https://api.github.com/users/santos-vinicius`)
    .then((response) => response.json())
}


function Avatar() {
  return (
    <div>Avatar</div>
  )
}

export default Avatar