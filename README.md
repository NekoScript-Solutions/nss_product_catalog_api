## Products API

**Base URL**: `https://nss-product-catalog-api.onrender.com/`


### Models

1. **Product**

    Short description of a product

    ```
    {
      id: number,
      category: string,
      itemId: string,
      name: string,
      fullPrice: number,
      price: number,
      screen: string,
      capacity: string,
      color: string,
      ram: string,
      year: number,
      image: string
    }
    ```

2. **Item**

    Detailed specification of a product

    ```
    {
      id: string,
      namespaceId: string,
      name: string,
      capacityAvailable: string[],
      capacity: string,
      priceRegular: number,
      priceDiscount: number,
      colorsAvailable: string[],
      color: string,
      images: string[],
      description: object[
        {
          title: string,
          text: string[]
        }
      ],
      screen: string,
      resolution: string,
      processor: string,
      ram: string,
      camera: string,
      zoom: string,
      cell: string[]
    }
    ```


### Routes

1. **All Products**

    Get all products in JSON format
    ```
    /products
    ```

    #### Response data:
    ```
    {
      count: number, // total number of products which satisfy the query
      products: Product[]
    }
    ```

    #### Query params
    Can be used separately or in any combination: `?offset=4&limit=4&type=phones&sort=age`

    Skip first `number` of products
    ```
    ?offset=number
    ```

    Take only `number` of products
    ```
    ?limit=number
    ```

    Take only products of `type`
    ```
    ?type=phones|tablets|accessories
    ```

    Sort products by `age` (newest firts), by `price` (cheapest firs) or by `title` (alphabetically, a->z)
    ```
    ?sort=age|price|title
    ```


2. **Single product**

    Get product with specified `id` in JSON format
    ```
    /products/:id
    ```

    #### Response data:
    ```
    {
      product: Product,
      variants: Item[] // all existing variants of the product
    }
    ```


### Product Images

Append image path to the base url to get the image

```
https://nss-product-catalog-api.onrender.com/img/phones/apple-iphone-11-pro-max/spacegray/00.webp
```

![The San Juan Mountains are beautiful!](https://nss-product-catalog-api.onrender.com/img/phones/apple-iphone-11-pro-max/spacegray/00.webp)
