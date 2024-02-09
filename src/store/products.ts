interface Baguette {
    name: string;
    description: string;
    ingredients: string[];
    cost: number;
    img: string;
    stock: number;
    isTopSell: boolean;
    id: number;
}

export const menuBaguettes: Baguette[] = [
    {
        name: "Ham and Cheese Baguette",
        description: "Delicious baguette filled with ham and melted cheese.",
        ingredients: ["Ham", "Cheese", "Bread"],
        cost: 5.99,
        img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjRmN2E3NzYxZDNlYzNmOTU0ZjY3NGMwZTRmMDI4ZDcvN2Y0YWU5Y2EwNDQ2Y2JjMjNlNzFkOGQzOTVhOTg0MjguanBlZw==",
        stock: 10,
        isTopSell: true,
        id: 1
    },
    {
        name: "Chicken and Avocado Baguette",
        description: "Baguette with tender chicken chunks and slices of avocado.",
        ingredients: ["Chicken", "Avocado", "Bread"],
        cost: 6.49,
        img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjRmN2E3NzYxZDNlYzNmOTU0ZjY3NGMwZTRmMDI4ZDcvN2Y0YWU5Y2EwNDQ2Y2JjMjNlNzFkOGQzOTVhOTg0MjguanBlZw==",
        stock: 8,
        isTopSell: false,
        id: 2
    },
    {
        name: "Vegetarian Baguette",
        description: "Baguette filled with a variety of fresh vegetables.",
        ingredients: ["Lettuce", "Tomato", "Cucumber", "Bread"],
        cost: 5.79,
        img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjRmN2E3NzYxZDNlYzNmOTU0ZjY3NGMwZTRmMDI4ZDcvN2Y0YWU5Y2EwNDQ2Y2JjMjNlNzFkOGQzOTVhOTg0MjguanBlZw==",
        stock: 15,
        isTopSell: true,
        id: 3
    }, {
        name: "Vegetarian Baguette",
        description: "Baguette filled with a variety of fresh vegetables.",
        ingredients: ["Lettuce", "Tomato", "Cucumber", "Bread"],
        cost: 5.79,
        img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjRmN2E3NzYxZDNlYzNmOTU0ZjY3NGMwZTRmMDI4ZDcvN2Y0YWU5Y2EwNDQ2Y2JjMjNlNzFkOGQzOTVhOTg0MjguanBlZw==",
        stock: 15,
        isTopSell: true,
        id: 4
    }, {
        name: "Vegetarian Baguette",
        description: "Baguette filled with a variety of fresh vegetables.",
        ingredients: ["Lettuce", "Tomato", "Cucumber", "Bread"],
        cost: 5.79,
        img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjRmN2E3NzYxZDNlYzNmOTU0ZjY3NGMwZTRmMDI4ZDcvN2Y0YWU5Y2EwNDQ2Y2JjMjNlNzFkOGQzOTVhOTg0MjguanBlZw==",
        stock: 15,
        isTopSell: true,
        id: 5
    }, {
        name: "Vegetarian Baguette",
        description: "Baguette filled with a variety of fresh vegetables.",
        ingredients: ["Lettuce", "Tomato", "Cucumber", "Bread"],
        cost: 5.79,
        img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjRmN2E3NzYxZDNlYzNmOTU0ZjY3NGMwZTRmMDI4ZDcvN2Y0YWU5Y2EwNDQ2Y2JjMjNlNzFkOGQzOTVhOTg0MjguanBlZw==",
        stock: 15,
        isTopSell: true,
        id: 6
    }, {
        name: "Vegetarian Baguette",
        description: "Baguette filled with a variety of fresh vegetables.",
        ingredients: ["Lettuce", "Tomato", "Cucumber", "Bread"],
        cost: 5.79,
        img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjRmN2E3NzYxZDNlYzNmOTU0ZjY3NGMwZTRmMDI4ZDcvN2Y0YWU5Y2EwNDQ2Y2JjMjNlNzFkOGQzOTVhOTg0MjguanBlZw==",
        stock: 15,
        isTopSell: true,
        id: 7
    }, {
        name: "Vegetarian Baguette",
        description: "Baguette filled with a variety of fresh vegetables.",
        ingredients: ["Lettuce", "Tomato", "Cucumber", "Bread"],
        cost: 5.79,
        img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjRmN2E3NzYxZDNlYzNmOTU0ZjY3NGMwZTRmMDI4ZDcvN2Y0YWU5Y2EwNDQ2Y2JjMjNlNzFkOGQzOTVhOTg0MjguanBlZw==",
        stock: 15,
        isTopSell: true,
        id: 8
    },
];
