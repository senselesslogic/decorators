function f() {
    console.log('evaluated f()')
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log('called f()')
    }
}

function g() {
    console.log('evaluated g()')
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log('called g()')
    }
}

export class DecoOrder {
    @f()
    @g()
    tryMe() {
        console.log('tryMe called')
    }
}