import {getTable, getDefineTables} from 'api/tables';

const table = {

    /**
     * 获取tables数据
     */
    actions: {
        GetTable({commite, state}) {
            return new Promise((resolve, reject) => {
                getTable().then(response => {
                    const data = response.data;
                    resolve(response);
                }).catch(error => {
                    reject(error);
                })
            })
        }
    }
};

export default table;
