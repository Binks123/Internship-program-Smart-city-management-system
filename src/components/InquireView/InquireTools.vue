<template>
    <el-popover placement="top" :width="200" trigger="click">
        <div class="tools">
            <i v-for="item in tools" :class="['iconfont', `icon-${item}`]" @click="launch(item)">
                <img :src="require(`@/assets/${item}.png`)" alt="图片丢失">
            </i>
        </div>
        <template #reference>
            <slot></slot>
        </template>
    </el-popover>
</template>

<script>
import { DrawPolygon, DrawRect, DrawCircle, DrawEvent } from "@antv/l7-draw";
import { inject } from "vue";
import { booleanPointInPolygon, point, polygon } from "@turf/turf";
export default {
    data() {
        return {
            scene: {}, // the scene 初始化scene对象
            tools: ['drawPolygonTool', 'drawRectTool', 'drawCircleTool', 'delete'], // 工具箱
            drawTools: {}, // 绘制工具的功能
            dataSource: [
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5837521, 34.7984531], type: 'Point'
                    },
                    properties: {
                        id: 'Point-1', name: '剐蹭'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5121732, 34.6705985], type: 'Point'
                    },
                    properties: {
                        id: 'Point-2', name: '撞车'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5872408, 34.7552543], type: 'Point'
                    },
                    properties: {
                        id: 'Point-3', name: '追尾'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.6893012, 34.6454357], type: 'Point'
                    },
                    properties: {
                        id: 'Point-4', name: '醉驾'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.6358361, 34.6738124], type: 'Point'
                    },
                    properties: {
                        id: 'Point-5', name: '车祸'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5409203, 34.8399206], type: 'Point'
                    },
                    properties: {
                        id: 'Point-6', name: '打架'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5619721, 34.7425673], type: 'Point'
                    },
                    properties: {
                        id: 'Point-7', name: '追尾'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.1873241, 34.7382065], type: 'Point'
                    },
                    properties: {
                        id: 'Point-8', name: '生育'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5900537, 34.8416312], type: 'Point'
                    },
                    properties: {
                        id: 'Point-9', name: '高血压'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.1340155, 34.7112328], type: 'Point'
                    },
                    properties: {
                        id: 'Point-10', name: '心脏病'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5079342, 34.9370224], type: 'Point'
                    },
                    properties: {
                        id: 'Point-11', name: '剐蹭'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.1648054, 34.9087771], type: 'Point'
                    },
                    properties: {
                        id: 'Point-12', name: '超速'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.6764056, 34.7154537], type: 'Point'
                    },
                    properties: {
                        id: 'Point-13', name: '逆行'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5157358, 34.9076296], type: 'Point'
                    },
                    properties: {
                        id: 'Point-14', name: '剐蹭'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5923243, 34.7413429], type: 'Point'
                    },
                    properties: {
                        id: 'Point-15', name: '醉驾'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5331412, 34.7185573], type: 'Point'
                    },
                    properties: {
                        id: 'Point-16', name: '逃逸'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5251281, 34.8322674], type: 'Point'
                    },
                    properties: {
                        id: 'Point-17', name: '醉驾'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5798033, 34.7274379], type: 'Point'
                    },
                    properties: {
                        id: 'Point-18', name: '车祸'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.5157125, 34.7741342], type: 'Point'
                    },
                    properties: {
                        id: 'Point-19', name: '车祸'
                    },
                },
                {
                    type: 'Feature',
                    geometry: {
                        coordinates: [113.6735289, 34.6473892], type: 'Point'
                    },
                    properties: {
                        id: 'Point-20', name: '逃逸'
                    },
                }
            ]
            , // the source 事故数据源
            eventData: [] // the event data 事件数据。在绘制的图形内部出现的事件
        }
    },
    emits: [
        'eventData',
    ],
    methods: {
        // 添加绘制工具
        drawInter: function () {
            this.tools.forEach((item, index) => {
                switch (item.valueOf()) {
                    case 'drawPolygonTool':
                        this.drawTools[item] = new DrawPolygon(this.scene, {
                            areaOptions: {}
                        });
                        break;
                    case 'drawRectTool':
                        this.drawTools[item] = new DrawRect(this.scene, {
                            areaOptions: {}
                        });
                        break;
                    case 'drawCircleTool':
                        this.drawTools[item] = new DrawCircle(this.scene, {
                            areaOptions: {}
                        });
                        break;
                    default:
                        break;
                }
            })
        },

        // 停止之前选择的绘制工具
        stopDraw: function () {
            for (const key in this.drawTools) {
                var tool = this.drawTools[key];
                if (tool) {
                    tool.disable()
                }
            }
        },

        // 清除绘制的所有图像
        clearFearture: function () {
            for (const key in this.drawTools) {
                var tool = this.drawTools[key];
                if (tool) {
                    tool.clear()
                    tool.removeActiveFeature()
                }
            }
        },

        // 不同工具图标点击后触发事件，激发对应的绘制工具
        launch: function (option) {
            this.stopDraw() // 停止所有绘制工具的使用
            if (option === 'delete') {
                this.clearFearture() // 单独清除所有图像以及清除Fearture，在上一个函数调用时已经停止使用绘制工具
                this.eventData = [] // 清空事件数据
                document.onkeydown = null // 去除文档键盘监听事件
                return
            }
            var tool = this.drawTools[option] // 根据用户点击的选项'取出'对应的绘制工具
            // 启用用户点击选择的工具
            tool.enable()
            // 用户点击工具之后，监听键盘事件
            this.listen_keyBoard(tool)
            // 当用户绘制完成之后，将绘制图像范围内的事故数据放出去
            tool.on(DrawEvent.Change, (feartures) => {
                feartures.forEach((fearture) => {
                    const { geometry: { coordinates } } = fearture // 多边形的顶点坐标数组
                    var polygonUrf = polygon(coordinates) // 生成需要判断的外层的面
                    const resData = this.dataSource.filter(item => {
                        const { geometry: { coordinates } } = item // 事故数据中的点坐标数组
                        var pointUrf = point(coordinates) // 生成需要判断的内部的点
                        var isInArea = booleanPointInPolygon(pointUrf, polygonUrf) // boolean ‘生成的点’是否在‘生成的面’中的返回值
                        return isInArea
                    })
                    this.eventData = resData
                });
            });
        },

        // 监听键盘事件。
        listen_keyBoard(tool) {
            document.onkeydown = (event) => {
                // console.log(event)
                if (event.code === 'Escape') { // 当用户按下esc键时，停止绘制工具的使用，同时取消键盘监听事件
                    tool.disable()
                    document.onkeydown = null
                }
            }
        }
    },
    mounted() {
        const { scene } = inject('#scene_map')
        this.scene = scene

        // 初始化绘制工具
        this.drawInter()
    },
    watch: {
        eventData(newData) {
            this.$emit('eventData', newData)
        }
    }
}
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px
}

.tools {
    max-width: 200px;
    max-height: 30px;
    min-width: 50px;
    min-height: 10px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
}

.iconfont img {
    width: 25px;
    height: 25px;
}

.iconfont:hover {
    cursor: pointer;
    background-color: aqua;
}
</style>