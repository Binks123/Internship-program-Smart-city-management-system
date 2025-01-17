<template>
    <div id='app'>
    </div>
</template>

<script>
import { inject } from "vue";
import mapboxgl from "mapbox-gl";
import { Scale, Fullscreen, MapTheme, MouseLocation } from "@antv/l7";
export default {
    data() {
        return {

        }
    },
    mounted() {
        // map与scene对象
        const { scene, mapboxMap } = inject('#scene_map')
        // map对象
        const map = mapboxMap
        map.on('load', () => {
            // 当前定位(受不可控因素影响，不开VPN定位超时)
            const geolocate = new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                    timeout: 20000
                },
                trackUserLocation: true,
                showUserHeading: true,
            })
            map.addControl(geolocate, 'top-left');
            geolocate.on('error', () => {
                alert('定位稍微出现一点小错误，请稍后尝试！');
            });

            // 方向按钮
            const nav = new mapboxgl.NavigationControl();
            map.addControl(nav, 'top-left');

            // 导航 因版本原因，mapbox-gl/direction库未安装成功，功能不可用
            // map.addControl(
            //     new mapboxgl.MapboxDirections({
            //         accessToken: process.env.VUE_APP_mapboxToken
            //     }),
            //     'top-left'
            // )

            // 设置大气
            mapboxMap.setFog({
                'range': [0.1, 0.8],
                'horizon-blend': 0.1,
                'color': 'white',
                'high-color': 'blue',
                'space-color': 'black',
                'star-intensity': 0.5
            });

        })

        // scene对象
        scene.on('loaded', () => {
            // 缩放比例尺
            scene.addControl(
                new Scale({
                    zoomInTitle: '放大',
                    zoomOutTitle: '缩小',
                    maxWidth: 100
                }));

            // 全屏
            scene.addControl(
                new Fullscreen({
                    // btnText: '进入全屏',
                    title: '全屏',
                    // exitBtnText: '退出全屏',
                    exitTitle: '退出'
                })
            )

            // 地图主题
            scene.addControl(
                new MapTheme({
                    title: '主题',
                    // 引用图片地址https://zhuanlan.zhihu.com/p/474421524
                    options: [
                        { value: 'mapbox://styles/mapbox/streets-v11', text: '街道', img: 'https://pic1.zhimg.com/v2-457f14470e3d7ab879a77ecb22bc92e8_1440w.jpg' },
                        { value: 'mapbox://styles/mapbox/outdoors-v11', text: '户外', img: 'https://picx.zhimg.com/v2-e631bd2e3aa510225ebf13cb0d844711_r.jpg' },
                        { value: 'mapbox://styles/mapbox/light-v10', text: '明亮', img: 'https://pic2.zhimg.com/v2-02b3ebc8141df66064b1c7d5e8bb98e7_1440w.jpg' },
                        { value: 'mapbox://styles/mapbox/dark-v10', text: '黑暗', img: 'https://pic3.zhimg.com/v2-36ded6f343c8ee60135cd320d9296842_1440w.jpg' },
                        { value: 'mapbox://styles/mapbox/satellite-v9', text: '卫星', img: 'https://picx.zhimg.com/v2-0289209dbe23aae1f1af07669828f105_1440w.jpg' },
                        { value: 'mapbox://styles/mapbox/satellite-streets-v11', text: '卫星与街道', img: 'https://pic1.zhimg.com/v2-5c92e2a9dc37618c167f6f6413b04992_1440w.jpg' },
                        { value: 'mapbox://styles/mapbox/navigation-night-v1', text: '导航之夜', img: 'https://picx.zhimg.com/v2-78bfc1c304bb00eed862152e13ed4075_1440w.jpg' },
                        { value: 'mapbox://styles/mapbox/navigation-day-v1', text: '导航-白天', img: 'https://pic2.zhimg.com/v2-02b3ebc8141df66064b1c7d5e8bb98e7_1440w.jpg' },
                    ],
                    popperTrigger: 'hover'
                })
            )


            // 鼠标所在经纬度
            scene.addControl(
                new MouseLocation({
                    transform: (postion) => {
                        return postion.map((item) => item.toFixed(4))
                    },
                    position: 'bottomcenter'
                })
            )
        })
    }
}


</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px
}
</style>