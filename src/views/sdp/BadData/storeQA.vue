<template>
  <a-list
    class="comment-list"
    :header="`${data.length} 问答`"
    itemLayout="horizontal"
    :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-comment :author="item.author" :avatar="item.avatar">
        <p slot="content">{{item.content}}</p>
        <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
          <span>{{item.datetime.fromNow()}}</span>
          <span style="margin-left: 5px">{{item.source}}</span>
        </a-tooltip>
      </a-comment>
    </a-list-item>
  </a-list>
</template>
<script>
  import moment from 'moment/moment';
  export default {
    data() {
      return {
        data: [
          {
            author: '林冬冬',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              '发布：国庆你们放假么，可以预约到店看下么 \n' +
              '商家回答：您好，感谢您对韩国艺匠的关注和国庆期间我们正常营业哦，您可以提前400电话预约到店哦，我们会有专业的客服接待您的！韩国艺匠期待您的光\n',
            datetime: moment().subtract(3, 'days'),
            source:'大众点评'
          },
          {
            author: '付晓晓',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:
              '发布：婚礼在10.1号现在预约的话还能赶得上吗？\n' +
              '商家回答：感谢亲的关注和喜爱~10.1的婚期会比较急哦小编需要查看下档期回复您，婚礼当天的产品是可以加急的',
            datetime: moment().subtract(8, 'days'),
            source:'婚礼纪'
          },
        ],
        moment,
      };
    },
  };
</script>