# Documentation for **_zod_**

## About `zod`:

- Zod is a TypeScript-first schema declaration and validation library
- Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type.

## Installation:

- For installing Zod you can use different package managers but we are using it with npm or yarn so

for npm:

```sh
npm install zod
```

for yarn:

```sh
yarn add zod
```

## Usage:

- For using zod you must have to import zod

```js
import { z } from 'zod'
```

- After importing zod with `z` we can create schemas

```js
const User = z.object({
	username: z.string(),
	email: z.string().email(),
	password: z.string(),
})
```

> **_This is the basic step to create schema, we will discuss about that later For more guidence about schema datatypes you can visit official docs of [Zod.](https://zod.dev)_**

## Schema validations and customizations

#### **Lets start with schema validations**

- There are many types that will help us to validate our schema
  - parse
  - parseAsync
  - safeParse
  - safeParseAsync

#### **Lets talk about customizations**

- So Let's take an example of our schema validation, how it's implemented

  - In this project we have used safeParse, Let me quickly share difference between parse and safeParse

    - so with `parse` if there any error or unexpected value to schema will be passed it will throw an error
    - but while using `safeParse` it will be silent and will not throw any error instead it will give us data related to the error.

  - Now lets discuss about how we have done error handling

    - For error handling we are using `safeParse`,

    ```js
    const UserSchema = z.object({ username: z.string().nonempty() })

    const parsedData = UserSchema.safeParse({ username: 'john wick' })
    ```

    - the example above will just work fine because we have passed the validation.

    ```js
    const parsedData = UserSchema.safeParse({ username: '' })
    ```

    - now lets see the above example, This data will not fullfill the requirements so it will give use an object with success property
    - If we succesfully pass the validation then it will be true

    ```js
      {
    	success: false,
        error: {
          issues: [
            {
              "code": "invalid_type",
              "expected": "string",
              "received": "number",
              "path": [ "name" ],
              "message": "Field is required"
            }
          ]
        }
      }
    ```

    - We can also change custom validation messages with zod

    ```js
    const UserSchema = z.object({
    	username: z.string({
    		required_error: 'Username is Required, please fill to go further',
    		invalid_type_error: 'please enter valid data',
    	}),
    })
    ```

    > ### For more information about how can we set custom error messages with zod you can check `schema/userschema/index.ts` file in the directory.

    ***

    > **You have noticed an error property in above example, we will use that property to manipulate error messages with javascripts and show it to user**

    ***

    > ### For more information about how schema validation is used in this current project you can check `useFormData` hook in the directory.
