import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: JSON.parse(localStorage.getItem("employee")) || [],
  loadStatus: "",
  loadError: "",
  employeeLoaded: false,
};

export const loadEmployee = createAsyncThunk(
  "employee/loadEmployee",
  async (obj, { rejectWithValue, fulfillWithValue, getState }) => {
    try {
      // const currentState = getState();
      // console.log(currentState, JSON.parse(localStorage.getItem("employee")));
      // if (localStorage.getItem("employee")) {
      //   currentState.employee.arr.push(
      //     JSON.parse(localStorage.getItem("employee"))
      //   );
      // } else {
      const response = await fetch("./data/employees.json");
      if (!response.ok) {
        return rejectWithValue(response.status);
      }
      const data = await response.json();
      localStorage.setItem("employee", JSON.stringify(data));
      return fulfillWithValue(data);
      // }
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
      state.arr.push(action.payload);
      localStorage.setItem("employee", JSON.stringify(state.arr));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadEmployee.pending, (state) => {
      return { ...state, loadStatus: "pending" };
    });
    builder.addCase(loadEmployee.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          arr: Object.assign([...state.arr], action.payload),
          loadStatus: "Fulfilled",
          employeeLoaded: true,
        };
      } else return state;
    });
    builder.addCase(loadEmployee.rejected, (state, action) => {
      console.log(action);
      return {
        ...state,
        loadStatus: "rejected",
        loadError: action.error.message,
      };
    });
  },
});
export const { createNewEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
