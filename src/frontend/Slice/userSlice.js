import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const initialState = {
  allUsers: [],
  loading: false,
  error: "",
};

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const {
      data: { users },
    } = await axios.get("/api/users");
    return { users };
  } catch (error) {
    console.error(error);
  }
});
export const follow = createAsyncThunk(
  "user/follow",
  async ({ followUserId, token }) => {
    try {
      const {
        data: { followUser, user },
        status,
      } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      if (status === 200) {
        toast.custom(
          <div className="bg-white text-black rounded-lg p-3">
            following {followUser.username}
          </div>
        );
      }
      return { followUser, user };
    } catch (error) {
      console.error(error);
    }
  }
);
export const unfollow = createAsyncThunk(
  "user/unfollow",
  async ({ followUserId, token }) => {
    try {
      const {
        data: { followUser, user },
        status,
      } = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      if (status === 200) {
        toast.custom(
          <div className="bg-white text-black rounded-lg p-3">
            unFollowed {followUser.username}
          </div>
        );
      }
      return { followUser, user };
    } catch (error) {
      console.error(error);
    }
  }
);
const updateFollowingUser = (users, followingUser) => {
  const IsUsers = users.find(
    (currentUser) => currentUser.username === followingUser.username
  );
  if (IsUsers) {
    users = [...users]?.map((eachUser) =>
      eachUser.username === IsUsers.username ? followingUser : eachUser
    );
  }

  return users;
};
const updateFollowedUser = (users, followedUser) => {
  const IsUser = users?.find(
    (currentUser) => currentUser.username === followedUser.username
  );
  if (IsUser) {
    users = [...users]?.map((eachUser) =>
      eachUser.username === IsUser.username ? followedUser : eachUser
    );
  }
  return users;
};

export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ userData, token }) => {
    try {
      const {
        data: { user },
        status,
      } = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: token } }
      );
      if (status === 201) {
        toast.success("successfully update", {
          icon: "😎",
        });
      }
      return { user };
    } catch (error) {
      console.error(error);
    }
  }
);
const updatedUser = (users, updatedUser) => {
  const IsUser = users?.find(
    (eachUser) => eachUser?.username === updatedUser?.username
  );

  if (IsUser) {
    users = [...users].map((currentUser) =>
      currentUser.username === updatedUser.username ? updatedUser : currentUser
    );
  }
  return users;
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(follow.fulfilled, (state, action) => {
        const { followUser, user } = action.payload;
        state.allUsers = updateFollowingUser(current(state).allUsers, user);
        state.allUsers = updateFollowedUser(
          current(state).allUsers,
          followUser
        );
      })
      .addCase(unfollow.fulfilled, (state, action) => {
        const { followUser, user } = action.payload;
        state.allUsers = updateFollowingUser(current(state).allUsers, user);
        state.allUsers = updateFollowedUser(
          current(state).allUsers,
          followUser
        );
      })
      .addCase(getUser.fulfilled, (state, { payload: { users } }) => {
        state.allUsers = users;
        state.loading = false;
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.allUsers = updatedUser(current(state).allUsers, payload.user);
      });
  },
});
export default userSlice.reducer;
