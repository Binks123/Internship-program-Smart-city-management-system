# **Internship-program-Smart-city-management-system**

实习练习项目-**智慧城市管理系统**

项目来自[生产实习练习项目-智慧城市管理系统](https://github.com/kongbai926/Internship-program-Smart-city-management-system)在此基础上修改完善。

------------------------------------------------

- [**Internship-program-Smart-city-management-system**](#internship-program-smart-city-management-system)
  - [项目说明](#项目说明)
  - [系统说明](#系统说明)
  - [系统部署说明](#系统部署说明)
  - [提交历史记录说明](#提交历史记录说明)

## 项目说明

> 此系统是实习过程中编写的一个练习项目，大体是制作一个智慧城市服务系统，可以在系统中进行**城市数据查询**、**图层编辑**以及**城市事故查看**等操作。具体功能细节以及UI界面与教学视频不是完全一致，但大概功能都已实现。

## 系统说明

> 本系统采用***VUE+Mapbox-gl+antv/l7***创建前端服务，使用Element-ui辅助UI界面设计。
> 系统中展示的事故数据均来自自己编造，事件**不具真实性**，仅做展示使用，可更改代码请求后端服务获取数据。
> 城市三维数据以及城市道路数据来自antv/l7例子中使用的数据，**不保证其真实性以及可商业使用性**。1.[圆形扫光城市](https://l7.antv.antgroup.com/examples/gallery/animate/#build_sweep) 2.[上海公交](https://l7.antv.antgroup.com/examples/line/path/#shanghai_bus)

## 系统部署说明

> 在获取所有文件之后，需要在根目录下，也就是**Internship-program-Smart-city-management-system/**目录下，创建“.env”文件，其中设置变量：**VUE_APP_mapboxToken**，它的值就是Mapbox-gl申请的token，由于mapbox的使用需要token，所以这个变量是必须的，否则，本系统的“基础”都不存在，也就不必使用本系统了。
> 至于mapbox的token获取方式，可以自行在网上查找方法。

## 提交历史记录说明

> ### *2023-12-11* 第一次提交
> 
> 本系统在***2023.12.11***正式完成项目代码建设，系统中完成几乎所有功能与服务，正常来说，已经符号实习教学过程的项目教程，所以上传代码进行保存。
> 后续可能会增加代码，增加系统功能，也会提交代码进行保存。
> 
> > ### 可能存在的问题
> > 
> > 1. 功能较少、功能单一。
> > 2. 未使用后端服务，数据不安全。
> > 3. 数据来源不真实。
