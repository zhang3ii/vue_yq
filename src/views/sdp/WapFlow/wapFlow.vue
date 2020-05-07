<template>
  <div>
    <shop-header></shop-header>
    <div class="headBlock">
      <a-row :gutter="24">
<!--        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">-->
<!--          <chart-card :loading="false" title=" " total=space>-->
<!--            <a-tooltip title="该店铺的历史总浏览用户数" slot="action">-->
<!--              <a-icon type="Info-circle-o" />-->
<!--            </a-tooltip>-->
<!--&lt;!&ndash;            <span>&ndash;&gt;-->
<!--&lt;!&ndash;              当日浏览用户数:&ndash;&gt;-->
<!--&lt;!&ndash;            </span>&ndash;&gt;-->
<!--&lt;!&ndash;              <span>&ndash;&gt;-->
<!--&lt;!&ndash;                {{ day_user_num }}&ndash;&gt;-->
<!--&lt;!&ndash;              </span>&ndash;&gt;-->
<!--          </chart-card>-->
<!--        </a-col>-->
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="false" title="总浏览次数" :total=total_user_num>
            <a-tooltip title="该店铺的总浏览次数" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
<!--            <span>-->
<!--              当日浏览次数:-->
<!--            </span>-->
<!--            <span>-->
<!--                {{ day_avg_visit_time }}-->
<!--              </span>-->
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="false" title="总浏览用户数" :total=total_user_count>
            <a-tooltip title="该店铺的商品主页和商品详情页浏览用户数" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
<!--            <span>-->
<!--              当日商品浏览用户数:-->
<!--            </span>-->
<!--            <span>-->
<!--                {{ day_sale }}-->
<!--              </span>-->
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="false" title="平均浏览时长" :total= avg_visit_time>
            <a-tooltip title="该店铺的总浏览时长/总浏览人数" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
<!--            <span>-->
<!--              当日浏览时长:-->
<!--            </span>-->
<!--            <span>-->
<!--                {{ day_user_count }}-->
<!--              </span>-->
          </chart-card>
        </a-col>
      </a-row>
    </div>

    <div style="margin-bottom: 24px">
        <a-row :gutter="24">
          <a-col :sm="24" :md="12" :xl="18" :style="{ marginBottom: '24px' }">
            <a-card :loading="false" :bordered="false" :body-style="{padding: '0'}">
              <div class="salesCard">
                <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
                  <div class="extra-wrapper" slot="tabBarExtraContent">
                    <div class="extra-item">
                      <a @click="change_type(week)">本周</a>
                      <a @click="change_type(month)">本月</a>
                      <a @click="change_type(year)">本年</a>
                    </div>
                  </div>
                  <a-tab-pane loading="false" tab="浏览用户数" key="1">
                    <div style="width: 80%">
                      <ve-line :data="user_count_line"></ve-line>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane tab="浏览次数" key="2">
                    <div style="width: 80%">
                      <ve-line :data="page_view_line"></ve-line>
                    </div>
                  </a-tab-pane>
                </a-tabs>
              </div>
            </a-card>
          </a-col>
          <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
            <a-card>
              <a-tabs default-active-key="1" size="small">
                <a-tab-pane tab="访问模块" key="1" loading="false">
                  <rank-list title="TOP10访问模块" :list="blockRankList"/>
                </a-tab-pane>
                <a-tab-pane tab="访问用户" key="2">
                  <rank-list title="TOP10访问用户" :list="userRankList"/>
                </a-tab-pane>
              </a-tabs>
            </a-card>
          </a-col>
        </a-row>
    </div>

    <div style="margin-bottom: 24px">
      <a-card title="访问占比">
        <a-row :gutter="24">
          <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
            <ve-ring :data="phoneData"></ve-ring>
          </a-col>
          <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
            <ve-ring :data="visitTimeData"></ve-ring>
          </a-col>
          <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
            <ve-ring :data="registerData" :settings="registerSetting"></ve-ring>
          </a-col>
          <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
            <ve-ring :data="timeSpentData"></ve-ring>
          </a-col>
        </a-row>
      </a-card>
    </div>

    <div style="margin-bottom: 24px">
      <a-row :gutter="24">
        <a-col :sm="24" :md="12" :xl="12" :style="{ marginBottom: '24px' }">
          <a-card title="新老用户占比">
            <ve-ring :data="userData"></ve-ring>
          </a-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="12" :style="{ marginBottom: '24px' }">
          <a-card title="访问模块占比">
            <div style="width: 80%;margin: 0 auto">
              <ve-histogram :data="histogramData"></ve-histogram>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>

<!--    <div style="margin-bottom: 24px">-->
<!--      <a-row :gutter="24">-->
<!--        <a-col :sm="24" :md="12" :xl="10" :style="{ marginBottom: '24px' }">-->
<!--          <a-card title="店铺用户来源">-->
<!--            <div style="min-height: 400px; margin: 20px">-->
<!--              <a-table-->
<!--                :columns="columns"-->
<!--                :dataSource="data"-->
<!--                :loading="loading"-->
<!--              >-->
<!--              </a-table>-->
<!--              <nav style="text-align: center; margin-top: 20px">  &lt;!&ndash; 分页居中放置&ndash;&gt;-->
<!--                <div>-->
<!--                  <a-pagination-->
<!--                    :pageSizeOptions="pageSizeOptions"-->
<!--                    :total="total"-->
<!--                    :pageSize="pageSize"-->
<!--                    v-model="current"-->
<!--                    showQuickJumper-->
<!--                  >-->
<!--                    <template slot="buildOptionText" slot-scope="props">-->
<!--                      <span v-if="props.value!=='50'">{{props.value}}条/页</span>-->
<!--                      <span v-if="props.value==='50'">全部</span>-->
<!--                    </template>-->
<!--                  </a-pagination>-->
<!--                </div>-->
<!--              </nav>-->
<!--            </div>-->
<!--          </a-card>-->
<!--        </a-col>-->
<!--        <a-col :sm="24" :md="12" :xl="14" :style="{ marginBottom: '24px' }">-->
<!--          <a-card title="访问时长趋势">-->
<!--            <div>-->
<!--              <div style="float: left">-->
<!--                <div class="text">平均访问时长</div>-->
<!--                <div class="heading">210s</div>-->
<!--              </div>-->
<!--              <div class="extra-item-visit">-->
<!--                  <a>今日</a>-->
<!--                  <a>本周</a>-->
<!--                  <a>本月</a>-->
<!--                  <a>本年</a>-->
<!--              </div>-->
<!--              <div style="width:80%">-->
<!--                <ve-histogram :data="visitData"></ve-histogram>-->
<!--              </div>-->
<!--            </div>-->
<!--          </a-card>-->
<!--        </a-col>-->
<!--      </a-row>-->
<!--    </div>-->

<!--    <div>-->
<!--      <a-card title="店铺访问来源与去向">-->
<!--        <VeSankey :data="SkData" :settings="SkSettings"></VeSankey>-->
<!--      </a-card>-->
<!--    </div>-->

  </div>
</template>

<script>
  import { ChartCard, RankList } from '@/components'
  import shopHeader  from '@/views/sdp/shopHeader'
  import VeSankey from 'v-charts/lib/sankey.common'
  import VeLine from 'v-charts/lib/line.common'
  import VeHistogram from 'v-charts/lib/histogram.common'
  import VeRing from 'v-charts/lib/ring.common'
  import { getUserResourcesFlowFour,getUserResourcesFlowTop,getUserResourcesFlowTable } from '../../../api/SDP'


  const SkData =  {
    columns: ['页面', '访问量'],
      rows: [
      { '页面': '首页', '访问量': 100000 },
      { '页面': '内容', '访问量': 100000 },
      { '页面': '店铺', '访问量': 80000 },
      { '页面': '领券', '访问量': 10000 },
      { '页面': '商品', '访问量': 80000 },
      { '页面': '我的', '访问量': 2000 }
    ]
  }

  const skSetting = {
    links:[
      { source: '内容', target: '领券', value: 0.3 },
      { source: '内容', target: '店铺', value: 0.7 },
      { source: '首页', target: '店铺', value: 1 },
      { source: '店铺', target: '商品', value: 0.7 },
      { source: '店铺', target: '我的', value: 0.3 },
      { source: '商品', target: '领券', value: 1 },
    ]
  }

  //表字段
  const columns = [
    {
      title: '排名',
      dataIndex: 'rank'
    },
    {
      title: '来源渠道',
      dataIndex: 'source',
    },
    {
      title: '用户数',
      dataIndex: 'userNumber',
    },
    {
      title: '周涨幅',
      dataIndex: 'weeklyGains',
    },
  ];

  const visitData =  {
    columns: ['月份', '>150s', '90~150s', '<150s'],
    rows: [
      { '月份': '1月', '>150s': 13, '90~150s':20, '<150s':33},
      { '月份': '2月', '>150s': 35, '90~150s':21, '<150s':33},
      { '月份': '3月', '>150s': 29, '90~150s':22, '<150s':32},
      { '月份': '4月', '>150s': 17, '90~150s':33, '<150s':13},
      { '月份': '5月', '>150s': 37, '90~150s':25, '<150s':22},
    ]
  }

  export default {
    name: 'wapFlow',
    components: {
      ChartCard,
      shopHeader,
      VeSankey,
      RankList,
      VeLine,
      VeHistogram,
      VeRing
    },
    data (){
      // this.SkSettings = skSetting

      return {
        //表格设置
        data:[],
        loading:false,
        columns,
        userRankList:[],
        total_user_num: 0,
        total_avg_visit_time: 0,
        total_sale: 0,
        total_user_count: 0,
        day_user_num: 0,
        day_avg_visit_time: 0,
        avg_visit_time:0,
        day_sale:0,
        day_user_count:0,
        blockRankList:[],
        timeSpentData:{},
        visitTimeData:{},
        registerData:{},
        registerSetting :{
          limitShowNum: 4,
          // legendLimit: 10
        },
        phoneData:{},
        userData:{},
        histogramData:{},
        user_count_line:{},
        page_view_line:{},
        week: 'week',
        month: 'month',
        year: 'year',
        num: 0,
        queryParam :{},
        table_duration_type: 'month',
        space:''
      }
    },
    methods:{
      query() {
        getUserResourcesFlowFour (this.queryParam).then(res => {
          this.total_user_num = res.data.total_user_num
          this.avg_visit_time = res.data.avg_visit_time
          this.total_avg_visit_time = res.data.total_avg_visit_time
          this.total_sale = res.data.total_sale
          this.total_user_count = res.data.total_user_count
          this.day_user_num = res.data.day_user_num
          this.day_avg_visit_time = res.data.day_avg_visit_time
          this.day_sale = res.data.day_sale
          this.day_user_count = res.data.day_user_count
        });
        getUserResourcesFlowTop (this.queryParam).then(res => {
          const store_user_duration_top10 = res.data.store_user_duration_top10
          const store_user_block_top10 = res.data.store_user_block_top10
          const user_device_maps = res.data.user_device_maps
          const user_level_maps = res.data.user_level_maps
          const user_sorce_maps = res.data.user_sorce_maps
          const user_time_interval_maps = res.data.user_time_interval_maps
          const duration_count_maps = res.data.duration_count_maps
          this.user_device_maps_methods(user_device_maps)
          this.user_level_maps_methods(user_level_maps)
          this.user_sorce_maps_methods(user_sorce_maps)
          this.user_time_interval_maps_methods(user_time_interval_maps)
          this.duration_count_maps_methods(duration_count_maps)
          this.store_user_block_top10_methods(store_user_block_top10)
          this.store_user_duration_top10_methods(store_user_duration_top10)
          this.store_user_block_chart(store_user_block_top10)
        });
        const params = {
          hbh_store_id:this.num,
          table_duration_type:this.table_duration_type
        }
        getUserResourcesFlowTable (params).then(res => {
          const UserFlowTable = res.data.table;
          this.line_methods(UserFlowTable)
        })
      },
      user_device_maps_methods (data) {
        const phoneData = {
          columns: ['手机机型', '用户数量'],
          rows: []
        };
        let x;
        for (x in data){
          phoneData.rows.push(
            {
              '手机机型':x,
              '用户数量':data[x]
            }
          )
        }
        this.phoneData = phoneData
      },
      user_level_maps_methods (data) {
        const userData = {
          columns: ['用户类型', '用户数量'],
          rows:[]
        }
        let x;
        for (x in data) {
          userData.rows.push({
            '用户类型':x,
            '用户数量':data[x]
          })
        }
        this.userData = userData
      },
      user_sorce_maps_methods (data) {
        const registerData = {
          columns: ['注册来源', '用户数量'],
          rows: []
        };
        let x;
        for (x in data) {
          registerData.rows.push({
            '注册来源':x,
            '用户数量':data[x]
          })
        }
        this.registerData = registerData
      },
      user_time_interval_maps_methods (data) {
        const visitTimeData = {
          columns: ['访问时间段', '用户数量'],
          rows: []
        };
        let x;
        for (x in data) {
          visitTimeData.rows.push(
            {
              '访问时间段':x,
              '用户数量':data[x],
            }
          )
        }
        this.visitTimeData = visitTimeData
      },
      duration_count_maps_methods(data) {
        const timeSpentData = {
          columns: ['访问时长', '用户数量'],
          rows: [],
        }
        let x;
        for (x in data) {
          timeSpentData.rows.push({
            '访问时长': x,
            '用户数量': data[x]
          })
        }
        this.timeSpentData = timeSpentData
      },
      store_user_duration_top10_methods (data) {
        let userRankList = []
        let x;
        let newData ={}
        let keySorted = Object.keys(data).sort(function(a,b) {
          return data[b] - data[a]
        })
        for(let i=0;i<keySorted.length;i++){
          newData[keySorted[i]]=data[keySorted[i]];
        }
        for (x in newData){
          userRankList.push({
            name: x,
            total: data[x]
          })
        }
        this.userRankList = userRankList
      },
      store_user_block_top10_methods (data){
        let blockRankList = [];
        let x;
        let newData ={}
        let keySorted = Object.keys(data).sort(function(a,b) {
          return data[b] - data[a]
        })
        for(let i=0;i<keySorted.length;i++){
          newData[keySorted[i]]=data[keySorted[i]];
        }
        for (x in newData) {
          blockRankList.push({
            name:x,
            total: data[x]
          })
        }
        this.blockRankList = blockRankList
      },
      store_user_block_chart (data) {
        const histogramData =  {
          columns: ['分类', '访问用户'],
          rows:[]
        }
        let x;
        for (x in data) {
          histogramData.rows.push({
            '分类':x,
            '访问用户': data[x]
          })
        }
        this.histogramData = histogramData
      },
      line_methods (data) {
        const user_count_line = {
          columns: ['时间', '浏览用户数'],
          rows: []
        }
        const page_view_line = {
          columns: ['时间', '浏览次数'],
          rows: []
        }
        let x;
        for (x in data) {
          user_count_line.rows.push({
            '时间': data[x]['created_date'],
            '浏览用户数': data[x]['total_user_count']
          })
          page_view_line.rows.push({
            '时间': data[x]['created_date'],
            '浏览次数':data[x]['page_view_num']
          })
        }
        this.user_count_line =user_count_line
        this.page_view_line = page_view_line
      },
      change_type(data) {
        const params = {
          hbh_store_id:this.num,
          table_duration_type:data
        }
        getUserResourcesFlowTable(params).then(res => {
          const UserFlowTable = res.data.table;
          this.line_methods(UserFlowTable)
        })
      }

    },
    created() {
      this.num = this.$route.params.hbh_store_id
      this.queryParam = {
        hbh_store_id:this.num
      }
      this.query()
    }
  }


</script>

<style scoped>
  .extra-wrapper {
    line-height: 55px;
    padding-right: 24px;
  }

  .extra-item {
    display: inline-block;
    margin-right: 24px;
  }

  .extra-item a {
      margin-left: 24px;
    }

  .heading {
    color: rgba(0, 0, 0, .85);
    font-size: 30px;
  }
  .extra-item-visit a {
    margin-left: 24px;
    float: right;
  }

</style>