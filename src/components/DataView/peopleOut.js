export const uesPeopleOut = () => {
    const data = [ // 需要可视化的数据
        { year: '2011', value: 3 },
        { year: '2012', value: 4 },
        { year: '2013', value: 3.5 },
        { year: '2014', value: 5 },
        { year: '2015', value: 4.9 },
        { year: '2016', value: 6 },
        { year: '2017', value: 7 },
        { year: '2018', value: 9 },
        { year: '2019', value: 11 },
    ]

    const config = { // 数据可视化环境配置
        autoFit: true,
        xField: 'year',
        yField: 'value',
        smooth: true,
        meta: {
            value: {
                max: 15,
            },
        },
        seriesField: 'value',
        label: {
            // 可手动配置label数据标签
            position: "top", // 位置：上中下 top bottom midden
            style: { // 样式
                fill: '#FFFFFF',
                opacity: 0.9,
            }
        },
        color: ({ value }) => {
            if (value > 9) {
                return '#dc3545'
            } else if (value > 5) {
                return '#fd7e14'
            } else {
                return '#00B96B'
            }
        },
        legend: false,
        height: 250
    }
    return {
        data, config
    }
}