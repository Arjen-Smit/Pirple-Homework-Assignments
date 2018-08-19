/*
 * environment module returns the default port or a port set with ENV_PORT
 */

const defaultPort = 3000;

const enviroment = {
    port: typeof(process.env.NODE_PORT) === 'string' && parseInt(process.env.NODE_PORT) ? parseInt(process.env.NODE_PORT) : defaultPort,
};

module.exports = enviroment;