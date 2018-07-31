import fetch from 'utils/fetch';

export function loginByEmail(email, password) {
    console.log("邮箱" + email + "----" + "密码" + password);
    const data = {
        email,
        password
    };
    return fetch({
        url: '/api/login/loginbyemail',
        method: 'post',
        data
    });
}

export function logout() {
    return fetch({
        url: '/login/logout',
        method: 'post'
    });
}

export function getInfo(token) {
    return fetch({
        url: '/user/info',
        method: 'get',
        params: {token}
    });
}

