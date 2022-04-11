# INTRODUCTION REACT
Bu repo React JS için farklı kullanım senaryolarını içermektedir.
Toplam 5 senaryo 5 branch olarak aktarılmıştır.
1. React Hello World
2. React Hello World JSX (Babel Entegrasyonlu)
3. React Class Component (Todo App)
4. React Class Component + Webpack (Todo App)
5. React Function Component + Hooks (Todo App)

`NOT:` 1,2 ve 3.kısımlarda React direkt olarak HTML sayfasına link olarak eklenmiştir. Yani herhangi bir modül kullanımı yapılmamıştır. Eğer modül (import/export) kullanımı yapmak istiyorsanız "webpack" gibi module bundler aracı kullanmanız gerekmektedir.

## React Class Component 
* Kendi içerisinde state bilgisi tutabilir. State bilgisi tutan componentler için `stateful` component denilmektedir.

## React Function Component
* State bilgisi tutmayan bileşenler function component olarak bildirilebilir. Bu durumda `stateless` component olarak adlandırılır.

## React Function Component + Hooks
* Class Component tarafından sağlanan avantajları (state bilgisi tutma gibi) React Hookları kullanarak sağlayabiliyoruz. Yani class component kullanımına gerek kalmıyor.
* Bir Function Component için state bilgisi tutabilme özelliğini kazandırmak için `useState` hook'u kullanılmaktadır.

# React Hello World
React JS bir kütüphane olduğu için direkt olarak HTML sayfanıza dahil edip kullanabilirsiniz.

```html
    <div id="root"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="app.js"></script>
```

Ancak şu aşamada herkesin alışık olduğu JSX söz dizimi ile kodlama yapamazsınız. Ana dizinde görmüş olduğunuz `app.js` dosyasını açtığınız zaman aşağıdaki yapıyla karşılaşacaksınız.

```js
var root=document.getElementById('root');
var template=React.createElement(
    'h1',
    null,
    'Hello World'
);
ReactDOM.render(template,root);
```

Yani direkt olarak `React` paketi üzerinde bir statik fonksiyon olan `createElement` kullanılarak bir bileşen oluşturma işlemi yapılmıştır. Gördüğünüz üzere `JSX` olmadan hayat ne kadar zor :)

`ReactDom` üzerinde bulunan `render` metodu ilgili react bileşenini render edip HTML dosyasındaki `root` kimlikli eleman içerisine aktarmaktadır.

Çalıştırmak için HTML dosyasını `Live Server` gibi bir eklentiyle açabilirsiniz.

İşin bu kısmında boğulmaya gerek yok. Şimdi gelin bir sonraki `branch` olan React Hello World JSX'e geçelim.