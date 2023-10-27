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

    #### Data shape:
    ```
    {
      count: number, // total number of fetched products
      products: Product[]
    }
    ```

    #### Query params
    Can be used separately or in any combination

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


2. **Single product**

    Get product with specified `id` in JSON format
    ```
    /products/:id
    ```

    #### Data shape:
    ```
    {
      product: Product,
      variants: Item[] // all existing variants of a product
    }
    ```


### Product Images

Append image path to the base url to get the image

```
https://nss-product-catalog-api.onrender.com/img/phones/apple-iphone-11-pro-max/spacegray/00.webp
```
