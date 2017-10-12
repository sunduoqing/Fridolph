/**
 !c 不建议在mocha测试框架中使用箭头函数，箭头函数语法对this的绑定会让用例函数
 !c 没办法访问Mocha框架上下文中定义的一些函数，例如 this.timeout(1000)
 ?c mocha会把用例函数注册到自身的某个属性中，通过属性调用的使用，
 ?c 正常函数可以访问到mocha的其他属性
 */