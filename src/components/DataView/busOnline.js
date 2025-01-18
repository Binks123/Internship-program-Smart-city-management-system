export const busOnline = () => {
    const data = [ // 需要可视化的数据
        {
            type: '地铁', value: 29,
        }, {
            type: '公交', value: 27,
        }, {
            type: '步行', value: 12,
        }, {
            type: '自行车', value: 13,
        }, {
            type: '私家车', value: 20,
        }, {
            type: '其它', value: 7,
        },
    ]
    const config = { // 数据可视化环境配置
        addpendPadding: 10,
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
        label: {
            // 可手动配置label数据标签
            position: "top", // 位置：上中下 top bottom midden
            style: { // 样式
                fill: '#FFFFFF',
                opacity: 0.9,
            }
        },
        radius: 0.7,
        interactions: [{ type: 'element-active' }],
        height: 250
    }
    return {
        data, config
    }
}