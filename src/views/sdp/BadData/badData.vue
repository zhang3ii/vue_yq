<template>
  <div>
    <shop-header></shop-header>
    <div>
      <a-row :gutter="24">
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card>
            <a-tabs default-active-key="1">
              <a-tab-pane tab="大众点评" key="1"></a-tab-pane>
              <a-tab-pane tab="婚礼纪" key="2" forceRender></a-tab-pane>
              <a-tab-pane tab="百合婚礼" key="3"></a-tab-pane>
            </a-tabs>
            <div style="margin-left: 10px">
              <a-row>
                <a-col :xs="6" :sm="6">
                  <div class="text">平台店铺等级</div>
                  <div class="heading">5星</div>
                </a-col>
                <a-col :xs="6" :sm="6">
                  <div class="text">店铺标签</div>
                  <div class="heading">明星店铺</div>
                </a-col>
                <a-col :xs="6" :sm="6">
                  <div class="text">店铺荣誉</div>
                  <div class="heading">5年服务</div>
                </a-col>
                <a-col :xs="6" :sm="6">
                  <div class="text">店铺排名</div>
                  <div class="heading">2</div>
                </a-col>
              </a-row>
            </div>
            <div style="text-align: center; margin-top: 10px; margin-bottom: 10px">
              <a-button>商品特色</a-button>
              <a-button>点评星级</a-button>
              <a-button>点评标签</a-button>
            </div>
            <div>
              <a-row>
                <a-col :xl="8" :sm="12">
                  <detail-list :col="1" class="detail-layout" style="margin-left: 20px">
                    <detail-list-item term="价格区间">725</detail-list-item>
                    <detail-list-item term="商品数量">725</detail-list-item>
                    <detail-list-item term="宴会厅数量">725</detail-list-item>
                    <detail-list-item term="相册数量">725</detail-list-item>
                    <detail-list-item term="案例数量">725</detail-list-item>
                    <detail-list-item term="总评价数">725</detail-list-item>
                    <detail-list-item term="好评率">75%</detail-list-item>
                  </detail-list>
                </a-col>
                <a-col :xl="16" :sm="12">
                  <div style="width: 400px; height: 200px;"></div>
                  <div>
                    <div style="min-height: 400px;">
                      <a-table
                        :columns="columns"
                        :dataSource="data"
                        :loading="loading"
                      >
                      </a-table>
                    </div>
                  </div>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-col>
        <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card title="店铺互动数据">
            <store-q-a></store-q-a>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import shopHeader from '@/views/sdp/shopHeader';
  import DetailList from '@/components/tools/DetailList';
  const DetailListItem = DetailList.Item;
  import  storeQA  from '@/views/sdp/BadData/storeQA';
  const DataSet = require('@antv/data-set');
  const columns = [
    {
      title: '礼物类型',
      dataIndex: 'gift_type',
    },
    {
      title: '礼品名称',
      dataIndex: 'gift_name',
    },

  ];
  //图表
  export default {
    name: 'BadData',
    components: { shopHeader, DetailListItem, DetailList, storeQA },
    data() {
      return {
        columns,
        data:[],
        loading:false,
      }
    }

  }
</script>

<style scoped>
  .heading {
    color: rgba(0, 0, 0, .85);
    font-size: 20px;
  }
</style>