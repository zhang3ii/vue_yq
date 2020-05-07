<template>
  <div>
    <shop-header></shop-header>
    <a-card>
      <div style="margin: 30px">
        <a-timeline>
          <a-timeline-item>2019年9月20日 12:12:12 在 大众点评  新增相册【关晓彤《ALICE GARDEN》系列】</a-timeline-item>
          <a-timeline-item>2019年9月20日 12:12:12 在 大众点评  新增相册【关晓彤《ALICE GARDEN》系列】</a-timeline-item>
          <a-timeline-item>2019年9月20日 12:12:12 在 大众点评  新增相册【关晓彤《ALICE GARDEN》系列】</a-timeline-item>
          <a-timeline-item color="green">2019年9月20日 12:12:12 在 大众点评 相册【关晓彤《ALICE GARDEN》系列】价格变更  由4980 变更 5980 </a-timeline-item>
          <a-timeline-item color="green">2019年9月20日 12:12:12  用户XXX 在 大众点评  评论该商家 内容为“这个商家还不错”</a-timeline-item>
          <a-timeline-item color="red">2019年9月20日 12:12:12 在 大众点评 新增相册【关晓彤《ALICE GARDEN》系列】</a-timeline-item>
          <a-timeline-item>2019年9月20日 12:12:12 在 大众点评 新增相册【关晓彤《ALICE GARDEN》系列】</a-timeline-item>
        </a-timeline>
      </div>
    </a-card>
  </div>
</template>

<script>
  import shopHeader  from '@/views/sdp/shopHeader'
  export default {
    name: 'shopDynamic',
    components: {
      shopHeader
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>