<template>
    <Table :columns="columns1" :data="data1"></Table>
</template>

<script>
    export default {
        name: "baseTable",
        data(){
            return{
                columns1:[
                    {
                        title:'Name',
                        key:'name'
                    },
                    {
                        title:'Age',
                        key:'age'
                    },
                    {
                        title:'Address',
                        key:'address'
                    }
                ],
                data1:[
                    {
                        name:'Json Brown',
                        age:18,
                        address:'New York No.1',
                        data:'2106-10-03'
                    },
                    {
                        name:'Json Brown Brother',
                        age:20,
                        address:'New York No.1',
                        data:'2106-10-03'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
