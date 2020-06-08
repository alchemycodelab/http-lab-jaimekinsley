module.exports = rawRequest => {
  const [method, path, , , body] = rawRequest.toString().split(' ');
  if(body.includes('\n')){

    return {
      method: method,
      path: path,
      body: body.substring(
        body.lastIndexOf('{'),
        body.lastIndexOf('}') + 1
      )
    };
  }
  else return {
    method: method,
    path: path
  };
};


