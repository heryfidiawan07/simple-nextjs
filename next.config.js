module.exports = {
    env: {
        appName: 'ENV App Name',
    },
    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/auth/login',
            },
            {
                source: '/register',
                destination: '/auth/register',
            }
        ]
    }
}