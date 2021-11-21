import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { URL_DATABASE } from '../../helpers/URL'
import { HeaderDetail } from '../home/HeaderDetail'
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

    const [productDetail, setProductDetail] = useState([])
    const [productFlavor, setProductFlavor] = useState([])

    const paramsId = useParams()
    const { id } = paramsId

    const paramsCategory = useParams()
    const { endPoint } = paramsCategory

    const getDataBase = async () => {
        let resp = await fetch(URL_DATABASE + endPoint)
        let data = await resp.json()
        let selectProduct = data.find(data => data.id === id)
        setProductDetail(selectProduct)
        setProductFlavor(data)
    }

    useEffect(() => {
        getDataBase()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <HeaderDetail />
            <ContainerImgDetail>
                <img src={productDetail.image} alt={productDetail.name} />
                <div>
                    <h3>{productDetail.name}</h3>
                    <p>{'$' + productDetail.price} MXN</p>
                </div>
            </ContainerImgDetail>
            <QuantityDetail />
            <FlavorDetail productFlavor={productFlavor} />
        </div>
    )
}
