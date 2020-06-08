module.exports = rawRequest => {
  const [method, path, , , body] = rawRequest.toString().split(' ');

  if(body.includes('\n')){

    return {
      method: method,
      path: path,
      body: body.split('\n').pop()
    };
  }
  else return {
    method: method,
    path: path
  };
};


