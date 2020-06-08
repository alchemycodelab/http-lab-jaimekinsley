module.exports = rawRequest => {
  const [method, path] = rawRequest.toString().split(' ');
  const [, body] = rawRequest.toString().split('\r\n\r\n');

  if(body){

    return {
      method,
      path,
      body
    };
  }
  else return {
    method,
    path
  };
};


