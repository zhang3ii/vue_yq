
<template>
  <div>
    <a-card>
      <div class="topHeader">
        <a-form layout="inline" :form="form" @submit="handleSubmit">
          <div>
            <a-row :gutter="20">
              <a-col :md="6" :sm="24">
                <a-form-item label="城市区域选择">
                  <a-cascader
                    v-decorator="['city']"
                    :options="cityData"
                    placeholder="选择城市区域"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item label="行业">
                  <a-input style="width: 100%"
                           v-decorator="['industry']"
                           placeholder="请输入行业"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item label="店铺">
                  <a-input style="width: 100%"
                           v-decorator="['store_name']"
                           placeholder="请输入店铺名称"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </div>
          <div style="margin-top: 20px">
            <a-row :gutter="20">
              <a-col :md="6" :sm="24" >
                <a-form-item label="合作状态">
                  <a-select
                    mode="multiple"
                    style="width: 200px"
                    v-decorator="['statue']"
                    placeholder="这里选择合作状态"
                  >
                    <a-select-option  :value='item' v-for="(item,i) in stateList" :key="i">{{ item }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item label="电话">
                  <a-select
                    mode="multiple"
                    style="width: 200px"
                    v-decorator="['phone']"
                    placeholder="这里输入电话"
                  >
                    <a-select-option  :value='item' v-for="(item,i) in phoneList" :key="i">{{ item }}</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item label="是否收藏">
                  <a-radio-group
                    :options="plainOptions"
                    v-decorator="['hasCollection']"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-button type="primary" html-type="submit" >查询</a-button>
              </a-col>
            </a-row>
          </div>
        </a-form>
      </div>
    </a-card>

    <div style="width: 50%; margin: 30px auto">
      <a-input-search
        placeholder= "请输入商家名称，地址，联系电话等信息或者店铺id字符串进行检索"
        enterButton="查询"
        size="large"
        @search="onSearch"

      />
      <div style="margin-top: 10px">
        <span style="margin-right: 30px">热搜:</span>
        <a-tag color="cyan" v-for="(item,i) in tagList" @click="tagClick(item)" :key="i">{{ item }}</a-tag>
      </div>
    </div>

    <div>
      <template v-if="hasSelected">
        <a-alert type="info" showIcon >
          <template slot="message">
            <span style="margin-right: 12px">已选择: <a style="font-weight: 600">{{ this.selectedRowKeys.length }}</a></span>
            <span><a href="javascript:;" @click="keyBusiness">关注 &nbsp;&nbsp;</a></span>
            <span>
              <a href="#" @click="hasMonitor">监控 &nbsp;&nbsp;</a>
            </span>
            <span v-if="hasContrast"><a href="javascript:;" @click="Contrast">对比 &nbsp;&nbsp;</a></span>
            <span v-else><a href="javascript:;" @click="cancelContrast">取消 &nbsp;&nbsp;</a></span>
          </template>
        </a-alert>
      </template>
    </div>

    <div>
      <a-table :columns="shopSearchColumns"
               :dataSource="shopSearchData"
               :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      >
        <div
          slot="filterDropdown"
          slot-scope="{ setSelectedKeys, selectedKeys,confirm, clearFilters, column }"
          style="padding: 8px"
        >
          <a-checkbox-group
            :defaultValue = "['店铺']"
            @change="onChange">
            <div v-for="(item,i) in columnsList" :key="i" >
              <a-checkbox
                :value="item" :key="i"
                :disabled="item === '店铺'"
              >{{ item }}</a-checkbox>
            </div>
          </a-checkbox-group>
          <div style="margin-top: 5px">
            <a-button
              size="small"
              type="primary"
              style="width: 50px; margin-right: 8px"
              @click="changeColumns"
            >确定</a-button
            >
            <a-button
              size="small"
              style="width: 50px"
            >取消</a-button
            >
          </div>
        </div>
        <span slot="action" slot-scope="text, record">
          <a href="javascript:;">查看</a>
          <a-divider type="vertical" />
          <a href="javascript:;" @click="hasMonitor">监控</a>
          <a-divider type="vertical" />
          <a href="javascript:;" class="ant-dropdown-link" @click="keyBusiness" > 关注 </a>
        </span>
      </a-table>
    </div>

  </div>


</template>

<script>
  const plainOptions = ['是', '否'];

  const shopSearchColumns = [
    {
      title : '店铺',
      dataIndex: 'store_name',
      scopedSlots: {
        filterDropdown: 'filterDropdown',
        filterIcon: 'filter',
        customRender: 'customRender',
      }
    },
    {
      title: '城市',
      dataIndex: 'city',
    },
    {
      title: '区域',
      dataIndex: 'area',
    },
    {
      title: '行业',
      dataIndex: 'industry',
    },
    {
      title:'健康总分数',
      dataIndex: 'healthScore',
      sorter:(a, b) =>a.healthScore - b.healthScore
    },
    {
      title:"店铺活跃",
      dataIndex: 'shopActivity',
      sorter:(a, b) =>a.shopActivity - b.shopActivity
    },
    {
      title: "意向",
      dataIndex: 'intention',
      sorter:(a, b) =>a.intention - b.intention
    },
    {
      title: "贡献",
      dataIndex: 'con',
    },
    {
      title: "热度",
      dataIndex: 'heat',
      sorter:(a, b) =>a.heat - b.heat
    },
    {
      title: "意向人数",
      dataIndex: 'intentionNumber',
      sorter:(a, b) =>a.intentionNumber - b.intentionNumber
    },
    {
      title: "访问人数",
      dataIndex: 'visitors',
      sorter:(a, b) =>a.visitors - b.visitors
    },
    {
      title: "合作状态",
      dataIndex: 'state',
    },
    {
      title: "更新时间",
      dataIndex: 'updateTime',
    },
    {
      title: '操作',
      scopedSlots: { customRender: 'action' },
    },
      ]

  const shopSearchData = [
    {
      key:1,
      store_name : '韩国艺匠1',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:50,
      shopActivity:33,
      intention: 40,
      heat:88,
      intentionNumber:55,
      visitors:44,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:2,
      store_name : '韩国艺匠2',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:50,
      shopActivity:33,
      intention: 40,
      heat:88,
      intentionNumber:55,
      visitors:44,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:3,
      store_name : '韩国艺匠3',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:50,
      shopActivity:33,
      intention: 40,
      heat:88,
      intentionNumber:55,
      visitors:44,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:4,
      store_name : '韩国艺匠4',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:11,
      shopActivity:333,
      intention: 440,
      heat:885,
      intentionNumber:155,
      visitors:424,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:5,
      store_name : '韩国艺匠5',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:50,
      shopActivity:33,
      intention: 40,
      heat:88,
      intentionNumber:55,
      visitors:44,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:6,
      store_name : '韩国艺匠6',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:50,
      shopActivity:33,
      intention: 40,
      heat:88,
      intentionNumber:55,
      visitors:44,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:7,
      store_name : '韩国艺匠7',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:503,
      shopActivity:343,
      intention: 450,
      heat:868,
      intentionNumber:155,
      visitors:424,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:8,
      store_name : '韩国艺匠8',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:50,
      shopActivity:33,
      intention: 40,
      heat:88,
      intentionNumber:55,
      visitors:44,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:9,
      store_name : '韩国艺匠9',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:530,
      shopActivity:343,
      intention: 410,
      heat:828,
      intentionNumber:545,
      visitors:434,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:10,
      store_name : '韩国艺匠10',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:50,
      shopActivity:33,
      intention: 40,
      heat:88,
      intentionNumber:55,
      visitors:44,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:11,
      store_name : '韩国艺匠11',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:50,
      shopActivity:33,
      intention: 40,
      heat:88,
      intentionNumber:55,
      visitors:44,
      state: '合作',
      updateTime:'2019-12-12'

    },
    {
      key:12,
      store_name : '韩国艺匠12',
      city:'杭州',
      area:'上城区',
      industry:'婚纱摄影',
      healthScore:50,
      shopActivity:33,
      intention: 40,
      heat:88,
      intentionNumber:55,
      visitors:44,
      state: '合作',
      updateTime:'2019-12-12'

    },
  ]

  const tagList = ['韩国艺匠', '周生生珠宝', '曼卡龙珠宝']

  const stateList = ['婚礼纪','百合婚礼','大众点评']

  const phoneList = ['138XXX', '137XXX', '157XXX']

  const cityData = [
    {
      value: '杭州',
      label: '杭州',
      children: [
        {
          value: '上城区',
          label: '上城区',
        },
      ],
    },
    {
      value: '上海',
      label: '上海',
      children: [
        {
          value: '浦东',
          label: '浦东',
        },
      ],
    },
  ]



  export default {
    name: 'shopSearch',
    components: {},
    data(){
      return {
        value1: '是',
        plainOptions,
        shopSearchData,
        shopSearchColumns,
        selectedRowKeys:[],
        hasContrast:true,
        dataStorage:[],
        tagList,
        stateList,
        phoneList,
        MonitorStatue:true,
        cityData,
        columnsList:[],
        changeList:[],
        shopColumnsSet:[],
        form: this.$form.createForm(this, { name: 'advancedQuery'} )
      }
    },
    methods: {
      onSelectChange(selectedRowKeys) {
        this.selectedRowKeys = selectedRowKeys;
      },

      Contrast(){
        const newData = [...this.shopSearchData]
        this.dataStorage = newData
        let resultData = []
        for (let i=0; i<this.selectedRowKeys.length;i++) {
          const key = this.selectedRowKeys[i]
          const target = newData[key-1]
          resultData.push(target)
        }
        this.shopSearchData = resultData;
        this.hasContrast = false;
      },

      cancelContrast() {
        this.shopSearchData = this.dataStorage
        this.hasContrast = true
      },

      tagClick(tag){
        console.log(tag)
      },

      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },

      onSearch(value){
        console.log(value)
      },

      keyBusiness(){
        const selectNum = this.selectedRowKeys.length
        this.$message.success(selectNum + '家商家加入重点商家成功');
      },

      hasMonitor(){
        this.$message.success('设置监控成功');
      },

      columnsTitle() {
        let x;
        let columnsList = []
        let data = this.shopSearchColumns
        for (x in data) {
          columnsList.push(data[x]['title'])
        }
        this.columnsList = columnsList
      },

      onChange(checkedValues) {
        this.changeList = checkedValues;
      },

      changeColumns(){
        let data = this.shopColumnsSet
        let newColums = []
        this.changeList.forEach((v)=>{
          let column = data.find(c=> c.title === v);
          if (column) {
            newColums.push(column)
          }
        })
        this.shopSearchColumns = newColums
      }
    },

    mounted() {
      this.$nextTick(()=>{
        this.form.validateFields();
      });
    },

    computed: {
      hasSelected() {
        return this.selectedRowKeys.length > 0;
      },
    },

    created() {
      this.columnsTitle()
      this.shopColumnsSet = this.shopSearchColumns
    }
  }

</script>

<style scoped>
  a {
    text-decoration:none;
  }
</style>