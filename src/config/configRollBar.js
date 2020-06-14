let rollbarConfig = {};

rollbarConfig = new Configuration('6d769366bedb4effa6e6893c9ab2f018', { // post_client_item victor iarmolitskyi
    // endpoint: 'https://api.rollbar.com/api/1/item/',
    reportLevel: 'error',

    // To work on development environment uncomment the line below (captureDeviceInfo)

    captureDeviceInfo: false,

    payload: {
        client: {
            javascript: {
                source_map_enabled: true,
            }
        }
    }
});
export default rollbarConfig;
