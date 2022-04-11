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

# Ortamın Kurulması
Dosyaların indirilmesi
`npm i`

Babel Çıktısı Alma
`npm run babel`

İşlemleri daha komplike hale getirmemek için `gulp` veya `webpack` kullanmadım. Projeyi açmak için Visual Studio Code `Live Server` kurulabilir.

`NOT:` Burada yapılanlar işin temelini ifade etmektedir. Yoksa `create-react-app` ile proje oluşturmak daha mantıklı bir yaklaşımdır.

# Class Component vs Function Component

Aşağıda bir `Class Component` ve `Function Component` kullanımı bulunmaktadır.
```js
class TodoApp extends React.Component{
    render(){
        return(
            <div>
                <Header title="Todo Application" description="Lorem, ipsum dolor."/>
            </div>
        );
    }
}
const Header=function(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
        </div>
    );
}
```
Yukarıdaki `Function Component` olarak tanımlanan `Header` componenti için `Class Component` tanımlaması aşağıdaki gibi yapılabilir.

```js
class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.description}</div>
            </div>
        );
    }   
}
```
Görüldüğü üzere `Class Component` tanımlamasında `props` zaten içerisinde tanımlı olarak gelmektedir.

`NOT:` State bilgisi içermeyen sadece veri gösterimi için kullanılan bileşenler için stateless function component kullanmak daha mantıklı bir yaklaşımdır.

# React Lifecycle
![ReactLifeCycle](react-lifecycle.png)
Temelde bir bileşen için yaşam döngüsünde dört adım bulunmaktadır.
1. Bileşenin Oluşturulması (Initialization)
2. Bileşenin DOM'a bağlanması (Mounting)
3. Bileşenin DOM üzerinde güncellenmesi (Updating)
4. Bileşenin DOM üzerinden kaldırılması (Unmounting)

Yukarıdaki adımlar sonucunda tetiklenen bazı olaylar vardır.
`NOT`: Constructor metodu en başta çalışır

1. `ComponentWillMount`: Bileşenin Real DOM'a aktarılmadan (render) önce tetiklenir.
2. `ComponentDidMount`: Bileşen Real DOM'a eklendikten (render) sonra çalışır.

`Constructor > ComponentWillMount > Render > ComponentDidMount`

`NOT:` Eğer bileşenin bir child bileşeni varsa ve aynı eventlara sahipse çalışma sıraları aşağıdaki gibi olur.

`Constructor > ComponentWillMount > Render > Child Constructor > Child ComponentWillMount > Child Render > Child ComponentDidMount > ComponentDidMount`

3. `ComponentWillUpdate`: Bileşen güncellenmede hemen önce çalışacaktır. Parametre olarakta "nextProps" ve "nextStates" değerlerini alır.

`ComponentWillUpdate > Render`

`NOT:` Props veya state değiştiği anda bileşenin baştan render edilip edilmemesi gerektiğini manuel olarak belirleyebiliyoruz. Bunun için `ShouldComponentUpdate` olayı kullanılır. Geriye bir boolean değer döndürür varsayılan olarak `true` döndürür. Bu değeri `false` yaparsak bileşen `props` ve `state` değişiminde tekrar render edilmez.

4. `ComponentDidUpdate`: Bileşen güncellendikten yani render edildikten sonra çalışır.

`ComponentWillUpdate > Render > ComponentDidUpdate`

5. `ComponentWillUnmount`: Bileşen DOM üzerinden kaldırılmadan önce çalıştırılır.
