module.exports = {
  apps : [{
    "name": "koa-proxy",
    "script": "./dist/app.js",
    'cwd': './', // 根目录
    'exec_mode': 'cluster', // 应用启动模式，支持fork和cluster模式
    'instances': 1, // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
    'max_memory_restart': '300M', // 最大内存限制数，超出自动重启
    'min_uptime': '60s', // 应用运行少于时间被认为是异常启动
    'max_restarts': 3, // 最大异常重启次数，即小于min_uptime运行时间重启次数；
    'env_pro': { // 环境参数，当前指定为测试环境
        'NODE_ENV': 'production',
    },
  }],
};
