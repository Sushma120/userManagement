module.exports = () => {
  let util = {};
  util.sendResponse = (req, res, data, message, statuscode, token) => {
    res.status(statuscode).json({
      meta: {
        code: statuscode,
        message: message,
        token: token,
        timestamp: new Date().toISOString(),
      },
      data: data,
    });
  };
  return util;
};