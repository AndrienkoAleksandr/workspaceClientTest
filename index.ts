import WorkspaceClient, { IRestAPIConfig, IRemoteAPI } from '@eclipse-che/workspace-client';

async function getCheApiClient(): Promise<IRemoteAPI> {
    const restAPIConfig: IRestAPIConfig = {
        baseUrl: 'url/api',
        headers: {}
    };

    restAPIConfig.headers['Authorization'] = 'token';
    restAPIConfig.ssCrtPath = 'path';
    console.log(restAPIConfig);

    return await WorkspaceClient.getRestApi(restAPIConfig);
}

async function doRequest() {
    const client = await getCheApiClient();
    client.getAll().then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};

doRequest();