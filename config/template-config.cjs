/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '## 又是元气满满的一天！ Cinky！',
    desc: `
    
      ![](https://mmbiz.qpic.cn/mmbiz_gif/rcAjicibQf6ScaNse2GhHQU1o01eeOrAbjQQ6kicTpgDia6vkCe4DH5lVwVgibMrGZFG02vqeumiao9wBahvzRxU1EZA/0?wx_fmt=gif)
      
      今天是**{{date.DATA}}**
      
      不用看日历了：{{holidaytts.DATA}}
      
      ---
      
      下面为您播报**{{city.DATA}}**今天的天气 o(〃'▽'〃)o 
      
      **{{city.DATA}}**今天的天气是$\color{blue}{{{weather.DATA}}}$
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向/风级: {{wind_direction.DATA}}{{wind_scale.DATA}}
      
      日出/日落：{{sunrise.DATA}} / {{sunset.DATA}}
      
      预防感冒提醒：{{ ganmao.DATA }}
      
      牛牛解忧杂货店铺温馨提示：{{ notice.DATA }}
      
      ---
      
      {{birthday_message.DATA}}
      
      ---
      
      > {{tian_api_morning_greeting.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
