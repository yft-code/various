<template>
  <div>
    //问题描述:通过选中的子节点的id,找到其父级，并生成一棵新树
    <div>
   <el-tree
            ref="tree"
            :data="dataCopy"
            show-checkbox
            node-key="id"
            @check="check"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="defaultCheckedkeys"
            :props="defaultProps">
    </el-tree> 
    <div>
        <el-button type="primary" @click="handle">处理</el-button>
    </div>
    <div id="myDiv"></div>
    </div>
  </div>
</template>

<script>
export default {
 data(){
    return{
        index:0,
    ids:[],
    defaultCheckedkeys:[],
    defaultProps: {
        children: 'child',
        label: 'value'
      },
     data:[],
     dataCopy:[],
     checked:false,
    }
 },
 mounted(){
// const data1 = {1:'1111'};
// const element = document.getElementById('myDiv');
// console.log('dataSSSS',data1[1]);
 },
 created(){
    let treeMap={id:1,result:[1,2,3,4]}
    let results=[]
    results.push(treeMap)
        console.log('resultscccc',results);
    treeMap.children=[1,2,3,4,5,5]

    // =====================
    //树形图根据子节点的id，获取父辈节点 思路
    //1.先深拷贝一份data数据,用于初始循环时数据使用
    //2.将选择的id的父辈以及当先选择的checked变为true
    //3.遍历循环第2步生成的新树，获取自己想要的数据
    let data=[
    {
        id: "泸州园区",
        value: "泸州园区",
        type: 0,
        disabled: false,
        child: [
            {
                id: "0ce7d445-3d34-470f-993a-bf0ea56cf859",
                value: "矿山",
                type: 1,
                disabled: false,
                child: [
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf8591",
                        value: "1",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf8592",
                        value: "2",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf8593",
                        value: "3",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf8594",
                        value: "4",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf8595",
                        value: "5",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf8596",
                        value: "6",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf8597",
                        value: "7",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf8598",
                        value: "8",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf8599",
                        value: "9",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85910",
                        value: "10",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85911",
                        value: "11",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85912",
                        value: "12",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85913",
                        value: "13",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85914",
                        value: "14",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85915",
                        value: "15",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85916",
                        value: "16",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85917",
                        value: "17",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85918",
                        value: "18",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85919",
                        value: "19",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85920",
                        value: "20",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85921",
                        value: "21",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85922",
                        value: "22",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85923",
                        value: "23",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85924",
                        value: "24",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85925",
                        value: "25",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "0ce7d4453d34470f993abf0ea56cf85926",
                        value: "26",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85927",
                        "value": "27",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85928",
                        "value": "28",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85929",
                        "value": "29",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85930",
                        "value": "30",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85931",
                        "value": "31",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85932",
                        "value": "32",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85933",
                        "value": "33",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85934",
                        "value": "34",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85935",
                        "value": "35",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85936",
                        "value": "36",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85937",
                        "value": "37",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85938",
                        "value": "38",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85939",
                        "value": "39",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85940",
                        "value": "40",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85941",
                        "value": "41",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85942",
                        "value": "42",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "0ce7d4453d34470f993abf0ea56cf85943",
                        "value": "43",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    }
                ]
            }
        ]
    },
    {
        "id": "南京园区",
        "value": "南京园区",
        "type": 0,
        "disabled": false,
        "child": [
            {
                "id": "5096dbc5-27ba-4b58-8401-8f37b9660a3e",
                "value": "新城总部大厦B座",
                "type": 1,
                "disabled": false,
                "child": [
                    {
                        "id": "5096dbc527ba4b5884018f37b9660a3e1",
                        "value": "1",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "5096dbc527ba4b5884018f37b9660a3e2",
                        "value": "2",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "5096dbc527ba4b5884018f37b9660a3e3",
                        "value": "3",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "5096dbc527ba4b5884018f37b9660a3e4",
                        "value": "4",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "5096dbc527ba4b5884018f37b9660a3e5",
                        "value": "5",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "5096dbc527ba4b5884018f37b9660a3e6",
                        "value": "6",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "5096dbc527ba4b5884018f37b9660a3e7",
                        "value": "7",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    }
                ]
            },
            {
                "id": "68d91578-e6ca-4be5-ada0-7b52fedebe34",
                "value": "1办公楼",
                "type": 1,
                "disabled": false,
                "child": [
                    {
                        "id": "68d91578e6ca4be5ada07b52fedebe344",
                        "value": "4",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "68d91578e6ca4be5ada07b52fedebe345",
                        "value": "5",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "68d91578e6ca4be5ada07b52fedebe346",
                        "value": "6",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    }
                ]
            }
        ]
    },
    {
        "id": "成都园区",
        "value": "成都园区",
        "type": 0,
        "disabled": false,
        "child": [
            {
                "id": "741296d2-ab82-4f94-b000-e0d7471a1166",
                "value": "春熙路23号办公楼",
                "type": 1,
                "disabled": false,
                "child": [
                    {
                        "id": "741296d2ab824f94b000e0d7471a11661",
                        "value": "1",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a11662",
                        "value": "2",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a11663",
                        "value": "3",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a11664",
                        "value": "4",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a11665",
                        "value": "5",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a11666",
                        "value": "6",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a11667",
                        "value": "7",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a11668",
                        "value": "8",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a11669",
                        "value": "9",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116610",
                        "value": "10",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116611",
                        "value": "11",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116612",
                        "value": "12",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116613",
                        "value": "13",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116614",
                        "value": "14",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116615",
                        "value": "15",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116616",
                        "value": "16",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116617",
                        "value": "17",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116618",
                        "value": "18",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116619",
                        "value": "19",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116620",
                        "value": "20",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116621",
                        "value": "21",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116622",
                        "value": "22",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    },
                    {
                        "id": "741296d2ab824f94b000e0d7471a116623",
                        "value": "23",
                        "type": 2,
                        "disabled": false,
                        "child": null
                    }
                ]
            }
        ]
    },
    {
        id: "青山园区",
        value: "青山园区",
        type: 0,
        disabled: false,
        child: [
            {
                id: "bc5104fa-02b0-483e-96a7-06dab2cd0046",
                value: "原料仓库",
                type: 1,
                disabled: false,
                child: [
                    {
                        id: "bc5104fa02b0483e96a706dab2cd00461",
                        value: "1",
                        type: 2,
                        disabled: false,
                        child: null
                    },
                    {
                        id: "bc5104fa02b0483e96a706dab2cd00462",
                        value: "2",
                        type: 2,
                        disabled: false,
                        child: null
                    }
                ]
            }
        ]
    }
    ]
    this.dataCopy=JSON.parse(JSON.stringify(data))
    // =====================扁平化数据处理
    let arr = [
        {id: 1, name: '部门1', pid: 0},
        {id: 2, name: '部门2', pid: 1},
        {id: 3, name: '部门3', pid: 1},
        {id: 4, name: '部门4', pid: 3},
        {id: 5, name: '部门5', pid: 4},
        {id: 7, name: '部门1', pid: 6},
        {id: 8, name: '部门2', pid: 7},
        {id: 9, name: '部门3', pid: 8},
        {id: 10, name: '部门4', pid: 8},
        {id: 11, name: '部门5', pid: 9},
    ]
    // this.arrayToTree(arr, 1)
    // 扩展,可以生成无数颗树的算法写法
    // ======通过传不同的父级id生成不同的树
    let result=[]
    let item=[0,6]
    // item.map(val=>{
    //  result.push(this.ToTree(arr,val)) 
    // })
    result.push(this.ToTree(arr,0))
    console.log('result11111',result)
 },
 methods:{

     // =================树形图根据子节点的id，获取父辈节点
     // 将选择的id的父辈以及当先选择的checked变为true
    findParent(data, target, result) {
      for (let i in data) {
        let item = data[i]
        if (item.id === target) {
            item.checked=true
            // result.unshift(item.value)
            return true
           }
        if (item.child && item.child.length > 0) {
          let ok = this.findParent(item.child, target, result)
          if (ok) {
            item.checked=true
            // result.unshift(item.value)
            return true
          }
        }
      }
      //走到这说明没找到目标
      return false
    },
     // 获取自己想要的数据
      getTreeList(treeList,newTreeList) {
        treeList.map(c=>{
            if(c.checked){     
          let tempData={
            targetId:c.id,
            type:c.disabled
          }
          if(c.child && c.child.length>0){
            tempData.children=[]
            this.getTreeList(c.child,tempData.children)
          }
          newTreeList.push(tempData)
          }
        })
        console.log('newTreeList',newTreeList);
      },

    handle(){
      let data=[]
      this.getTreeList(this.data,data) 
      //打印出来的data为最终的想要的结果
      console.log('data',data);
    },

    //=========================将扁平化数据变成树形结构
    // way1:Map方法
    // Map和Object有点类似,都是键值对来存储数据,和Object不同的是,JavaScript支持的所有类型都可以当作Map的key
    // ids为pid
    // 只有就是将父级的id与自己的pid相等的话。就变成他的孩子
    // 还涉及到深浅拷贝知识点
    //   1）、基本类型：就是值类型，即在变量所对应的内存区域存储的是值
    //   2）、引用类型：就是地址类型。
    // 浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存（分支）。
    // 思路：
        ToTree(items,ids) {
            const result = [];// 存放结果集
            const itemMap = {}; 
            for (const item of items) {
            // debugger
            const id = item.id;
            const pid = item.pid;
            // 2,1
            //先转成map存储
            if (!itemMap[id]) {
            itemMap[id] = {
                children: [],
            }
            }
            itemMap[id] = {
            ...item,
            children: itemMap[id]['children']
            }
            const treeItem =  itemMap[id];
            console.log('treeItem',treeItem);
        if (pid === ids) {
            // 一棵树只有一个最大的父节点
            result.push(treeItem);
            console.log('result1',result);
            //   result=treeItem
            } else {
            if (!itemMap[pid]) {
                itemMap[pid] = {
                children: [],
              }
            }
            // 就是将父级的id与自己的pid相等的话。就变成他的孩子
            itemMap[pid].children.push(treeItem)
                console.log("itemMapsss",this.index++,itemMap);
              } 
            }
            return result;
        },
  getNode(arr, id){
  const node = arr.find(i => i.id === id); // 找到当前元素
  node.children = [];
  for(const item of arr) {
    if (item.pid === id) {
      // 给当前元素添加子节点，每个子节点递归调用
      node.children.push(getNode(arr, item.id));
    }
  }
  return node;
},
    // forEach 不能使用return、break等中断循环），不改变原数组，无返回值undefined。
    // map循环的返回值一直为一个数组，不能返回其他的变量
  getChildren(arr, id) {
  const res = [];
  for (const item of arr) {
    if (item.pid === id) { // 找到当前id的子元
      // 插入子元素，每个子元素的children通过回调生成
      res.push({...item, children: this.getChildren(arr, item.id)});
    }
  }
  console.log('res',res);
  return res;
},
    // 递归方法
    arrToTree1(arr,id){
    const res = [];
    arr.forEach(item=>{
       if(item.pid===id){
           res.push({...item, children: this.arrToTree1(arr, item.id)});
        }             
       })
        return res;
    },
    arrayToTree(arr,rootNode,newTreeList) {
        arr.forEach(item => {
        if(item.id===rootNode){
          let tempData={
                id:item.id,
                name:item.name
            }
           
          arr.forEach(val=>{
            if(val.pid===rootNode){
            //    let children={
            //      id:val.id,
            //     name:val.name
            //    }
             tempData.children=tempData.children.push({
                id:val.id,
                name:val.name
             })
            }
          })
       
        }
        newTreeList.push(tempData)
    })
    return newTreeList
    },
    check(data, selectObj){
        // ids为选中的子元素的id的集合
       this.ids = this.$refs.tree.getCheckedKeys(true)
       console.log('ids',this.ids);
       //重新赋值原始值,进行数据处理
       this.data= JSON.parse(JSON.stringify(this.dataCopy))
       let result=[]
       this.ids.map(item=>{
        this.findParent(this.data,item,result)
       })
       console.log('data',result);
    }
   }
}
</script>

<style>

</style>