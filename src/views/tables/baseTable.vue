<template>
    <Table :columns="columns1" :data="data1"></Table>
   <!-- <Page :total="pageTotal" :current="pageNum" :page-size="pageSize" show-elevator show-sizer show-total
          placement="top" @on-change="handlePage" @on-page-size-change='handlePageSize'></Page>-->
    <Page :total="100"></Page>

</template>

<script>
    export default {
        name: "baseTable",
        data() {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: []
            }
        },
        methods: {
            getTables: function () {
                this.$store.dispatch('GetTable', "").then(res => {
                    console.log("获取table列表数据" + res.data);
                    this.data1 = res.data;
                })
            }
        },
        //服务端加载数据
        //TODO 注意点
        //TODO  1.若果需要进行ref的操作，则调用初始化页面数据的方法可放置在mounted，
        //TODO 2.如果无对dom节点的操作，则请求放在created中，放在created中可以提前发送请求后去数据，界面体验相对比较好
        //TODO 在模板渲染成html或者模板编译进路由之前调用created ，created类型为function
        created() {
            this.$store.dispatch('GetTable', "").then(res => {
                console.log("获取table列表数据" + res.data);
                this.data1 = res.data;
            });

        },
        //TODO 在模板渲染成html后调用，通常是初始化页面完成之后，再对html的dom节点进行一下需要的操作
        mounted() {

        }
    }
</script>

<style scoped>

</style>
