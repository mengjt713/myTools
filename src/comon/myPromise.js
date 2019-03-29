const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
function MyPromise(fn){
  const that = this;
  that.state = PENDING;
  that.value = null;
  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];

    function resolve(value){

        if(value instanceof MyPromise){
            return value.then(resolve,reject)
        }
        setTimeou(()=>{
            if(that.state == PENDING){
                that.state = RESOLVED;
                that.value = value;
                that.resolvedCallbacks.map(cb =>cb(that.value))
            }
        },0)

    }


    function reject(value){
        setTimeout(()=>{
            if(that.state == PENDING){

                that.state = REJECTED;
                that.value = value;
                that.rejectedCallbacks.map(cb =>cb(that.value))
            }

        },0)

    }


}

MyPromise.prototype.then = function(onFulfilled,onRejected){
    const that = this;
    onFulfilled = typeof onFulfilled =='function'?onFulfilled:v=>v;
    onRejected = typeof onRejected =='function'?onRejected:r=>{throw r};
    if(that.state === PENDING){
        return (promise2 = new MyPromise((resolve,reject) =>{
            that.resolvedCallbacks.push(()=>{
                try{
                    const x = onFulfilled(that.value)
                    resolutionProcedure(promise2,x,resolve,reject)
                } catch (r){
                    reject(r)
                }
            });

            that.rejectedCallbacks.push(()=>{
                try{
                    const x = onRejected(that.value)
                    resolutionProcedure(promise2,x,resolve,reject)
                } catch (r){
                    reject(r)
                }
            });
        }))

    }
    if (that.state === RESOLVED) {
            return (promise2 = new MyPromise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(that.value)
                        resolutionProcedure(promise2, x, resolve, reject)
                    } catch (reason) {
                        reject(reason)
                    }
                })
            }))
    }
    if(that.state === REJECTED){
        onRejected(that.value)
    }
};

function resolutionProcedure(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('Error'))
    }
}

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 0)
}).then(value => {
    console.log(value)
})