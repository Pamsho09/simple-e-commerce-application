import React, { useState } from "react";
import style from "./index.module.css";
import Input from "../../components/input";
import Button from "../../components/button";
import { useProduct } from "../../hooks/useProduct";

interface Baguette {
  name: string;
  description: string;
  ingredients: string[];
  cost: number;
  img: string;
}

const Index: React.FC = () => {
  const { handlerCreateProduct } = useProduct();
  const [formData, setFormData] = useState<Baguette>({
    name: "",
    description: "",
    ingredients: [],
    cost: 0,
    img: "",
  });

  const [errors, setErrors] = useState<Partial<Baguette>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: {
      [key: string]: string;
    } = {};

    if (!formData.name) {
      validationErrors.name = "Name is required";
    }
    if (!formData.description) {
      validationErrors.description = "Description is required";
    }
    if (formData.cost <= 0) {
      validationErrors.cost = "Cost must be greater than zero";
    }
    if (formData.ingredients.length === 0) {
      validationErrors.ingredients = "At least one ingredient is required";
    }
    if (Object.keys(validationErrors).length === 0) {
      handlerCreateProduct(
        formData.name,
        formData.description,
        formData.ingredients,
        formData.cost,
        formData.img
      );
      setFormData({
        name: "",
        description: "",
        ingredients: [],
        cost: 0,
        img: "",
      });
      alert("Baguette created successfully");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Create a new baguette</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.form_input}>
          <Input
            label="Name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
        </div>
        <div className={style.form_input}>
          <Input
            label="Description"
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={
              formData.description
            }
            error={errors.description}
          />
        </div>
        <div className={style.form_input}>
          <Input
            label="URL Image"
            type="text"
            name="img"
            placeholder="URL Image"
            onChange={handleChange}
            value={formData.img}
            error={errors.description}
          />
        </div>
        <div className={style.form_input}>
          <Input
            label="Cost"
            type="number"
            name="cost"
            placeholder="Cost"
            onChange={handleChange}
            value={String(formData.cost)}
            error={errors.description}
          />
        </div>
        <h2 className={style.sub_title}>Add Ingredients</h2>
        <div className={style.form_input}>
          {formData.ingredients?.map((_ingredient, index) => (
            <Input
              key={index}
              label={`Ingredient ${index + 1}`}
              type="text"
              placeholder={`Ingredient ${index + 1}`}
              onChange={(e) => {
                const newIngredients = [...(formData.ingredients || [])];
                newIngredients[index] = e.target.value;
                setFormData((prevState) => ({
                  ...prevState,
                  ingredients: newIngredients,
                }));
              }}
            />
          ))}

          <div className={style.form_input__buttons}>
            <Button
              onClick={() =>
                setFormData((prevState) => ({
                  ...prevState,
                  ingredients: [...(prevState.ingredients || []), ""],
                }))
              }
            >
              Add Ingredient
            </Button>
            {formData.ingredients?.length ? (
              <Button
                onClick={() => {
                  const newIngredients = [...(formData.ingredients || [])];
                  newIngredients.pop();
                  setFormData((prevState) => ({
                    ...prevState,
                    ingredients: newIngredients,
                  }));
                }}
              >
                Remove Ingredient
              </Button>
            ) : null}
          </div>
        </div>
        <div className={style.form_input}>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default Index;
