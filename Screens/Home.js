import React,{useState} from 'react'
import { StyleSheet, Text, View, Alert} from 'react-native'
import HeaderSection from "../Components/Header/Header"
import BodySection from "../Components/Body/Body";
import AddModalItem from "../App/AddModalItem";
import ProductModal from "../App/ProductModal";
import CartItemModal from "../App/CartItemModal";
import {DATA} from "../Api/api"; 

const Home = () => {
    const [datas, setDatas]=useState(DATA);
    const[isModalVisible, setIsModalVisible]= useState(false);
    const[isProductModalVisible, setIsProductModalVisible]= useState(false);
    const[isCartModalVisible, setIsCartModalVisible]=useState(false);
    const[name, setName]= useState('');
    const[price, setPrice]=useState('');
    const[category,setCategory]= useState('');
    const[image, setImage]=useState('');
    const[id, setId]=useState('');
    const[description, setDescription]=useState('');
    const[searchedName, setSearchedName]=useState('');
    const[totalCartItems,setTotalCartItems]=useState(0);
    const[productDetail,setProductDetail]=useState({
        id:'',
        name:'',
        price:'',
        imgURL:'',
        category:'',
        description:''
    });
    const[cartItems, setCartItems]= useState([])

    const addModalHandler=()=>{
        setIsModalVisible(true);
    };

    const cartItemModalHandler=()=>{
        setIsCartModalVisible(true);
    }

    const cartModalClosedHandler=()=>{
        setIsCartModalVisible(false);
    }

    const cartItemsClearHandler=()=>{
        Alert.alert(
            'CLEAR THE CART',
            'Are you sure want to clear your cart?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                  },
              { text: 'OK', onPress: () =>  {
                setCartItems([]);
                setTotalCartItems(0);
                setIsCartModalVisible(false);
              }}
            ],
            { cancelable: false }
          );
    }

    const filterModalHandler=(value)=>{
        if(value==='All'){
            setDatas(DATA);
            return;
        }
        const newDatas=[...DATA];
        const filteredDatas= newDatas.filter(item=> item.category===value);
        setDatas(filteredDatas);
    }

    const closeAddModalHandler=()=>{
        setIsModalVisible(false)
    }

    const addProductHandler=()=>{
        setDatas([{name,price,category,imgURL:image,id,description},...DATA]);
        setIsModalVisible(false);
        setName('');
        setPrice('');
        setCategory('');
        setId('');
        setImage('');
        setDescription('');
    }

    const searchHandler=text=>{
        setSearchedName(text);
        const newDatas=[...DATA];
        let searchedProducts=newDatas.filter(item=>item.name.toLowerCase().indexOf(text.toLowerCase())!==-1);
        setDatas(searchedProducts);
    }

    const dltItem=itemId=>{
        const newDatas= datas.filter(item=> item.id!==itemId);
        setDatas(newDatas);
    }

    const buyItem=(id,name,imgURL,price,description,category)=>{
        setIsProductModalVisible(true);
        setProductDetail({
            id: id,
            name:name,
            price:price,
            imgURL:imgURL,
            category:category,
            description:description
        });
    }

    const addNameHandler=text=>{
        setName(text);
    }

    const addPriceHandler=text=>{
        setPrice(text);
    }

    const addCategoryHandler=value=>{
        setCategory(value);

    }

    const addImageHandler=text=>{
        setImage(text);
    }

    const addIdHandler=text=>{
        setId(parseInt(text)*Math.random());
    }

    const addDescriptionHandler=text=>{
        setDescription(text);
    }

    const productModalClosedHandler=()=>{
        setIsProductModalVisible(false);
    }

    const addToCartHandler=(name,price,date)=>{
       
       
        Alert.alert(
            'ADD PRODUCT TO YOUR CART',
            'Are you sure want to add this product to your cart?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                  },
              { text: 'OK', onPress: () =>  {
                const newTotalCartItems=totalCartItems;
                setTotalCartItems(newTotalCartItems+1);
                setCartItems([{
                    name:name,
                    price:price,
                    date: date
                },...cartItems])
                setIsProductModalVisible(false);
              }}
            ],
            { cancelable: false }
          );
    }

    return (
        <View style={styles.home}>
           <HeaderSection 
           addModalHandler={addModalHandler} 
           cartItemModalHandler={cartItemModalHandler}
           filterModalHandler={filterModalHandler}
           totalItems={datas.length}
           searchHandler={searchHandler}
           searchedName={searchedName}
           totalCartItems={totalCartItems}/>

           <CartItemModal 
           isCartModalOpened={isCartModalVisible}
           isCartModalClosed={cartModalClosedHandler}
           isCartItemsCleared={cartItemsClearHandler}
           cartItems={cartItems}/>

           <AddModalItem 
           isOpened={isModalVisible} 
           isClosed={closeAddModalHandler}
           addNameHandler={addNameHandler}
           addPriceHandler={addPriceHandler}
           addCategoryHandler={addCategoryHandler}
           addImageHandler={addImageHandler}
           addIdHandler={addIdHandler}
           addDescriptionHandler={addDescriptionHandler}
           addProductHandler={addProductHandler}
           nameValue={name}/>

           <ProductModal 
           isProductModalOpened={isProductModalVisible}
           isProductModalClosed={productModalClosedHandler}
           productDetail={productDetail}
           addToCartHandler={addToCartHandler}/>

           <BodySection DATAS={datas} dltItem={dltItem} buyItem={buyItem}/>
        </View>
    )
}

export default React.memo(Home);

const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'#fff',
    }
})
