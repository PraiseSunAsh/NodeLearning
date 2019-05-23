// 实现一个简单的命令行程序

// val是执行脚本文件的位置
// 如果传入参数的话就会视每个断开的单词为参数，然后命令行打开
// process.argv.forEach( (val,index,arr) => {
//     console.info(index+"|: "+ val);
// });
// 我们在终端会发现从第三个索引位置开始才是命令行的有效信息

process.argv.slice(2).forEach((val,index,arr) => {
    //如果这个命令行里有help的话
    if(val.indexOf('help')>-1){
        console.info("我也木的门啊");
        return;
    }
    if(val.indexOf("entering")>-1){
        //告诉下进程等待用户的反馈
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');
        //对data事件进行监听
        process.stdin.on('data',function(text){
            console.info('entering: ',text);
            if(text.indexOf('exit')>-1){
                console.info("Bye!");
                process.exit();
            }
        })
    }
});
