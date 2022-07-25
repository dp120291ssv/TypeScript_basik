// tsc 6.guards.ts && node 6.guards.js
function variants(x: string | number){
    if(typeof x === 'number'){
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle(res: MyResponse | MyError) {
    if(res instanceof MyResponse){
        return {
            info: res.result + res.header
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

type AlertType = 'success' | 'error' | 'warning'

function setAlertType(type: AlertType) {
    console.log(type)
}

setAlertType('success')
setAlertType('incorrect')