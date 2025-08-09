import withPWAInit from "next-pwa";

export default withPWAInit({
    dest: 'public',
    register: true,
    skipWaiting: true,
})({
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    }, 
    experimental: {
        missingSuspenseWithCSRBailout: false,
    }
});
