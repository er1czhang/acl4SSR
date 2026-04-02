/**
 * 拦截联通接口，将 response.head.respCode 中的 0211 修改为 0000
 */

if ($response && $response.body) {
    try {
        // 解析响应体 JSON
        let obj = JSON.parse($response.body);
        
        // 安全地判断层级结构是否存在，并定位到 respCode
        if (obj && obj.response && obj.response.head) {
            
            // 如果 respCode 是 0211，则将其修改为 0000
            if (obj.response.head.respCode === "0211") {
                obj.response.head.respCode = "0000";
                
                // (可选) 如果需要，您也可以顺便把提示信息改掉，让它看起来更真实：
                // obj.response.head.respMsg = "验证成功";
            }
        }
        
        // 将修改后的对象重新转为字符串并返回给 Loon
        $done({ body: JSON.stringify(obj) });
        
    } catch (e) {
        // JSON 解析失败则打印错误日志，并原样返回，不影响网络请求
        console.log("脚本执行报错: " + e);
        $done({});
    }
} else {
    // 没有 body 时直接放行
    $done({});
}/**
 * 拦截联通接口，将 response.head.respCode 中的 0211 修改为 0000
 */

if ($response && $response.body) {
    try {
        // 解析响应体 JSON
        let obj = JSON.parse($response.body);
        
        // 安全地判断层级结构是否存在，并定位到 respCode
        if (obj && obj.response && obj.response.head) {
            
            // 如果 respCode 是 0211，则将其修改为 0000
            if (obj.response.head.respCode === "0211") {
                obj.response.head.respCode = "0000";
                
                // (可选) 如果需要，您也可以顺便把提示信息改掉，让它看起来更真实：
                // obj.response.head.respMsg = "验证成功";
            }
        }
        
        // 将修改后的对象重新转为字符串并返回给 Loon
        $done({ body: JSON.stringify(obj) });
        
    } catch (e) {
        // JSON 解析失败则打印错误日志，并原样返回，不影响网络请求
        console.log("脚本执行报错: " + e);
        $done({});
    }
} else {
    // 没有 body 时直接放行
    $done({});
}
