export const population = () => {
    const data = [
        // 需要可视化的数据
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
        appendPadding: 10,
        angleField: "value",
        colorField: "type",
        radius: 0.7,
        label: {
            type: "inner",
            labelHeight: 12,
            offset: "-10%",
            content: "{name}\n{percentage}",
            style: {
                // 设置标注样式
                fill: '#fff',
                stroke: 'black',
                shadowColor: '#652e80',
                shaowBlur: 20,
                cursor: 'pointer'
            }
        },
        interactions: [{ type: "element-active" }],
        // use custom theme
        theme: "custom-theme",
        height: 270,
        legend: { // 图例
            position: "top-center",
            itemName: {
                style: {
                    fill: '#fff'
                },
            },
            marker:{ // 图标
                symbol:'hollowCircle'
            }
        }
    }
    return {
        data, config
    }
}