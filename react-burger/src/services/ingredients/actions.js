import {createAsyncThunk} from "@reduxjs/toolkit";
import {getIngredients} from "../../utils/api";

export const fetchIngredients = createAsyncThunk(
    "ingredients/fetch_ingredients",
    async () => {
        const res = await getIngredients();
        return res.data;
    }
);