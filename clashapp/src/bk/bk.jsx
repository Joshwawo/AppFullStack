 // const response = await axios.get('https://api.github.com/users/joshwawo')
    // const response = await axios.get('https://api.github.com/users/joshwawo/repos')
    // const response = await axios.get('https://api.github.com/repos/joshwawo/react-hooks-examples/commits')
    const respuesta = await axios.get('https://api.clashroyale.com/v1/cards')
    console.log(respuesta.data)
    // setData(response.data)