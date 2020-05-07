<template>
  <div>
    <shop-header></shop-header>
    <div>
      <a-row :gutter="8">
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px'}">
          <chart-card :loading="loading" title = "90日内意向用户数" :total="intention_user_num_90">
            <div>
<!--              <mini-area />-->
            </div>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px'}">
          <chart-card :loading="loading" title = "90日内访问用户数" :total="page_view_num_90">
            <div>
<!--              <mini-area />-->
            </div>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px'}">
          <chart-card :loading="loading" title = "90日内客资数" :total="demand_num_90">
            <div>
<!--              <mini-area />-->
            </div>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px'}">
          <chart-card :loading="loading" title = "历史订单用户数" :total="0">
            <div>
<!--              <mini-area />-->
            </div>
          </chart-card>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-row :gutter="24">
        <a-col :xl="14" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card>
              <a-tabs>
                <a-tab-pane loading="true" tab="90天内访问用户" key="1">
                  <div style="min-height: 400px; margin: 20px">
                    <a-table
                      :columns="columns"
                      :dataSource="userAccessData"
                      :loading="loading"
                    >
                    </a-table>
                  </div>
                </a-tab-pane>
                <a-tab-pane loading="true" tab="90天内意向用户" key="2">
                  <div style="min-height: 400px; margin: 20px">
                    <a-table
                      :columns="columns"
                      :loading="loading"
                      :dataSource="intendedUserData"
                    >
                    </a-table>
                  </div>
                </a-tab-pane>
              </a-tabs>
          </a-card>
        </a-col>
        <a-col :xl="10" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card title="用户阶段漏斗">
            <v-funnel :data="chartData"></v-funnel>
          </a-card>
        </a-col>
      </a-row>
    </div>


  </div>
</template>

<script>
  import shopHeader  from '@/views/sdp/shopHeader'
  import { MiniArea, ChartCard } from '@/components'
  import vFunnel from 'v-charts/lib/funnel.common'
  import { getUserResourcesFour,getUserResourcesStage,getUserResourcesTable } from '../../../api/SDP'

  //表字段
  const columns = [
    {
      title: '用户ID',
      dataIndex: 'uid',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '访问次数',
      dataIndex: 'visit_count',
    },
    {
      title: '访问时长',
      dataIndex: 'visit_time',
    },
    {
      title: '意向度',
      dataIndex: 'score',
    },
    {
      title: '最后访问时间',
      dataIndex: 'action_time',
    },
  ];


  export default {
    name: 'UserData',
    components: {
      ChartCard,
      shopHeader,
      MiniArea,
      vFunnel
    },
    data () {
      return {
        //表格设置
        userAccessData:[],
        intendedUserData:[],
        loading:false,
        columns,
        //分页数据
        pageSizeOptions: ['10', '20', '30', '40', '50'],
        current: 1,
        pageSize: 10,
        total: 50,
        chartData: {},
        total_user_count_90: 0,
        page_view_num_90:0,
        intention_user_num_90: 0,
        demand_num_90: 0,
        num: 0,
        queryParam :{},

        //查询90天内意向用户数
      }
    },
    methods: {
      query() {
        //90天内各数据
        getUserResourcesFour(this.queryParam).then(res => {
           this.total_user_count_90 = res.data.total_user_count_90
           this.page_view_num_90 = res.data.page_view_num_90
           this.intention_user_num_90 = res.data.intention_user_num_90
           this.demand_num_90 = res.data.demand_num_90
        })
        //用户阶段漏斗
        getUserResourcesStage(this.queryParam).then(res => {
            this.userResourcessTageChart(res.data)
        })
      },
      //用户阶段漏斗图
      userResourcessTageChart(TageData){
        //漏斗图
        let chartData =  {
          columns: ['状态', '数值'],
          rows: []
        };
        chartData.rows.push(
          { '状态':'意向用户数', '数值': TageData.intention_user_num_90},
          { '状态': '访问用户数', '数值':TageData.total_user_count },
          { '状态': '客资数', '数值': TageData.total_kezi_count }
        )
        this.chartData = chartData
      },
      // 九十天内访问用户表
      userAccessDataTable(){
        const queryUserAccessDataTable =  {
            hbh_store_id:this.num,
            limit:100,
            offset:0,
            table_type:1
        }
        getUserResourcesTable(queryUserAccessDataTable).then(res => {
          this.userAccessData = res.data.table
        })
      },
      // 九十天内意向用户表
      intendedUserDataTable() {
        const queryIntendedUserTable =  {
            hbh_store_id:this.num,
            limit:100,
            offset:0,
            table_type:0
          }
        getUserResourcesTable(queryIntendedUserTable).then(res => {
          this.intendedUserData = res.data.table
        })
      },
    },
    created() {
      this.num = this.$route.params.hbh_store_id
      this.queryParam = {
        hbh_store_id:this.num
      }
      this.query()
      this.userAccessDataTable()
      this.intendedUserDataTable()
    }
  }

</script>

<style scoped>

</style>