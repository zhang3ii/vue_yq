<template>
  <div>
    <shop-header></shop-header>
    <div>
      <a-row>
        <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card title="店铺数据详情">
            <div class="shop_data">
              <a-row>
                <a-col :span="8">
                  <div>七日内访问量</div>
                  <div class="heading">{{ total_view_num_week }}</div>
                </a-col>
                <a-col :span="8">
                  <div>意向用户数</div>
                  <div class="heading">{{ intention_user_num_week }}</div>
                </a-col>
                <a-col :span="8">
                  <div>七日内访问人数</div>
                  <div class="heading">{{ total_user_count_week }}</div>
                </a-col>
              </a-row>
            </div>
            <div style="width: 80%; margin: 20px">
              <ve-line :data="shopData" :settings="shopDataSettings"></ve-line>
            </div>
          </a-card>
        </a-col>
        <a-col
          style="padding: 0 12px"
          :xl="8"
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24">
          <a-card title="商家健康指数" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 0 }">
            <div style="min-height: 400px;">
              <ve-radar :data="ShopHealthData"></ve-radar>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
<!--    <div style="margin-top: 24px">-->
<!--      <a-card title="店铺合作历史">-->
<!--        <a-steps progressDot :current="2">-->
<!--          <a-step title="创建线上店铺" description="2017-10-01 12:00" />-->
<!--          <a-step title="参加展会 【2018-春-杭州婚博会】" description="2018-03-03" />-->
<!--          <a-step title="参加2019年杭州婚博会" description="2019-09-03" />-->
<!--          <a-step title="参加2020年杭州春婚博会" description="尚未确定" />-->
<!--        </a-steps>-->
<!--      </a-card>-->
<!--    </div>-->
  </div>

</template>

<script>
  import shopHeader from '@/views/sdp/shopHeader';
  import { PageView } from '@/layouts'
  import DetailList from '@/components/tools/DetailList'
  const DetailListItem = DetailList.Item
  import { Radar } from '@/components'
  import VeLine from 'v-charts/lib/line.common'
  import veRadar from 'v-charts/lib/radar.common'
  import { getShopDataDetail,getShophealthDetail } from '../../../api/SDP'

  const DataSetting = {
    stack: { '用户': ['访问用户', '下单用户'] },
    area: true
  }


export default {
  name: 'shopInfo',
  components: { PageView, DetailList, DetailListItem, Radar, VeLine, shopHeader, veRadar },
  data() {
    //商家店铺中心图表设置
    this.shopDataSettings = DataSetting
    return {
      //data
      chartdata:{},
      total_view_num_week:'',
      intention_user_num_week: '',
      total_user_count_week: '',
      shopData:{},
      ShopHealthData:{},
      num: 0,
      queryParam :{}
    }
  },

  methods:{
    shopDetailChart (){
      //商家详情图
      getShopDataDetail(this.queryParam).then(res => {
        this.total_user_count_week = res.data.total_user_count_week
        this.total_view_num_week = res.data.total_view_num_week
        this.intention_user_num_week = res.data.intention_user_num_week
        const chartdata = res.data.table
        this.chartData(chartdata)
      })
      //商家健康图
      getShophealthDetail(this.queryParam).then(res => {
        this.healthChart(res)
      })
    },
    chartData (datas) {
      let shopData = {
        columns: ['日期','访问量'],
        rows:[]
      }
      let x;
      for (x in datas) {
        shopData.rows.push({
          '日期': x,
          '访问量': datas[x]
        })
      }
      this.shopData = shopData
    },
    healthChart (chars) {
      const ShopHealthData = {
        columns: ['店铺', '店铺活跃', '意向', '贡献', '热度', '口碑'],
        rows: []
      }
      ShopHealthData.rows.push(
        {
          '店铺': '当前店铺',
          '店铺活跃': chars.data.store.active_degree,
          '热度':chars.data.store.hot_degree,
          '贡献':chars.data.store.contribute_degree,
          '意向': chars.data.store.purpose_degree,
          '口碑': chars.data.store.public_praise
        },
        {
          '店铺': '店铺行业',
          '店铺活跃': chars.data.industry.active_degree,
          '热度':chars.data.industry.hot_degree,
          '贡献':chars.data.industry.contribute_degree,
          '意向': chars.data.industry.purpose_degree,
          '口碑': chars.data.industry.public_praise
        }
      )
      this.ShopHealthData = ShopHealthData

    }
  },
  mounted() {

  },
  created() {
    this.num = this.$route.params.hbh_store_id
    this.queryParam = {
      hbh_store_id:this.num
    }
    this.shopDetailChart()
  }

}
</script>

<style scoped>
  .status-list {
    text-align: left;
  }
  .heading {
    color: rgba(0, 0, 0, .85);
    font-size: 20px;
  }
  .shop_data {
    text-align: center;
  }
</style>
