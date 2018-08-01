<template>
    <div>
        <!-- <div>
             姓名：<Input prefix="ios-contact" placeholder="Enter name" style="width: auto"/>
         </div>-->
        <div>
            <Table :columns="columns1" :data="data1"></Table>
            <Page class="paging" :total="dataCount" :page-size="pageSize" show-total @on-change="changepage"></Page>
        </div>
    </div>
</template>

<script>
    export default {
        name: "baseTable",
        data() {
            return {
                fetchData: [],
                //初始化信息总条数
                dataCount: 0,
                //每页显示多少条
                pageSize: 10,
                //自定义表头
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
                    }, {
                        title: '创建时间',
                        key: 'data'
                    }
                ],
                data1: []
            }
        },
        methods: {
            getTable() {
                this.$store.dispatch('GetTable', "").then(res => {
                    console.log("获取table列表数据" + res.data);
                    this.fetchData = res.data;
                    this.dataCount = res.data.length;
                    if (res.data.length < this.pageSize) {
                        this.data1 = res.data;
                    } else {
                        this.data1 = this.fetchData.slice(0, this.pageSize);
                    }
                })
            },
            changepage(index) {
                var _start = (index - 1) * this.pageSize;
                var _end = index * this.pageSize;
                this.data1 = this.fetchData.slice(_start, _end)
            }
        },
        //服务端加载数据
        //TODO 注意点
        //TODO  1.若果需要进行ref的操作，则调用初始化页面数据的方法可放置在mounted，
        //TODO 2.如果无对dom节点的操作，则请求放在created中，放在created中可以提前发送请求后去数据，界面体验相对比较好
        //TODO 在模板渲染成html或者模板编译进路由之前调用created ，created类型为function
        created() {
            this.getTable();

        },
        //TODO 在模板渲染成html后调用，通常是初始化页面完成之后，再对html的dom节点进行一下需要的操作
        mounted() {

        }
    }
</script>

<style scoped>
    .paging {
        float: right;
        margin-top: 10px;
    }
</style>
