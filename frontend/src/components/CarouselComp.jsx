import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../App.css';

const CarouselComp = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Tendencias</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://static.doofinder.com/main-files/uploads/2018/01/Top6Sales.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Nuevos Productos</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Ofertas</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselComp