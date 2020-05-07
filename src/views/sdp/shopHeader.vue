<template>
  <page-view :title="store_title" logo="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png">

    <detail-list slot="headerContent" size="small" :col="3" class="detail-layout">
      <detail-list-item term="店铺名称">{{ store_name }}</detail-list-item>
      <detail-list-item term="主营行业">{{ store_industry_name }}</detail-list-item>
      <detail-list-item term="服务城市">{{ store_citys }}</detail-list-item>
      <detail-list-item term="商家主页">
        <a :href="dianping_url" target="_blank" v-if="dianping">大众点评</a> &nbsp;
        <a :href="baihe_url" target="_blank" v-if="baihe">百合婚礼</a> &nbsp;
        <a :href="hunliji_url" target="_blank" v-if="hunliji">婚礼纪</a> &nbsp;
      </detail-list-item>
      <detail-list-item term="店铺地址">{{ store_address }}</detail-list-item>
      <detail-list-item term="合作状态">{{ store_relationship }}</detail-list-item>
      <detail-list-item term="创建时间">{{ created_at }}</detail-list-item>
      <detail-list-item term="联系电话">{{ store_phone }}</detail-list-item>
<!--      <detail-list-item term="店铺星级"><a-rate :defaultValue="4" allowHalf /></detail-list-item>-->
    </detail-list>
    <a-row slot="extra" class="status-list">
      <a-col :xs="12" :sm="12">
        <div class="text">意向用户数</div>
        <div class="heading">{{ intention_user_num }}</div>
      </a-col>
      <a-col :xs="12" :sm="12">
        <div class="text">访问用户数</div>
        <div class="heading">{{ total_user_count }}</div>
      </a-col>
<!--      <a-col :xs="12" :sm="12">-->
<!--        <div class="text">客资数</div>-->
<!--        <div class="heading">{{ demand_user_count }}</div>-->
<!--      </a-col>-->
    </a-row>
    <template slot="action">
<!--      <a-button style="margin-right: 10px">监控商家</a-button>-->
<!--      <a-button type="primary" >加入收藏</a-button>-->
      <a-button @click="showModal" style="margin-left: 10px" >数据定义</a-button>
      <a-modal title="数据定义" v-model="visible" @ok="handleOk">
        <p>1.店铺ID: 四平台(婚博会，大众点评，婚礼纪，百合婚礼)的商家通过名称，地理位置和运营勾选确认行程的商家的唯一ID</p>
        <p>2.婚博会店铺ID: 婚博会平台下自己生成的店铺的唯一ID</p>
        <p>3.店铺名称: 店铺的定义名称(数据优先级 婚博会>婚礼纪>大众点评>百合婚礼)</p>
        <p>4.城市: 婚博会平台业务下展会城市(北上广杭武成天)+线上城市站城市(37个)</p>
        <p>5.区域: 店铺所属的城市地理位置下的区域，如余杭区</p>
        <P>6.行业: 以婚博会平台业务下14个行业为主，其他平台通过转换关系对应。喜宴酒店,婿纱摄影,婚礼服务,婚纱礼服,婿嫁首饰,结婚百货,四大金刚，旅拍,海外婚礼,蜜月旅游,婚车租赁,新娘造型,新房装修,时尚写真</P>
        <p>7.店铺地址: 店铺的实际营业地址(优先级 婚博会>婚礼纪>大众点评>百合婚礼)</p>
        <p>8.店铺创建时间: 店铺在平台的创建时间(只有婚博会平台下有)</p>
        <p>9.合作状态: 店铺跟四大平台的合作关系(合作中，未合作，曾经合作) 合作中指的是该店铺在该平台有主页并可以访问，曾经合作只在该平台曾经有主页并可以访问，未合作只历史记录中未曾有找到过该店铺</p>
      </a-modal>
    </template>
    <div slot="headerContent">
      <a-menu v-model="current" mode="horizontal" :selectedKeys=current @openChange="onOpenChange" @click="updateMenu">
        <a-menu-item key="/shop/shopInfo/" >
          <router-link :to="{ name: 'shopInfo',params:{hbh_store_id: this.num } }">
            <a-icon type="heat-map" />
            店铺概览
          </router-link>
        </a-menu-item>
<!--        <a-menu-item key="/shop/BadData/">-->
<!--          <router-link :to="{ name: 'BadData',params:{hbh_store_id: this.num } }">-->
<!--            <a-icon type="bar-chart" />-->
<!--            友商数据-->
<!--          </router-link>-->
<!--        </a-menu-item>-->
<!--        <a-menu-item key="/shop/Industry/">-->
<!--          <router-link :to="{ name: 'Industry',params:{hbh_store_id: this.num } }">-->
<!--            <a-icon type="profile" />-->
<!--            大盘行业-->
<!--          </router-link>-->
<!--        </a-menu-item>-->
        <a-menu-item key="/shop/userData/">
          <router-link :to="{ name: 'userData',params:{hbh_store_id: this.num } }">
            <a-icon type="team" />
            用户资源
          </router-link>
        </a-menu-item>
        <a-menu-item key="/shop/wapFlow/">
          <router-link :to="{ name: 'wapFlow',params:{hbh_store_id: this.num } }">
            <a-icon type="database" />
            访问流量
          </router-link>
        </a-menu-item>
<!--        <a-menu-item key="/shop/shopDynamic/">-->
<!--          <router-link :to="{ name: 'shopDynamic',params:{hbh_store_id: this.num } }">-->
<!--            <a-icon type="exception" />-->
<!--            店铺动态-->
<!--          </router-link>-->
<!--        </a-menu-item>-->
      </a-menu>
    </div>
  </page-view>
</template>

<script>
  import { PageView } from '@/layouts'
  import DetailList from '@/components/tools/DetailList'
  const DetailListItem = DetailList.Item
  import { getShopMessage } from '../../api/SDP'

  export default {
    components: { PageView, DetailList, DetailListItem },
    data(){
      return {
        openKeys: [],
        selectedKeys: [],
        visible: false,
        //后端动态传值
        store_title:'',
        store_name: '',
        store_industry_name: '',
        store_citys: '',
        store_address: '',
        store_phone: '',
        created_at:'',
        dianping_url:'',
        baihe_url:'',
        hunliji_url:'',
        store_relationship: '',
        intention_user_num: 0,
        total_user_count: 0,
        demand_user_count: 0,
        num: 0,
        queryParam :{},
        current: [],
        dianping: true,
        baihe: true,
        hunliji: true,

      }
    },
    created () {
      this.num = this.$route.params.hbh_store_id
      this.queryParam = {
        hbh_store_id:this.num
      }
      // this.updateMenu();
      this.queryShop()

    },
    methods: {
      onOpenChange (openKeys) {
        this.openKeys = openKeys
      },
      updateMenu (e) {
        // this.current = [ e.key ];
        // console.log(e.key)

        const routes = this.$route.matched.concat()
        const data_route = routes.pop().path
        let reg = /(.+):/
        let href = data_route.match(reg)[1]
        this.selectedKeys = [ href ]
        console.log([href])

      },
      //弹出按钮设置
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        this.visible = false;
      },
      //前后端交互请求
      queryShop () {
        getShopMessage(this.queryParam).then(res => {
            this.store_name = res.data[0].store_name
            this.store_industry_name = res.data[0].store_industry_name
            this.store_citys = res.data[0].store_citys
            this.store_address = res.data[0].store_address
            this.store_phone = res.data[0].store_phone
            this.created_at = res.data[0].created_at
            this.total_user_count = res.data[0].total_user_count
            this.intention_user_num = res.data[0].intention_user_num
            this.store_title = '店铺商家ID:'+ res.data[0].unified_store_id + ' | ' + '婚博会商家ID:' + res.data[0].hbh_store_id
            const dianping_store_id = res.data[0].dianping_store_id
            const hlj_store_id = res.data[0].hlj_store_id
            const baihe_store_id = res.data[0].baihe_store_id
            this.dianping_url = 'http://www.dianping.com/shop/' + dianping_store_id
            this.hunliji_url = "https://www.hunliji.com/merchant/detail_" + hlj_store_id
            this.baihe_url = "http://m.hunli.baihe.com/sh/phb/shop" + baihe_store_id + ".html"
          let relation = '';
            if (dianping_store_id != 0){
              relation += '点评-合作中 '
            }else {
              this.dianping = false
            }
          if (hlj_store_id != 0){
            relation += '婚礼纪-合作中 '
          }else {
            this.hunliji = false
          }
          if (baihe_store_id != 0){
            relation += '百合婚礼-合作中 '
          }else {
            this.baihe = false
          }
          this.store_relationship = relation
        })
      }

    },
    watch: {
      '$route' (val) {
        this.updateMenu()
      }
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