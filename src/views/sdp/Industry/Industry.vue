<template>
  <div>
    <shop-header></shop-header>
      <a-card>
        <a-tabs default-active-key="1">
          <a-tab-pane tab="喜宴酒店" key="1"></a-tab-pane>
          <a-tab-pane tab="摄影旅拍" key="2" forceRender></a-tab-pane>
          <a-tab-pane tab="珠宝首饰" key="3"></a-tab-pane>
          <a-tab-pane tab="婚纱礼服" key="4"></a-tab-pane>
          <a-tab-pane tab="婚礼服务" key="5"></a-tab-pane>
          <a-tab-pane tab="百货婚品" key="6"></a-tab-pane>
          <a-tab-pane tab="婚车租赁" key="7"></a-tab-pane>
          <a-tab-pane tab="蜜月旅游" key="8"></a-tab-pane>
        </a-tabs>
      </a-card>
      <div style="margin-top: 10px;">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
            <a-card title="行业概况" style="margin-bottom: 24px">
              <div style=" min-height: 400px;">
                <detail-list size="small" :col="1" class="detail-layout" style="margin-left: 20px">
                  <detail-list-item term="人均订单数">725</detail-list-item>
                  <detail-list-item term="人均GMV">725</detail-list-item>
                  <detail-list-item term="总订单数">725</detail-list-item>
                  <detail-list-item term="总GMV">725</detail-list-item>
                  <detail-list-item term="商家数">725</detail-list-item>
                  <detail-list-item term="复购率">7.3%</detail-list-item>
                  <detail-list-item term="竞争程度">中</detail-list-item>
                  <detail-list-item term="好评率">725</detail-list-item>
                </detail-list>
              </div>
            </a-card>
          </a-col>
          <a-col
            style="padding: 0 12px"
            :xl="18"
            :lg="24"
            :md="24"
            :sm="24"
            :xs="24">
            <a-card title="店铺分布" style="margin-bottom: 24px" :loading="radarLoading" :bordered="false" :body-style="{ padding: 0 }">
              <div style="min-height: 400px; margin: 20px">
                <a-table
                  :columns="columns"
                  :dataSource="data"
                  :loading="loading"
                >
                </a-table>
                <nav style="text-align: center; margin-top: 20px">  <!-- 分页居中放置-->
                  <div>
                    <a-pagination
                      :pageSizeOptions="pageSizeOptions"
                      :total="total"
                      showSizeChanger
                      :pageSize="pageSize"
                      v-model="current"
                      @showSizeChange="onShowSizeChange"
                      shopieStylewQuickJumper
                    >
                      <template slot="buildOptionText" slot-scope="props">
                        <span v-if="props.value!=='50'">{{props.value}}条/页</span>
                        <span v-if="props.value==='50'">全部</span>
                      </template>
                    </a-pagination>
                  </div>
                </nav>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>
        <a-card class="antd-pro-pages-dashboard-analysis-salesCard" :loading="loading" :bordered="false" title="分布图" :style="{ height: '100%' }" >
          <div>
            <!-- style="width: calc(100% - 240px);" -->
            <a-row :gutter="24">
              <a-col :xl="6">
                <div>
                <v-chart :force-fit="true" :height="405" :data="pieData" :scale="pieScale">
                  <v-tooltip :showTitle="false" dataKey="item*percent" />
                  <v-axis />
                  <!-- position="right" :offsetX="-140" -->
                  <v-legend dataKey="item"/>
                  <v-pie position="percent" color="item" />
                  <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
                </v-chart>
              </div>
              </a-col>
              <a-col :xl="6">
                <div>
                  <v-chart :force-fit="true" :height="405" :data="pieData" :scale="pieScale">
                    <v-tooltip :showTitle="false" dataKey="item*percent" />
                    <v-axis />
                    <!-- position="right" :offsetX="-140" -->
                    <v-legend dataKey="item"/>
                    <v-pie position="percent" color="item"/>
                    <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
                  </v-chart>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-card>
  </div>
</template>

<script>
  import { PageView } from '@/layouts'
  import DetailList from '@/components/tools/DetailList'
  import shopHeader  from '@/views/sdp/shopHeader'
  const DetailListItem = DetailList.Item
  const DataSet = require('@antv/data-set')
  //表字段
  const columns = [
    {
      title: '排名',
      dataIndex: 'rank',
      width: '20%',
    },
    {
      title: '商家',
      dataIndex: 'store_name',
      width: '20%',
    },
    {
      title: '订单数',
      dataIndex: 'order_num',
    },
    {
      title: '浏览量',
      dataIndex: 'page_view',
    },
    {
      title: '评论量',
      dataIndex: 'comment_view',
    },
  ];
  //图表
  const sourceData = [
    { item: '婚礼纪', count: 59.2 },
    { item: '婚博会', count: 21 },
    { item: '大众点评', count: 17 },
  ]
  const dv = new DataSet.View().source(sourceData)
  dv.transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  })
  const pieData = dv.rows
  const pieScale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }]

  export default {
    name: 'Industry',
    components: {
      PageView,
      DetailList,
      DetailListItem,
      shopHeader,
    },
    data() {
      return {
        //表格设置
        data:[],
        loading:false,
        columns,
        //分页数据
        pageSizeOptions: ['10', '20', '30', '40', '50'],
        current: 1,
        pageSize: 10,
        total: 50,
        //图形数据
        sourceData,
        pieData,
        pieScale,
        radarLoading:false,
      };

    },
    methods:{
      onShowSizeChange(current, pageSize) {
        this.pageSize = pageSize;
      },

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
</style>
