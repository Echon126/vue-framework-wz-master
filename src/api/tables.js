import fetch from 'utils/fetch';

/**
 * 加载基本表格数据
 */
export function getTable() {
    console.log("加载基本表格数据项");
    return fetch({
        url: '/api/tables/table',
        method: 'get',
    })
}

/**
 * 加载自定义表格数据项
 * @param object
 */
export function getDefineTables(object) {
    console.log("加载自定义表格数据项" + object);
    const data = {
        name: "zhangsan",
        sex: "man",
        age: 10
    };
    return fetch({
        url: '/api/tables/defineTable',
        method: 'get',
        data
    })
}
