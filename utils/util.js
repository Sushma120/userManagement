
module.exports = () => {
  let util = {};
  util.sendResponse = (req, res, data, message, statuscode) => {
    res.status(statuscode).json({
      meta: {
        code: statuscode,
        message: message,
        timestamp: new Date().toISOString(),
      },
      data: data,
    });
  };
  return util;
};