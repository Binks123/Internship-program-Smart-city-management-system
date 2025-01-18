<template>
    <div class="panel-item panel-left">
        <Panel>
            <template #header>
                <h3>
                    每年大学生数量统计
                </h3>
            </template>
            <template #default>
                <ColumnChart v-bind="peopleOut_config" :data="peopleOut_data"></ColumnChart>
            </template>
        </Panel>
        <Panel> <template #header>
                <h3>
                    公共交通在线数量
                </h3>
            </template>
            <template #default>
                <RoseChart v-bind="busOnline_config" :data="busOnline_data"></RoseChart>
            </template>

        </Panel>
    </div>
    <div class="panel-item panel-right">
        <Panel>
            <template #header>
                <h3>
                    公共交通支出费用
                </h3>
            </template>
            <template #default>
                <PieChart v-bind="population_config" :data="population_data"></PieChart>
            </template>

        </Panel>
        <Panel>
            <template #header>
                <h3>
                    医疗服务情况
                </h3>
            </template>
            <template #default>
                <div id="hospital">
                    <div class="items" v-for="item in hospital">
                        <p>{{ item.title }} <span>{{ item.amount }}</span> {{ item.unit }}</p>
                        <img :src='item.imgUrl' alt="详细信息">
                    </div>
                </div>
            </template>
        </Panel>
    </div>
</template>

<script setup>
import Panel from "../components/DataView/Panel.vue";
// 数据可视化画板
import { ColumnChart, RoseChart, PieChart } from "@opd/g2plot-vue";

// 导入可视化数据
import { uesPeopleOut } from "../components/DataView/peopleOut";
import { busOnline } from "../components/DataView/busOnline";
import { population } from "../components/DataView/population"

const { data: peopleOut_data, config: peopleOut_config } = uesPeopleOut()
const { data: busOnline_data, config: busOnline_config } = busOnline()
const { data: population_data, config: population_config } = population()

// 构造医疗服务数据
const hospital = [
    {
        title: '医院',
        unit: '家',
        amount: 30,
        imgUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.K00K2_03yowinYM6BxNSkQHaFj?rs=1&pid=ImgDetMain'
    }, {
        title: '诊所',
        unit: '家',
        amount: 400,
        imgUrl: 'https://bpic.588ku.com/back_origin_min_pic/20/06/15/30c84b845bbe9d1ec1e551cc160ee64d.jpg'
    }, {
        title: '床位',
        unit: '张',
        amount: 20000,
        imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.7b883bc14439551cddd8d7382f51e181?rik=zygWLeyx9QIVfw&riu=http%3a%2f%2fimg.ndsww.com%2fa%2f10001%2f202204%2f016fca79954abf183c9c05259cfc9a00.jpeg&ehk=83ndpRoDeW60bEUAe9ojZ8dwhh1995avGiDPAMleWMI%3d&risl=&pid=ImgRaw&r=0'
    }, {
        title: '医护人员',
        unit: '位',
        amount: 50000,
        imgUrl: 'https://img.51miz.com/Element/00/80/91/58/ecce51fa_E809158_9c69d36a.jpg'
    }
]
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px
}

.panel-item {
    margin-top: 1px;
    width: 25vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.panel-left {
    position: absolute;
    left: 1vw;
}

.panel-right {
    position: absolute;
    left: 1146px;
}

/* 医疗服务面板样式 */
#hospital>.items>p {
    text-align: center;
    font-size: 12;
}

#hospital>.items>p>span {
    color: rgb(14, 187, 37);
    text-decoration: double;
}

#hospital>.items>img {
    max-width: 50px;
    max-height: 70px;
}

#hospital>.items {
    width: 150px;
    height: 100px;
}

#hospital {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
</style>