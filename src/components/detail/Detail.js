import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { URL_DATABASE } from '../../helpers/URL'
import { HeaderDetail } from '../home/HeaderDetail'
import { AddToCartButton } from './AddToCartButton'
import { Combo } from './Combo'
import { FlavorDetail } from './FlavorDetail'
import { QuantityDetail } from './QuantityDetail'

const ContainerImgDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 200px;
        height: 200px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h3 {
        width: 260px;
        color: black;
        margin: 10px;
        font-size: 28px;
        text-align: center;
    }

    p {
        font-weight: bold;
        color: #FA4A0C;
        margin: 0;
        font-size: 22px
    }
`

export const Detail = () => {

    const params = useParams()

    const [productDetail, setProductDetail] = useState([])
    const [productFlavor, setProductFlavor] = useState([])
    const [flavor, setFlavor] = useState(params.id)

    const [totalProducts, setTotalProducts] = useState(1)     //* Obtiene la data del estado del componente hijo

    const sendDataToParent = (index) => {  
        setTotalProducts(index) //* Obtiene la data del estado del componente hijo
    }

    // console.log(totalProducts)
    
    console.log("Trae la data del producto seleccionado",productDetail)
    console.log("Trae la endPoint y el id del sabor del producto seleccionado", flavor)
    console.log("Muestra que tiene el useParams", useParams())

    //* Posible solucion para mandar el id del flavor seleccionado es crear un estado con parametro inicial "useparams" y que dependiendo del estado que retorne el flavor, afectar este estado
    // const {id} = changeFlavor
    // console.log(id)


    const getData = async () => {
        let resp = await fetch(URL_DATABASE + params.endPoint)
        let data = await resp.json()
        let selectProduct = data.find(data => data.id === flavor)
        setProductDetail(selectProduct)
        setProductFlavor(data)
    }

    function changeFlavor(newProduct) {
        setFlavor(newProduct)
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [flavor])

    useEffect(() => {
        sendDataToParent()
        // eslint-disable-next-line
    }, [totalProducts])

    return (
        <div>
            <HeaderDetail />
            <ContainerImgDetail>
                <img src={productDetail.image} alt={productDetail.name} />
                <div>
                    {
                        productDetail.name === undefined ? <h3>Cargando...</h3> : <h3>{productDetail.name}</h3>
                    }
                    {
                        productDetail.price === undefined ? <p>Cargando...</p> : <p>{'$' + productDetail.price} MXN</p>
                    }
                </div>
            </ContainerImgDetail>

            <QuantityDetail sendDataToParent={sendDataToParent} />    {/* Manda el estado al componente hijo como una "prop" para que se actualice allá, Data from child to parent*/}
            <FlavorDetail endPoint={params.endPoint} changeFlavor={changeFlavor} productFlavor={productFlavor} />
            <Combo endPoint={params.endPoint} />
            <AddToCartButton totalProducts={totalProducts} />         {/*Manda estado por prop al componente hijo*/}
        </div>
    )
}
