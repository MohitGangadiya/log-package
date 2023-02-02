const logger = (level, message) => {
  console.log(
    JSON.stringify({ level, message, timestamp: new Date().toISOString() })
  );
};
module.export = logger;
