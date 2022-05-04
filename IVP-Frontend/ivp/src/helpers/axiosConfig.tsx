function getConfig(URL:any) {
    var config = {
        method: 'get',
        url: 'http://localhost:4000/admin',
        headers: {
            // 'x-access-token': localStorage.getItem('accessToken')
        }
    }
    return config;
};

function postConfig(URL:any, DATA:any) {
    var config = {
        method: 'post',
        url: URL,
        headers: {
            'x-access-token': localStorage.getItem('accessToken')
        },
        data: DATA
    }
    return config;
};

function deleteConfig(URL:any, PARAMS:any) {
    var config = {
        method: 'delete',
        url: URL,
        params: PARAMS,
        headers: {
            'x-access-token': localStorage.getItem('accessToken')
        }
    }
    return config;
};

function editConfig(URL:any, PARAMS:any, DATA:any) {
    var config = {
        method: 'put',
        url: URL,
        params: PARAMS,
        headers: {
            'x-access-token': localStorage.getItem('accessToken')
        },
        data: DATA
    }
    return config;
};

var axiosConfig = {
    getConfig: getConfig,
    postConfig: postConfig,
    deleteConfig: deleteConfig,
    editConfig: editConfig
}

export default axiosConfig;