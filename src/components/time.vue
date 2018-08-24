<template>
  <div>
    <button @click="getTimeStr()">打印</button>
    <h1>{{str}}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        time:new Date(1532325507000),
        timestamp:'',
        str:''
      }
    },
    methods:{
      getTimeStamp () {
        this.timestamp = Math.round(this.time.getTime()/1000)

        return this.timestamp
      },
      getNowTime(){
        let Time = new Date().getTime()
        let Unix = Math.round(Time/1000)

        return Unix
      },
      getZoreTime(){
        let Time = new Date()
        Time.setFullYear(0)
        Time.setMinutes(0)
        Time.setSeconds(0)
        Time.setMilliseconds(0)

        let Unix = Math.round(Time.getTime()/1000)
        return Unix
      },
      getNowStr () { //获取发布时的时间
        let time = this.time
        let year = time.getFullYear()
        let mouth = time.getMonth() + 1
        let day = time.getDate()
        return `${year}年${mouth}月${day}日`
      },
      getTimeStr(){
        let TimeStamp = this.getTimeStamp()
        let NowTime = this.getNowTime()
        let ZoreTime = this.getZoreTime

        if (NowTime - TimeStamp >= 0 && NowTime - TimeStamp <3600) {
          this.str = '刚刚' + Math.floor((NowTime - TimeStamp)/60) + '分钟前'
        } else if (TimeStamp - ZoreTime >= 0) {
          this.str = Math.round((NowTime - TimeStamp)/3600) +'小时前'
        } else if (NowTime - TimeStamp >=86400 && NowTime - TimeStamp <=31*86400) {
          this.str = Math.round((NowTime - TimeStamp)/86400) +'天前'
        } else {
          this.str = this.getNowStr()
        }
      }
    }

  }
</script>

<style scoped>

</style>
