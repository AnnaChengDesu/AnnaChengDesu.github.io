const debounce = (func, wait)=>{
    let timer;
    return function(...args){
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this, args)
        }, wait)
    }
}

const throttle = (func, wait)=>{
    let timer = 0;
    return function(...args){
       let now = Date.now();
       if (now - timer > wait){
           timer = now;
           func.apply(this, args);
       }
    }
}

function myNew(constructor, ...args){
    // 创建一个空对象
    let obj = {};
    // 设置该对象的原型
    obj.__proto__ = constructor.prototype;
    // 绑定this，执行构造函数
    let result = constructor.apply(obj, args);
    // 确保new出来的是个对象
    return result instanceof Object ? result : obj;
}

Function.prototype.myBind = function(context,...args){
    let self = this;
    return function(...args2){
        return self.apply(context, args.concat(args2));
    }
}