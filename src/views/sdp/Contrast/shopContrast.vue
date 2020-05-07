<template>
  <div>
    <div>
      <a-card>
        <a-input-search
          placeholder="支持输入逗号分隔的店铺id字符串进行商家对比"
          enterButton="对比"
          size="large"
        />
      </a-card>
    </div>
    <div>
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="shopContrast">店铺对比</a-menu-item>
        <a-menu-item key="dataContrast">数据对比</a-menu-item>
        <a-menu-item key="publicContrast">口碑对比</a-menu-item>
      </a-menu>
    </div>
    <div>
      <a-card>
        <div>
          <a-card-grid style="width:10%; height: 260px">
            <h1><b>店铺信息</b></h1>
            <div> <a-radio>隐藏相同项</a-radio> </div>
            <div> <a-radio>标出最优项</a-radio> </div>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 260px; text-align: center">
            <img
              alt="example"
              src="http://qnm.hunliji.com/ED940ADD7C649097CB3552FDBE2C5CCD?imageView2/1/w/144/h/144/interlace/1"
              width="160"
              height="120"
            />
            <h2>韩国艺匠</h2>
            <a-select defaultValue="杭州" style="width: 120px;margin-top: 5px">
              <a-select-option value="jack">上海</a-select-option>
              <a-select-option value="lucy">广州</a-select-option>
              <a-select-option value="Yiminghe">天津</a-select-option>
            </a-select>
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 260px">
            <img
              alt="example"
              src="https://qnm.hunliji.com/0BA06F416071C57B20BACF83BFDDFFEB.jpg?imageView2/1/w/144/h/144/interlace/1"
              width="160"
              height="120"
            />
            <h2>韩国艺匠</h2>
            <a-select defaultValue="杭州" style="width: 120px;margin-top: 5px" >
              <a-select-option value="jack">上海</a-select-option>
              <a-select-option value="lucy">广州</a-select-option>
              <a-select-option value="Yiminghe">天津</a-select-option>
            </a-select>
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 260px">
            <img
              alt="example"
              src="https://qnm.hunliji.com/0BA06F416071C57B20BACF83BFDDFFEB.jpg?imageView2/1/w/144/h/144/interlace/1"
              width="160"
              height="120"
            />
            <h2>韩国艺匠</h2>
            <a-select defaultValue="杭州" style="width: 120px;margin-top: 5px" >
              <a-select-option value="jack">上海</a-select-option>
              <a-select-option value="lucy">广州</a-select-option>
              <a-select-option value="Yiminghe">天津</a-select-option>
            </a-select>
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 260px">
            <img
              alt="example"
              src="https://qnm.hunliji.com/FiMKdzrFKnKX8TNfBp6Ig9GsnQB1?imageView2/1/w/144/h/144/interlace/1"
              width="160"
              height="120"
            />
            <h2>韩国艺匠</h2>
            <a-select defaultValue="杭州" style="width: 120px;margin-top: 5px" >
              <a-select-option value="jack">上海</a-select-option>
              <a-select-option value="lucy">广州</a-select-option>
              <a-select-option value="Yiminghe">天津</a-select-option>
            </a-select>
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 260px">
            <img
              alt="example"
              src="https://qnm.hunliji.com/FiMKdzrFKnKX8TNfBp6Ig9GsnQB1?imageView2/1/w/144/h/144/interlace/1"
              width="160"
              height="120"
            />
            <h2>韩国艺匠</h2>
            <a-select defaultValue="杭州" style="width: 120px;margin-top: 5px" >
              <a-select-option value="jack">上海</a-select-option>
              <a-select-option value="lucy">广州</a-select-option>
              <a-select-option value="Yiminghe">天津</a-select-option>
            </a-select>
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>城市</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>区域</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>行业</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>健康分数</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>店铺活跃</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>贡献</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>意向热度</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>意向人群</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>访问人群</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>客资数</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>
        <div>
          <a-card-grid style="width:10%; height: 50px; text-align: center; padding: 5px 0 0 0" >
            <h2><b>订单量</b></h2>
          </a-card-grid>
          <a-card-grid style="width:18%; height: 50px; text-align: center">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
          <a-card-grid style="width:18%;text-align: center; height: 50px">
          </a-card-grid>
        </div>

      </a-card>
    </div>
  </div>
</template>

<script>
  const list_data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
    {
      title: 'Title 7',
    },
    {
      title: 'Title 8',
    },
  ];
  export default {
    name: 'shopContrast',
    data() {
      return {
        current: ['dataContrast'],
        list_data
      };
    },
  }
</script>

<style scoped>

</style>