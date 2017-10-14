function error(content) {
  let response = {
    type: "error",
    message: "",
    content: content
  };
  return response;
}

function success(content) {
  let response = {
    type: "success",
    message: "",
    content: content
  };
  return response;
}

function successAndCount(content, count) {
  let response = {
    type: "success",
    message: "",
    count: count,
    content: content
  };
  return response;
}

module.exports = { error, success, successAndCount};
  