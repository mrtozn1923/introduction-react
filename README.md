# INTRODUCTION REACT
Bu repo React JS için farklı kullanım senaryolarını içermektedir.
Toplam 5 senaryo 5 branch olarak aktarılmıştır.
1. React Hello World
2. React Hello World JSX (Babel Entegrasyonlu)
3. React Class Component (Todo App)
4. React Class Component + Webpack (Todo App)
5. React Function Component + Hooks (Todo App)

`NOT:` 1,2 ve 3.kısımlarda React direkt olarak HTML sayfasına link olarak eklenmiştir. Yani herhangi bir modül kullanımı yapılmamıştır. Eğer modül (import/export) kullanımı yapmak istiyorsanız "webpack" gibi module bundler aracı kullanmanız gerekmektedir.

`NOT:` Projeyi clone yaptığınızda `git switch branchName` ile branchler arasında geçiş yapabilirsiniz.
- master
- ReactHelloWorld
- ReactJSX
- ReactClassComp
- ReactClassCompWebpack
- ReactFunctionCompHooks

## React Class Component 
* Kendi içerisinde state bilgisi tutabilir. State bilgisi tutan componentler için `stateful` component denilmektedir.

## React Function Component
* State bilgisi tutmayan bileşenler function component olarak bildirilebilir. Bu durumda `stateless` component olarak adlandırılır.

## React Function Component + Hooks
* Class Component tarafından sağlanan avantajları (state bilgisi tutma gibi) React Hookları kullanarak sağlayabiliyoruz. Yani class component kullanımına gerek kalmıyor.
* Bir Function Component için state bilgisi tutabilme özelliğini kazandırmak için `useState` hook'u kullanılmaktadır.

