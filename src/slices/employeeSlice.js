import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
  loadStatus: "",
  loadError: "",
  employeeLoaded: false,
};

export const loadEmployee = createAsyncThunk(
  "employee/loadEmployee",
  async (obj, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch("./data/employees.json");
      if (!response.ok) {
        return rejectWithValue(response.status);
      }
      const data = await response.json();
      return fulfillWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    createNewEmployee(state, action) {
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadEmployee.pending, (state) => {
      return { ...state, loadStatus: "pending" };
    });
    builder.addCase(loadEmployee.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          arr: [action.payload],
          loadStatus: "Fulfilled",
          employeeLoaded: true,
        };
      } else return state;
    });
    builder.addCase(loadEmployee.rejected, (state, action) => {
      console.log(action);
      return {
        ...state,
        arr: [...state.arr, action],
        loadStatus: "rejected",
        loadError: action.error.message,
      };
    });
  },
});
export const { createNewEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
