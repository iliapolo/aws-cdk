const baseConfig = require('@aws-cdk/cdk-build-tools/config/jest.config');
module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            // We want to improve our test coverage
            // DO NOT LOWER THESE VALUES!
            // If you need to break glass, open an issue to re-up the values with additional test coverage
            statements: 10,
            branches: 10,
            functions: 10,
            lines: 10
        },
    },

    // We have many tests here that commonly time out
    testTimeout: 30_000,
};
