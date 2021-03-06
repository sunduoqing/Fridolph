## 封装

概念：将类的某些信息隐藏在类的内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏信息的操作和访问

1. 通过该类提供的方法来实现对隐藏信息的操作和访问
2. 隐藏对象的信息
3. 留出访问的接口

特点：
a. 只能通过规定的方法访问数据
b. 隐藏类的实例细节，方便修改和实现

封装的实现步骤：
1. 修改属性的可见性 设为 private （隐藏对象）
2. 创建getter/setter方法，设为public，用于属性的读写
3. 在getter/setter方法中加入属性控制语句 对属性值的合法性进行判断 （2，3为留出接口）

