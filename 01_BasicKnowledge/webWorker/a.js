// 接受来自主线程的消息 message
self.addEventListener('message', function (e) {
    // self.postMessage(e.data + '子');
    
}, false);

let label = 90000
let result = 1

for (var i = 0; i < label; i++) {
    result += 1
    console.log(2)
}
self.postMessage(result)